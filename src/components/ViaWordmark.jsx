// Candidate wordmark treatments for the via brand. Each renders at the
// scale requested via the `size` prop and inherits color from parent.
//
// WordmarkArrowUnder — 'via' with a small forward arrow below the wordmark
// WordmarkSageDot    — 'via' where the dot on the 'i' is a sage-colored pop
//
// Once a direction is picked, the winning variant becomes the default
// export and the other gets removed.

import { useEffect, useRef, useState } from 'react';
import { fonts, colors } from '../theme';

/**
 * Variant 1 — 'via' with a forward arrow directly below the wordmark,
 * spanning the full width of the word. We measure the rendered wordmark
 * with a ref (re-measuring after Bricolage Grotesque finishes loading)
 * so the arrow's width matches the word exactly at any size.
 */
export function WordmarkArrowUnder({ size = 168, color = '#FBF9F5' }) {
  const wordRef = useRef(null);
  const [wordWidth, setWordWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (wordRef.current) setWordWidth(wordRef.current.offsetWidth);
    };
    measure();
    // Remeasure once the webfont is actually ready — first paint uses
    // the fallback, which has slightly different metrics.
    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(measure);
    }
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [size]);

  const arrowHeight = Math.max(size * 0.06, 10);
  const strokeWidth = Math.max(size * 0.013, 1.5);
  const tipSize = arrowHeight * 0.85;

  return (
    <span style={{
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      lineHeight: 1,
    }}>
      <span
        ref={wordRef}
        style={{
          fontSize: size,
          fontFamily: fonts.family,
          fontWeight: 500,
          letterSpacing: -size * 0.04,
          color,
          lineHeight: 1,
        }}
      >
        via
      </span>
      {wordWidth > 0 && (
        <svg
          width={wordWidth}
          height={arrowHeight}
          viewBox={`0 0 ${wordWidth} ${arrowHeight}`}
          aria-hidden="true"
          style={{
            display: 'block',
            marginTop: size * 0.03,
          }}
        >
          <path
            d={`
              M0 ${arrowHeight / 2}
              L${wordWidth - tipSize * 0.3} ${arrowHeight / 2}
              M${wordWidth - tipSize} ${arrowHeight / 2 - tipSize * 0.55}
              L${wordWidth} ${arrowHeight / 2}
              L${wordWidth - tipSize} ${arrowHeight / 2 + tipSize * 0.55}
            `}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      )}
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
