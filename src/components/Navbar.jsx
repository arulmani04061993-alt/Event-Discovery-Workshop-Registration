import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useRegistrations } from '../hooks/useRegistrations';
import { useEvents } from '../hooks/useEvents';
import { 
  Compass, 
  Ticket, 
  Menu, 
  X, 
  Sparkles,
  Layers,
  Heart
} from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalRegistrations } = useRegistrations();
  const { favorites } = useEvents();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinkStyle = ({ isActive }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '0.925rem',
    fontWeight: isActive ? '600' : '500',
    color: isActive ? '#FFFFFF' : '#94A3B8',
    background: isActive ? 'rgba(79, 70, 229, 0.18)' : 'transparent',
    border: isActive ? '1px solid rgba(99, 102, 241, 0.35)' : '1px solid transparent',
    transition: 'all 0.2s ease'
  });

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        width: '100%',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        background: isScrolled
          ? 'rgba(9, 13, 22, 0.95)'
          : 'rgba(9, 13, 22, 0.82)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px'
        }}
      >
        {/* Brand Logo with User Custom WebP Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none'
          }}
        >
          <img
            src="/assets/images/stackly-logo.webp?v=4"
            alt="STACKLY"
            style={{
              height: '38px',
              width: 'auto',
              maxHeight: '40px',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 2px 10px rgba(6, 182, 212, 0.35))'
            }}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '8px'
          }}
          className="desktop-nav"
        >
          <NavLink
            to="/"
            style={navLinkStyle}
            end
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Home
          </NavLink>
          <NavLink to="/events" style={navLinkStyle}>
            <Compass size={16} />
            Explore Events
          </NavLink>
          <NavLink to="/registrations" style={navLinkStyle}>
            <Ticket size={16} />
            My Registrations
            {totalRegistrations > 0 && (
              <span
                style={{
                  background: '#4F46E5',
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  padding: '1px 7px',
                  borderRadius: '10px',
                  marginLeft: '4px'
                }}
              >
                {totalRegistrations}
              </span>
            )}
          </NavLink>
        </nav>

        {/* Right Action Button */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '12px'
          }}
          className="desktop-cta"
        >
          <NavLink
            to="/workshops"
            className="btn-primary"
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}
          >
            <Sparkles size={16} />
            Find Workshops
          </NavLink>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
            borderRadius: '8px',
            color: '#F8FAFC',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Fullscreen Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div
          className="animate-fade-in"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            height: '100dvh',
            background: 'radial-gradient(ellipse at top, #111827 0%, #080C14 100%)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '1.25rem 1.5rem 2.5rem',
            overflowY: 'auto'
          }}
        >
          {/* Header inside fullscreen menu */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '76px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '0.75rem'
            }}
          >
            <Link
              to="/"
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none'
              }}
            >
              <img
                src="/assets/images/stackly-logo.webp?v=4"
                alt="STACKLY"
                style={{
                  height: '38px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 10px rgba(6, 182, 212, 0.35))'
                }}
              />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px',
                borderRadius: '12px',
                color: '#F8FAFC',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                cursor: 'pointer'
              }}
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
          </div>

          {/* Navigation Links in Center */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              margin: 'auto 0',
              padding: '2rem 0'
            }}
          >
            <NavLink
              to="/"
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 20px',
                borderRadius: '14px',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: isActive ? '#FFFFFF' : '#94A3B8',
                background: isActive ? 'rgba(79, 70, 229, 0.22)' : 'rgba(255, 255, 255, 0.03)',
                border: isActive ? '1px solid rgba(99, 102, 241, 0.45)' : '1px solid rgba(255, 255, 255, 0.06)',
                transition: 'all 0.2s ease'
              })}
              end
            >
              Home
            </NavLink>

            <NavLink
              to="/events"
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 20px',
                borderRadius: '14px',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: isActive ? '#FFFFFF' : '#94A3B8',
                background: isActive ? 'rgba(79, 70, 229, 0.22)' : 'rgba(255, 255, 255, 0.03)',
                border: isActive ? '1px solid rgba(99, 102, 241, 0.45)' : '1px solid rgba(255, 255, 255, 0.06)',
                transition: 'all 0.2s ease'
              })}
            >
              <Compass size={22} color="#06B6D4" />
              Explore Events
            </NavLink>

            <NavLink
              to="/registrations"
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 20px',
                borderRadius: '14px',
                fontSize: '1.2rem',
                fontWeight: '600',
                color: isActive ? '#FFFFFF' : '#94A3B8',
                background: isActive ? 'rgba(79, 70, 229, 0.22)' : 'rgba(255, 255, 255, 0.03)',
                border: isActive ? '1px solid rgba(99, 102, 241, 0.45)' : '1px solid rgba(255, 255, 255, 0.06)',
                transition: 'all 0.2s ease'
              })}
            >
              <Ticket size={22} color="#818CF8" />
              <span>My Registrations</span>
              {totalRegistrations > 0 && (
                <span
                  style={{
                    background: '#4F46E5',
                    color: '#FFFFFF',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    padding: '3px 10px',
                    borderRadius: '12px',
                    marginLeft: 'auto'
                  }}
                >
                  {totalRegistrations}
                </span>
              )}
            </NavLink>
          </div>

          {/* Bottom Action CTA & Footer */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <NavLink
              to="/workshops"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '16px',
                fontSize: '1.1rem',
                borderRadius: '14px',
                boxShadow: '0 8px 24px rgba(79, 70, 229, 0.4)'
              }}
            >
              <Sparkles size={20} />
              Find Workshops
            </NavLink>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
