// via wordmark — 'via' in Bricolage Grotesque with a sage-colored dot
// on top of the 'i'. Single point of brand color in an otherwise
// monochrome letterform — reads as a small waypoint floating above
// the word. Used on the landing page as the hero, and in the
// Dashboard header at a smaller scale.

import { fonts, colors } from '../theme';

export default function ViaWordmark({
  size = 168,
  color = '#FBF9F5',
  dotColor = colors.sage,
  /**
   * Position of the dot as a percentage from the left edge of the word,
   * tuned to sit directly over the dotless 'ı' in Bricolage Grotesque 500
   * with our -4% letter-spacing. Exposed as a prop so it can be nudged
   * if the font weight or letter-spacing ever changes.
   */
  dotLeftPct = 48,
}) {
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
          left: `${dotLeftPct}%`,
          top: `${size * 0.06}px`,
          width: dotSize,
          height: dotSize,
          borderRadius: '50%',
          background: dotColor,
          display: 'block',
          // Nudge left by half the dot's width so the dot is centered
          // on the percentage position instead of starting at it.
          transform: 'translateX(-50%)',
        }}
      />
    </span>
  );
}
