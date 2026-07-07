import { cn } from "@/lib/utils";

/**
 * A row of shallow scalloped arcs, echoing the crown of a pomegranate.
 * Used between major homepage sections in place of a plain border.
 */
export default function SectionDivider({
  className,
  fromColor = "text-cream",
}: {
  className?: string;
  fromColor?: string;
}) {
  return (
    <div className={cn("crown-divider", fromColor, className)} aria-hidden="true">
      <svg viewBox="0 0 400 28" preserveAspectRatio="none" fill="currentColor">
        <path d="M0,0 Q12.5,28 25,0 Q37.5,28 50,0 Q62.5,28 75,0 Q87.5,28 100,0 L100,0 L400,0 Q387.5,28 375,0 Q362.5,28 350,0 Q337.5,28 325,0 Q312.5,28 300,0 Q287.5,28 275,0 Q262.5,28 250,0 Q237.5,28 225,0 Q212.5,28 200,0 Q187.5,28 175,0 Q162.5,28 150,0 Q137.5,28 125,0 Q112.5,28 100,0 L0,0 Z" />
      </svg>
    </div>
  );
}
