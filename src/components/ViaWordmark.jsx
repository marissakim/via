// Four candidate wordmark treatments for the via brand. Each renders
// at the scale requested via the `size` prop and in a single color
// inherited from parent (via `color` prop defaulting to currentColor).
//
// A — minimalist 'via.' with period
// B — 'via' with the dot of the 'i' replaced by a small forward arrow
// C — 'via' with a subtle curved path line underneath
// D — 'v i a' with wide editorial letter-spacing
//
// Passed through from LandingPage for the showcase — once a direction
// is picked, the winning variant becomes the default export and the
// others are removed.

import { fonts } from '../theme';

export function WordmarkA({ size = 168, color = '#FBF9F5' }) {
  return (
    <span style={{
      fontSize: size,
      fontFamily: fonts.family,
      fontWeight: 500,
      letterSpacing: -size * 0.04,
      color,
      lineHeight: 1,
      display: 'inline-block',
    }}>
      via.
    </span>
  );
}

export function WordmarkB({ size = 168, color = '#FBF9F5' }) {
  // Render 'v', then a dotless 'ı' (U+0131) with a custom arrow positioned
  // above it, then 'a'. The arrow SVG replaces what would normally be the
  // dot over the 'i'.
  const arrowSize = size * 0.11;
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
      <span style={{
        position: 'absolute',
        // Approximate: arrow sits above the dotless-i, which is ~38% across
        // the wordmark (after 'v'). Adjustable via eye rather than math.
        left: '37%',
        top: `${size * 0.04}px`,
        lineHeight: 0,
      }}>
        <svg
          width={arrowSize * 2.6}
          height={arrowSize}
          viewBox="0 0 26 10"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 5 L22 5 M17 1 L22 5 L17 9"
            stroke={color}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  );
}

export function WordmarkC({ size = 168, color = '#FBF9F5' }) {
  return (
    <span style={{
      position: 'relative',
      display: 'inline-block',
      paddingBottom: size * 0.12,
    }}>
      <span style={{
        fontSize: size,
        fontFamily: fonts.family,
        fontWeight: 500,
        letterSpacing: -size * 0.04,
        color,
        lineHeight: 1,
        display: 'inline-block',
      }}>
        via
      </span>
      <svg
        width="100%"
        height={size * 0.12}
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          display: 'block',
        }}
      >
        <path
          d="M2 8 Q30 2 50 6 T98 8"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        />
      </svg>
    </span>
  );
}

export function WordmarkD({ size = 168, color = '#FBF9F5' }) {
  return (
    <span style={{
      fontSize: size * 0.85, // slightly smaller since the spacing eats width
      fontFamily: fonts.family,
      fontWeight: 400,
      letterSpacing: size * 0.12,
      color,
      lineHeight: 1,
      display: 'inline-block',
      paddingLeft: size * 0.12, // compensate for trailing letter-spacing
    }}>
      v i a
    </span>
  );
}
