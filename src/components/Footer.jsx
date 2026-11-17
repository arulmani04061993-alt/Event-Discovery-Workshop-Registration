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
  Heart
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
                <Link to="/events" style={{ color: '#94A3B8', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  Explore All Events
                </Link>
              </li>
              <li>
                <Link to="/events?category=Technology" style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                  Technology Summits
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

          {/* Focus Categories */}
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
                <Link to="/events?category=Technology" style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                  Autonomous AI & LLM Systems
                </Link>
              </li>
              <li>
                <Link to="/events?category=Design" style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                  Spatial UI & Design Systems
                </Link>
              </li>
              <li>
                <Link to="/events?category=Business" style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                  Venture Scale & PLG Architecture
                </Link>
              </li>
              <li>
                <Link to="/events?category=Education" style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
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
