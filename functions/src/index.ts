import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import fetch from "node-fetch";

admin.initializeApp();

/**
 * Fires whenever a new document lands in buyer_leads (i.e. every buyer inquiry
 * submitted through the Contact page). Sends a WhatsApp notification to the business
 * number via the WhatsApp Cloud API.
 *
 * Required config (set with `firebase functions:config:set`):
 *   whatsapp.token          - WhatsApp Cloud API permanent access token
 *   whatsapp.phone_number_id - the Cloud API "from" phone number ID
 *   whatsapp.business_number - the business's own WhatsApp number (message recipient)
 */
export const onLeadCreated = functions.firestore
  .document("buyer_leads/{leadId}")
  .onCreate(async (snapshot) => {
    const lead = snapshot.data();
    const config = functions.config();

    const token = config.whatsapp?.token;
    const phoneNumberId = config.whatsapp?.phone_number_id;
    const businessNumber = config.whatsapp?.business_number;

    const message =
      `New Buyer Inquiry\n\n` +
      `Company: ${lead.companyName}\n` +
      `Buyer: ${lead.buyerName}\n` +
      `Country: ${lead.country}\n` +
      `Quantity: ${lead.quantity}\n` +
      `Frequency: ${lead.frequency}\n` +
      `Destination Port: ${lead.destinationPort}\n` +
      `Phone: ${lead.phone}\n` +
      `Email: ${lead.email}\n\n` +
      `Please contact immediately.`;

    if (!token || !phoneNumberId || !businessNumber) {
      // Cloud API isn't configured yet — the Contact page's client-side wa.me fallback
      // already opens a prefilled WhatsApp chat for the visitor, so nothing is lost.
      // This log just tells the admin the automated path still needs setup.
      functions.logger.warn(
        "WhatsApp Cloud API not configured — skipping automated notification. " +
          "Set whatsapp.token / whatsapp.phone_number_id / whatsapp.business_number."
      );
      return;
    }

    try {
      const response = await fetch(
        `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: businessNumber,
            type: "text",
            text: { body: message },
          }),
        }
      );

      if (!response.ok) {
        const errorBody = await response.text();
        functions.logger.error("WhatsApp Cloud API request failed", errorBody);
      }
    } catch (err) {
      functions.logger.error("Error calling WhatsApp Cloud API", err);
    }
  });
