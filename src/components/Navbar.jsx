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
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        background: isScrolled ? 'rgba(9, 13, 22, 0.88)' : 'transparent',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
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
          <NavLink to="/" style={navLinkStyle} end>
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="animate-fade-in"
          style={{
            background: '#0B0F19',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          <NavLink to="/" style={navLinkStyle} end>
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
                  padding: '2px 8px',
                  borderRadius: '10px',
                  marginLeft: 'auto'
                }}
              >
                {totalRegistrations}
              </span>
            )}
          </NavLink>

          <NavLink
            to="/workshops"
            className="btn-primary"
            style={{ width: '100%', marginTop: '8px', justifyContent: 'center' }}
          >
            <Sparkles size={16} />
            Find Workshops
          </NavLink>
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
