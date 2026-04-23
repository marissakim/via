import { ArrowRight } from 'lucide-react';
import { colors, gradients, fonts } from '../theme';
import { WordmarkA, WordmarkB, WordmarkC, WordmarkD } from './ViaWordmark';

// Wordmark showcase mode — four candidate treatments stacked so the user
// can compare side-by-side on the real landing gradient. Each variant
// has the same supporting copy so only the wordmark changes.
//
// When a direction is picked: replace this showcase with the chosen
// variant and remove the other three from ViaWordmark.jsx.

const variants = [
  {
    id: 'A',
    label: 'A · "via." — minimalist with period',
    Wordmark: WordmarkA,
    note: 'Confident and brand-forward. Similar to Glossier, Carrot, Apple.',
  },
  {
    id: 'B',
    label: 'B · "via→" — arrow dot',
    Wordmark: WordmarkB,
    note: 'Forward motion baked into the letterform. Pathway as directional.',
  },
  {
    id: 'C',
    label: 'C · "via" with path underline',
    Wordmark: WordmarkC,
    note: 'Subtle curved route line below the wordmark — pathway as journey.',
  },
  {
    id: 'D',
    label: 'D · "v i a" — editorial tracking',
    Wordmark: WordmarkD,
    note: 'Generous letter-spacing. Premium, pairs well with italic tagline.',
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
              padding: '48px 24px',
              borderBottom: '1px solid rgba(251, 249, 245, 0.08)',
              textAlign: 'center',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 180,
              marginBottom: 16,
            }}>
              <Wordmark size={140} />
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
