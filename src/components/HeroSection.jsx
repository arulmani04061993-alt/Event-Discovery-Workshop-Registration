import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Compass,
  Users
} from 'lucide-react';
import { useRegistrations } from '../hooks/useRegistrations';

export const HeroSection = ({ featuredEvent }) => {
  const { openRegistrationModal } = useRegistrations();

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '2.5rem',
        paddingBottom: '5rem',
        overflow: 'hidden'
      }}
    >
      {/* Dynamic Background Mesh Effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          maxWidth: '1440px',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 50% 20%, rgba(79, 70, 229, 0.22) 0%, rgba(6, 182, 212, 0.08) 35%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Tag */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div
            className="animate-fade-in"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '30px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(10px)',
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
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 3rem auto' }}>
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
              color: '#94A3B8',
              lineHeight: 1.6,
              maxWidth: '720px',
              margin: '0 auto 2rem auto'
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
              style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}
            >
              View Featured Events
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Big Spotlight Hero Card */}
        {featuredEvent && (
          <div
            className="glass-panel animate-scale-in"
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(79, 70, 229, 0.15)'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                alignItems: 'center'
              }}
            >
              {/* Left Details */}
              <div style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                  <span className="badge badge-technology">
                    {featuredEvent.category}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: '#06B6D4',
                      background: 'rgba(6, 182, 212, 0.1)',
                      padding: '3px 10px',
                      borderRadius: '20px',
                      border: '1px solid rgba(6, 182, 212, 0.3)'
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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
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

              {/* Right Media Graphic */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  minHeight: '340px'
                }}
              >
                <img
                  src={featuredEvent.image}
                  alt={featuredEvent.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.currentTarget.src = '/assets/images/hero/hero-tech-summit.webp';
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, rgba(11, 16, 29, 0.95) 0%, rgba(11, 16, 29, 0.2) 60%, transparent 100%)'
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
