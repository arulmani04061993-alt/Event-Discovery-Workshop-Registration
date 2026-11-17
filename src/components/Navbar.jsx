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
        {/* Brand Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(79, 70, 229, 0.4)'
            }}
          >
            <Layers size={22} strokeWidth={2.4} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '1.4rem',
                fontWeight: '800',
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
                lineHeight: 1
              }}
            >
              STACKLY
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: '600',
                letterSpacing: '0.12em',
                color: '#06B6D4',
                textTransform: 'uppercase'
              }}
            >
              Conferences & Labs
            </span>
          </div>
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
          <Link
            to="/events"
            className="btn-primary"
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}
          >
            <Sparkles size={16} />
            Find Workshops
          </Link>
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

          <Link
            to="/events"
            className="btn-primary"
            style={{ width: '100%', marginTop: '8px', justifyContent: 'center' }}
          >
            <Sparkles size={16} />
            Find Workshops
          </Link>
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
