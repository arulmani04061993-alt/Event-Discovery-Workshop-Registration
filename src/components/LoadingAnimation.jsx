import React from 'react';

export const LoadingAnimation = ({ text = "Loading experiences..." }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5rem 1rem',
        minHeight: '300px'
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '54px',
          height: '54px'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '50%',
            border: '3px solid rgba(79, 70, 229, 0.15)',
            borderTopColor: '#4F46E5',
            animation: 'spin 0.9s linear infinite'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: '8px',
            borderRadius: '50%',
            border: '3px solid rgba(6, 182, 212, 0.15)',
            borderBottomColor: '#06B6D4',
            animation: 'spin 1.4s linear infinite reverse'
          }}
        />
      </div>

      {text && (
        <p
          style={{
            marginTop: '1.25rem',
            fontSize: '0.95rem',
            fontWeight: '500',
            color: '#94A3B8',
            letterSpacing: '0.02em'
          }}
        >
          {text}
        </p>
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;
