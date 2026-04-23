// Candidate wordmark treatments for the via brand. Each renders at the
// scale requested via the `size` prop and inherits color from parent.
//
// WordmarkArrowUnder — 'via' with a small forward arrow below the wordmark
// WordmarkSageDot    — 'via' where the dot on the 'i' is a sage-colored pop
//
// Once a direction is picked, the winning variant becomes the default
// export and the other gets removed.

import { fonts, colors } from '../theme';

/**
 * Variant 1 — 'via' with a forward arrow below the wordmark, centered.
 * The arrow sits under the type like a destination marker on a map,
 * reinforcing the "pathway / through to" meaning of the brand name.
 */
export function WordmarkArrowUnder({ size = 168, color = '#FBF9F5' }) {
  const arrowWidth = size * 0.42;
  const arrowHeight = size * 0.14;
  return (
    <span style={{
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: size * 0.06,
      lineHeight: 1,
    }}>
      <span style={{
        fontSize: size,
        fontFamily: fonts.family,
        fontWeight: 500,
        letterSpacing: -size * 0.04,
        color,
        lineHeight: 1,
      }}>
        via
      </span>
      <svg
        width={arrowWidth}
        height={arrowHeight}
        viewBox="0 0 42 14"
        fill="none"
        aria-hidden="true"
        style={{ display: 'block', opacity: 0.9 }}
      >
        <path
          d="M2 7 L36 7 M29 2 L36 7 L29 12"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/**
 * Variant 2 — 'via' rendered with a dotless 'ı' and a sage-colored
 * round dot hovering above it in place of the standard dot. Adds a
 * single moment of color to an otherwise monochrome mark — subtle
 * brand accent that also reads as a "waypoint" above the letterform.
 */
export function WordmarkSageDot({ size = 168, color = '#FBF9F5', dotColor = colors.sage }) {
  const dotSize = size * 0.085;
  return (
    <span style={{
      position: 'relative',
      fontSize: size,
      fontFamily: fonts.family,
      fontWeight: 500,
      letterSpacing: -size * 0.04,
      color,
      lineHeight: 1,
      display: 'inline-block',
    }}>
      v{'\u0131'}a
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          // Roughly over where the 'i' lives inside 'via'
          left: '41%',
          top: `${size * 0.06}px`,
          width: dotSize,
          height: dotSize,
          borderRadius: '50%',
          background: dotColor,
          display: 'block',
        }}
      />
    </span>
  );
}
