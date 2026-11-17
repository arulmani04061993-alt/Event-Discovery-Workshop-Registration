import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Compass,
  Users,
  CheckCircle2,
  Ticket
} from 'lucide-react';
import { useRegistrations } from '../hooks/useRegistrations';

export const HeroSection = ({ featuredEvent }) => {
  const { openRegistrationModal } = useRegistrations();

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '1.5rem',
        paddingBottom: '5rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Hero Photography with Subtle Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '620px',
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      >
        <img
          src="/assets/images/backgrounds/hero-mesh-bg.webp?v=3"
          alt="Conference ambiance"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.22,
            filter: 'blur(2px) brightness(0.7)',
            transform: 'scale(1.05)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(9, 13, 22, 0.4) 0%, rgba(9, 13, 22, 0.85) 60%, #090D16 100%)'
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Tag */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
          <div
            className="animate-fade-in"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '30px',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)',
              color: '#E2E8F0',
              fontSize: '0.85rem',
              fontWeight: '600'
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#06B6D4',
                boxShadow: '0 0 10px #06B6D4'
              }}
            />
            <span>THE 2026 ENTERPRISE WORKSHOP SERIES</span>
            <span style={{ color: '#64748B' }}>•</span>
            <span style={{ color: '#818CF8' }}>LIVE NOW</span>
          </div>
        </div>

        {/* Main Heading & Tagline */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 2.5rem auto' }}>
          <h1
            className="gradient-text-electric"
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
              fontWeight: '900',
              letterSpacing: '-0.035em',
              lineHeight: 1.1,
              marginBottom: '1.25rem'
            }}
          >
            Discover Experiences That Inspire.
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#CBD5E1',
              lineHeight: 1.6,
              maxWidth: '720px',
              margin: '0 auto 2rem auto',
              textShadow: '0 2px 8px rgba(0,0,0,0.6)'
            }}
          >
            Connect with industry-defining tech conferences, hands-on engineering masterclasses, and executive conclaves curated for builders shaping the future.
          </p>

          {/* Call to Actions */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px'
            }}
          >
            <Link
              to="/events"
              className="btn-primary"
              style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}
            >
              <Compass size={18} />
              Explore All Events
            </Link>

            <a
              href="#featured-section"
              className="btn-secondary"
              style={{ padding: '0.85rem 1.8rem', fontSize: '1rem', background: 'rgba(15, 23, 42, 0.7)' }}
            >
              View Featured Events
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Large Keynote Showcase Card with Prominent Photography */}
        {featuredEvent && (
          <div
            className="glass-panel animate-scale-in"
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              background: '#0B111E',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(79, 70, 229, 0.15)'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                alignItems: 'stretch'
              }}
            >
              {/* Left Details */}
              <div
                style={{
                  padding: 'clamp(1.75rem, 4vw, 3rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                  <span className="badge badge-technology">
                    {featuredEvent.category}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: '#06B6D4',
                      background: 'rgba(6, 182, 212, 0.15)',
                      padding: '3px 10px',
                      borderRadius: '20px',
                      border: '1px solid rgba(6, 182, 212, 0.35)'
                    }}
                  >
                    ⭐ KEYNOTE CONCLAVE
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.3rem)',
                    fontWeight: '800',
                    color: '#FFFFFF',
                    lineHeight: 1.25,
                    marginBottom: '1rem'
                  }}
                >
                  {featuredEvent.name}
                </h2>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#94A3B8',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}
                >
                  {featuredEvent.description}
                </p>

                {/* Event Metadata Highlights */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '12px',
                    padding: '1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    marginBottom: '1.75rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={18} color="#818CF8" />
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '600' }}>DATE & TIME</div>
                      <div style={{ fontSize: '0.85rem', color: '#E2E8F0', fontWeight: '600' }}>
                        {featuredEvent.formattedDate}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={18} color="#06B6D4" />
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '600' }}>VENUE</div>
                      <div style={{ fontSize: '0.85rem', color: '#E2E8F0', fontWeight: '600' }}>
                        {featuredEvent.location}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Users size={18} color="#10B981" />
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '600' }}>SEATS LEFT</div>
                      <div style={{ fontSize: '0.85rem', color: '#10B981', fontWeight: '700' }}>
                        {featuredEvent.availableSeats} of {featuredEvent.totalSeats} seats
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <button
                    onClick={() => openRegistrationModal(featuredEvent)}
                    className="btn-primary"
                    style={{ padding: '0.75rem 1.6rem' }}
                  >
                    <Sparkles size={18} />
                    Reserve Spotlight Seat
                  </button>

                  <Link
                    to={`/events/${featuredEvent.id}`}
                    className="btn-secondary"
                    style={{ padding: '0.75rem 1.4rem' }}
                  >
                    Full Agenda & Speakers
                  </Link>
                </div>
              </div>

              {/* Right Media Graphic: Clear, High-Resolution Real Keynote Photography */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  minHeight: '380px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src="/assets/images/hero/hero-tech-summit.webp?v=3"
                  alt="Tech summit keynote stage"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.currentTarget.src = featuredEvent.image;
                  }}
                />

                {/* Subtle side gradient for smooth text boundary */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, #0B111E 0%, rgba(11, 17, 30, 0.4) 30%, transparent 100%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Floating pill over image */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    background: 'rgba(9, 13, 22, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '8px 16px',
                    borderRadius: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#FFFFFF',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.5)'
                  }}
                >
                  <Ticket size={16} color="#06B6D4" />
                  <span>Verified STACKLY Keynote</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
