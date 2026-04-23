// Custom via logo mark: a stylized apple with a leaf — originally drawn
// for the "Eve" brand (tree of knowledge reference). The mark still works
// for via because the apple evokes growth, fertility, and the origin of
// a journey — resonant with via's meaning of "path" and the pathways to
// having a child.
//
// Body is rendered as two halves meeting at a single top cleft (instead
// of a separate "dimple" path overlaying a circle), giving a refined
// cardioid silhouette. Stem leans slightly to balance the leaf, and the
// leaf includes a center vein for added detail.
//
// Set animated=true for a subtle entry animation (fade + scale) plus a
// continuous gentle leaf sway. Used on the landing page; the small
// dashboard logo stays still by default.
export default function ViaLogo({
  size = 48,
  color = 'currentColor',
  strokeWidth = 1.5,
  animated = false,
}) {
  return (
    <svg
      width={size}
      height={size * (56 / 48)}
      viewBox="0 0 48 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="via"
      className={animated ? 'via-logo-animated' : undefined}
    >
      <g
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Apple body — left half, from top cleft around to bottom */}
        <path d="M24 22.5 C20 19, 13 20.5, 9 27 C5 33, 6 44, 12 49 C16 53, 20 53, 24 52" />
        {/* Apple body — right half, mirror of the left */}
        <path d="M24 22.5 C28 19, 35 20.5, 39 27 C43 33, 42 44, 36 49 C32 53, 28 53, 24 52" />
        {/* Stem — slight leftward lean to feel hand-drawn */}
        <path d="M24 22.5 C23.5 18, 22 15, 20 12" />
        {/* Leaf + vein wrapped in a group so they sway together around the stem */}
        <g className={animated ? 'via-logo-leaf' : undefined}>
          {/* Leaf — tapered teardrop curving up and to the right */}
          <path d="M20 12 C25 7, 33 7, 36 11 C33 17, 27 18, 21 14" />
          {/* Leaf vein — subtle line along the leaf for refinement */}
          <path d="M21 14 C25 12, 30 11, 34 11" strokeWidth={strokeWidth * 0.65} opacity="0.5" />
        </g>
      </g>
    </svg>
  );
}
