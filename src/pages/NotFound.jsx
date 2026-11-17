import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, HelpCircle } from 'lucide-react';

export const NotFound = () => {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem',
        textAlign: 'center'
      }}
    >
      <div
        className="glass-panel animate-scale-in"
        style={{
          maxWidth: '560px',
          width: '100%',
          padding: 'clamp(2rem, 5vw, 4rem)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div
          style={{
            fontSize: '6rem',
            fontWeight: '900',
            fontFamily: 'monospace',
            background: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1,
            marginBottom: '1rem'
          }}
        >
          404
        </div>

        <h1 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.75rem' }}>
          Page Not Found
        </h1>

        <p style={{ fontSize: '0.95rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '2rem' }}>
          The link you followed may be broken or the event page has moved. Explore our upcoming conferences and active workshops below.
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
    </div>
  );
};

export default NotFound;
