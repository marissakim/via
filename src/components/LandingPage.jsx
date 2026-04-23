import { ArrowRight } from 'lucide-react';
import { colors, gradients, fonts } from '../theme';
import { WordmarkArrowUnder, WordmarkSageDot } from './ViaWordmark';

// Two-variant wordmark showcase — user picks a direction for the via
// brand identity. Once chosen, the winning variant becomes the landing
// page's default hero and the other is removed.

const variants = [
  {
    id: 1,
    label: '1 · "via" with forward arrow underneath',
    Wordmark: WordmarkArrowUnder,
    note: 'Arrow sits below the wordmark like a destination marker — pathway meaning as a quiet second layer.',
  },
  {
    id: 2,
    label: '2 · "via" with sage dot on the "i"',
    Wordmark: WordmarkSageDot,
    note: 'One point of brand color in a monochrome mark. The sage dot reads as a waypoint floating above the letterform.',
  },
];

export default function LandingPage({ onGetStarted }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: gradients.dawn,
      padding: '40px 24px 60px',
      fontFamily: fonts.family,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Soft radial accent in top-right for depth */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '55%',
        height: '55%',
        background: 'radial-gradient(circle, rgba(217, 136, 110, 0.35), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 900,
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}>
        <p style={{
          fontSize: 12,
          fontWeight: 600,
          color: 'rgba(251, 249, 245, 0.65)',
          textTransform: 'uppercase',
          letterSpacing: 1.5,
          textAlign: 'center',
          margin: '0 0 36px',
        }}>
          Wordmark showcase · pick a direction
        </p>

        {variants.map(({ id, label, Wordmark, note }) => (
          <div
            key={id}
            style={{
              padding: '56px 24px',
              borderBottom: '1px solid rgba(251, 249, 245, 0.08)',
              textAlign: 'center',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 200,
              marginBottom: 20,
            }}>
              <Wordmark size={150} />
            </div>
            <p style={{
              fontSize: 13,
              fontWeight: 600,
              color: 'rgba(251, 249, 245, 0.9)',
              margin: '0 0 4px',
            }}>
              {label}
            </p>
            <p style={{
              fontSize: 13,
              color: 'rgba(251, 249, 245, 0.55)',
              margin: 0,
              maxWidth: 440,
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.5,
            }}>
              {note}
            </p>
          </div>
        ))}

        <div style={{
          textAlign: 'center',
          padding: '40px 24px 20px',
        }}>
          <p style={{
            fontSize: 16,
            color: 'rgba(251, 249, 245, 0.75)',
            fontStyle: 'italic',
            fontFamily: fonts.family,
            margin: '0 0 28px',
            lineHeight: 1.5,
          }}>
            The time is now.<br />
            The plan is yours.
          </p>
          <button
            onClick={onGetStarted}
            style={{
              background: colors.spice,
              color: '#FBF9F5',
              border: 'none',
              padding: '16px 32px',
              borderRadius: 999,
              fontSize: 16,
              fontWeight: 600,
              fontFamily: fonts.family,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              boxShadow: '0 6px 24px rgba(122, 66, 50, 0.35)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 32px rgba(122, 66, 50, 0.45)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(122, 66, 50, 0.35)';
            }}
          >
            Get started (enters the app)
            <ArrowRight size={16} />
          </button>
          <p style={{
            fontSize: 12,
            color: 'rgba(251, 249, 245, 0.4)',
            margin: '16px 0 0',
          }}>
            Pick the direction you like and I&apos;ll lock it in everywhere.
          </p>
        </div>
      </div>
    </div>
  );
}
