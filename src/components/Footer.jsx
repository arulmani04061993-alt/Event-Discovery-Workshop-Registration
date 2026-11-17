import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  Mail, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  Award, 
  ArrowRight,
  Heart,
  Share2,
  Send,
  MessageSquare,
  Sparkles
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer
      style={{
        marginTop: '6rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: '#070B14',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative top ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #4F46E5, #06B6D4, transparent)'
        }}
      />

      <div className="container" style={{ padding: '4.5rem 1.5rem 2.5rem 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: '340px' }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                marginBottom: '1.25rem'
              }}
            >
              <img
                src="/assets/images/stackly-logo.webp?v=4"
                alt="STACKLY"
                style={{
                  height: '42px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  filter: 'drop-shadow(0 2px 10px rgba(6, 182, 212, 0.3))'
                }}
              />
            </Link>

            <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              The definitive enterprise event discovery & technical workshop platform. Connecting engineers, executives, and innovators with high-impact learning experiences.
            </p>

            {/* Social Media Icons (Top of Verified badge - navigates to 404 page) */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '1.25rem' }}>
              {[
                {
                  label: 'Twitter / X',
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )
                },
                {
                  label: 'LinkedIn',
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  )
                },
                {
                  label: 'GitHub',
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  )
                },
                {
                  label: 'Discord / Community',
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  )
                }
              ].map((item, idx) => (
                <Link
                  key={idx}
                  to="/404"
                  aria-label={item.label}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#94A3B8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#06B6D4';
                    e.currentTarget.style.borderColor = '#06B6D4';
                    e.currentTarget.style.background = 'rgba(6, 182, 212, 0.12)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94A3B8';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {item.svg}
                </Link>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '8px', color: '#64748B', fontSize: '0.85rem' }}>
              <ShieldCheck size={16} color="#10B981" />
              <span>Verified Global Conferences & Labs</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: '0.95rem',
                fontWeight: '700',
                color: '#FFFFFF',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem'
              }}
            >
              Platform Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link to="/" style={{ color: '#94A3B8', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/events?category=Business" style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                  Business & Leadership
                </Link>
              </li>
              <li>
                <Link to="/registrations" style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                  My Confirmed Passes
                </Link>
              </li>
            </ul>
          </div>

          {/* Focus Categories / Mastery Tracks (All link to 404 page) */}
          <div>
            <h4
              style={{
                fontSize: '0.95rem',
                fontWeight: '700',
                color: '#FFFFFF',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem'
              }}
            >
              Mastery Tracks
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <Link to="/404" style={{ color: '#94A3B8', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Autonomous AI & LLM Systems
                </Link>
              </li>
              <li>
                <Link to="/404" style={{ color: '#94A3B8', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Spatial UI & Design Systems
                </Link>
              </li>
              <li>
                <Link to="/404" style={{ color: '#94A3B8', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Venture Scale & PLG Architecture
                </Link>
              </li>
              <li>
                <Link to="/404" style={{ color: '#94A3B8', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Rust & Data Engineering Labs
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Community preview */}
          <div>
            <h4
              style={{
                fontSize: '0.95rem',
                fontWeight: '700',
                color: '#FFFFFF',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem'
              }}
            >
              Executive Dispatch
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#94A3B8', marginBottom: '1rem', lineHeight: 1.5 }}>
              Receive monthly invitations to invite-only roundtables and early-bird summit releases.
            </p>
            <div
              style={{
                display: 'flex',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '4px',
                overflow: 'hidden'
              }}
            >
              <input
                type="email"
                placeholder="Enter work email..."
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#FFFFFF',
                  padding: '8px 12px',
                  fontSize: '0.85rem',
                  flex: 1
                }}
              />
              <button
                type="button"
                onClick={() => alert('Thank you for subscribing to STACKLY Executive Dispatch!')}
                style={{
                  background: '#4F46E5',
                  color: '#FFFFFF',
                  padding: '8px 14px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#64748B'
          }}
        >
          <p>© {new Date().getFullYear()} STACKLY Technologies Inc. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security</span>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
