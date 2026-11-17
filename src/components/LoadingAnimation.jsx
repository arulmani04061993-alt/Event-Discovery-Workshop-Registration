import React from 'react';

export const LoadingAnimation = ({ text = "Loading STACKLY experiences..." }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 1rem',
        minHeight: '340px'
      }}
    >
      {/* Official STACKLY Logo Pulsing Centerpiece */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '120px',
          height: '60px'
        }}
      >
        {/* Ambient Pulsing Glow Circle */}
        <div
          style={{
            position: 'absolute',
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(99, 102, 241, 0.1) 60%, transparent 80%)',
            animation: 'pulseGlow 2s ease-in-out infinite'
          }}
        />

        {/* Logo Image with Smooth Breathing Animation */}
        <img
          src="/assets/images/stackly-logo.webp?v=4"
          alt="Loading STACKLY"
          style={{
            width: '110px',
            height: 'auto',
            objectFit: 'contain',
            position: 'relative',
            zIndex: 1,
            filter: 'drop-shadow(0 4px 14px rgba(6, 182, 212, 0.4))',
            animation: 'logoBreathe 2s ease-in-out infinite'
          }}
        />
      </div>

      {/* Modern Progress Line */}
      <div
        style={{
          width: '140px',
          height: '3px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '2px',
          overflow: 'hidden',
          marginTop: '1.5rem',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '60px',
            background: 'linear-gradient(90deg, #06B6D4, #818CF8)',
            borderRadius: '2px',
            animation: 'slideBar 1.5s ease-in-out infinite'
          }}
        />
      </div>

      {text && (
        <p
          style={{
            marginTop: '1rem',
            fontSize: '0.88rem',
            fontWeight: '600',
            color: '#94A3B8',
            letterSpacing: '0.04em',
            textTransform: 'uppercase'
          }}
        >
          {text}
        </p>
      )}

      <style>{`
        @keyframes logoBreathe {
          0%, 100% {
            transform: scale(0.96);
            opacity: 0.85;
          }
          50% {
            transform: scale(1.04);
            opacity: 1;
          }
        }
        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(0.9);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }
        @keyframes slideBar {
          0% {
            transform: translateX(-60px);
          }
          50% {
            transform: translateX(140px);
          }
          100% {
            transform: translateX(-60px);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;
