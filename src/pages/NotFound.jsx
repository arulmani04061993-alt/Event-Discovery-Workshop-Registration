import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Layers } from 'lucide-react';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // If there is history, navigate back; otherwise fallback to home
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        background: 'radial-gradient(circle at 50% 30%, rgba(79, 70, 229, 0.18) 0%, rgba(6, 182, 212, 0.08) 40%, #090D16 80%)'
      }}
    >
      {/* Brand Logo with User WebP Logo */}
      <div style={{ marginBottom: '2rem' }}>
        <img
          src="/assets/images/stackly-logo.webp?v=4"
          alt="STACKLY"
          style={{
            height: '48px',
            width: 'auto',
            objectFit: 'contain',
            display: 'block',
            filter: 'drop-shadow(0 4px 16px rgba(6, 182, 212, 0.4))'
          }}
        />
      </div>

      <div
        className="glass-panel animate-scale-in"
        style={{
          maxWidth: '560px',
          width: '100%',
          padding: 'clamp(2rem, 5vw, 3.5rem)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
        }}
      >
        <div
          className="jumping-404"
          style={{
            fontSize: 'clamp(5rem, 10vw, 7.5rem)',
            fontWeight: '900',
            fontFamily: 'monospace',
            background: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1,
            marginBottom: '1rem',
            letterSpacing: '-0.04em',
            display: 'inline-block'
          }}
        >
          404
        </div>

        <h1 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.75rem' }}>
          Page Not Found
        </h1>

        <p style={{ fontSize: '0.95rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '2rem' }}>
          The link you followed may be broken, or the summit page has expired. You can return to your previous page or navigate to the homepage below.
        </p>

        {/* Two Action Buttons: Go Back and Go to Home */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
          {/* 1. Go Back Button: Takes the user back to where they came from */}
          <button
            onClick={handleGoBack}
            className="btn-secondary"
            style={{
              padding: '0.8rem 1.6rem',
              fontSize: '0.95rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          {/* 2. Go to Home Button: Takes user directly to Home page */}
          <Link
            to="/"
            className="btn-primary"
            style={{
              padding: '0.8rem 1.8rem',
              fontSize: '0.95rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Home size={18} />
            Go to Home
          </Link>
        </div>
      </div>

      <div style={{ marginTop: '2rem', fontSize: '0.82rem', color: '#64748B' }}>
        © {new Date().getFullYear()} STACKLY Technologies. All rights reserved.
      </div>

      <style>{`
        @keyframes jumpBounce {
          0%, 100% {
            transform: translateY(0) scale(1);
            filter: drop-shadow(0 10px 15px rgba(6, 182, 212, 0.3));
          }
          30% {
            transform: translateY(-28px) scale(1.05, 0.95);
            filter: drop-shadow(0 25px 25px rgba(79, 70, 229, 0.5));
          }
          50% {
            transform: translateY(0) scale(0.95, 1.05);
          }
          70% {
            transform: translateY(-14px) scale(1.02, 0.98);
          }
          85% {
            transform: translateY(0) scale(1);
          }
        }

        .jumping-404 {
          animation: jumpBounce 1.8s infinite ease-in-out;
          transform-origin: bottom center;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
