import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Layers } from 'lucide-react';

export const NotFound = () => {
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
      {/* Brand Icon */}
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          boxShadow: '0 8px 24px rgba(79, 70, 229, 0.4)',
          marginBottom: '2rem'
        }}
      >
        <Layers size={30} strokeWidth={2.4} />
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
          style={{
            fontSize: 'clamp(5rem, 10vw, 7.5rem)',
            fontWeight: '900',
            fontFamily: 'monospace',
            background: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1,
            marginBottom: '1rem',
            letterSpacing: '-0.04em'
          }}
        >
          404
        </div>

        <h1 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.75rem' }}>
          Page Not Found
        </h1>

        <p style={{ fontSize: '0.95rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '2rem' }}>
          The link you followed may be broken, or the summit page has expired. You can return to our homepage or explore active workshops below.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
          <Link to="/" className="btn-secondary" style={{ padding: '0.75rem 1.4rem' }}>
            <Home size={16} />
            Back to Home
          </Link>

          <Link to="/events" className="btn-primary" style={{ padding: '0.75rem 1.6rem' }}>
            <Compass size={16} />
            Explore Events
          </Link>
        </div>
      </div>

      <div style={{ marginTop: '2rem', fontSize: '0.82rem', color: '#64748B' }}>
        © {new Date().getFullYear()} STACKLY Technologies. All rights reserved.
      </div>
    </div>
  );
};

export default NotFound;
