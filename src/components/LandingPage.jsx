import { ArrowRight } from 'lucide-react';
import { colors, gradients, fonts } from '../theme';
import ViaWordmark from './ViaWordmark';

const pills = ['Biomarkers', 'Your Score', 'Virtual Care', 'Treatment Paths'];

export default function LandingPage({ onGetStarted }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: gradients.dawn,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
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

      {/* Hero wordmark */}
      <div
        className="via-hero-brand"
        style={{
          marginBottom: 32,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <ViaWordmark size={168} />
      </div>

      <p
        className="via-hero-tagline"
        style={{
          fontSize: 28,
          fontFamily: fonts.family,
          fontStyle: 'italic',
          fontWeight: 400,
          color: 'rgba(251, 249, 245, 0.9)',
          textAlign: 'center',
          margin: '0 0 32px',
          letterSpacing: -0.3,
          lineHeight: 1.35,
          position: 'relative',
          zIndex: 1,
        }}
      >
        The time is now.<br />
        The plan is yours.
      </p>

      <p
        className="via-hero-subhead"
        style={{
          fontSize: 16,
          color: 'rgba(251, 249, 245, 0.65)',
          textAlign: 'center',
          maxWidth: 460,
          margin: '0 0 40px',
          lineHeight: 1.6,
          position: 'relative',
          zIndex: 1,
        }}
      >
        Track your biomarkers, compare your options, and build a plan — with the clarity to choose what&apos;s right for you.
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
          marginBottom: 48,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          transition: 'transform 0.2s, box-shadow 0.2s',
          boxShadow: '0 6px 24px rgba(122, 66, 50, 0.35)',
          position: 'relative',
          zIndex: 1,
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
        Get started
        <ArrowRight size={16} />
      </button>

      <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: 600,
        position: 'relative',
        zIndex: 1,
      }}>
        {pills.map(pill => (
          <span key={pill} style={{
            background: 'rgba(251, 249, 245, 0.08)',
            color: 'rgba(251, 249, 245, 0.85)',
            padding: '7px 16px',
            borderRadius: 999,
            fontSize: 13,
            fontWeight: 500,
            border: '1px solid rgba(251, 249, 245, 0.15)',
            backdropFilter: 'blur(8px)',
          }}>
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}
