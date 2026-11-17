import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Compass,
  Users,
  Ticket,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useRegistrations } from '../hooks/useRegistrations';

export const HeroSection = ({ events = [] }) => {
  const { openRegistrationModal } = useRegistrations();

  // Slide items for the top hero showcase (take top 4 featured keynote events)
  const heroSlides = events.length > 0 ? events.slice(0, 4) : [];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play timer: moves automatically every 4.5 seconds
  useEffect(() => {
    if (heroSlides.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [heroSlides.length, isPaused]);

  const activeEvent = heroSlides[currentSlide] || null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '1.5rem',
        paddingBottom: '5rem',
        overflow: 'hidden'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Hero Photography with Smooth Auto-Crossfade */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '650px',
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      >
        {heroSlides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.name}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: index === currentSlide ? 0.25 : 0,
              filter: 'blur(3px) brightness(0.65)',
              transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          />
        ))}

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(9, 13, 22, 0.3) 0%, rgba(9, 13, 22, 0.85) 60%, #090D16 100%)'
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
              background: 'rgba(15, 23, 42, 0.85)',
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

        {/* Large Keynote Showcase Card with Automatic Slideshow */}
        {activeEvent && (
          <div
            className="glass-panel"
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              background: '#0B111E',
              border: '1px solid rgba(99, 102, 241, 0.28)',
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
                  justifyContent: 'center',
                  transition: 'opacity 0.4s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                  <span className={`badge badge-${activeEvent.category.toLowerCase()}`}>
                    {activeEvent.category}
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
                    ⭐ KEYNOTE CONCLAVE {currentSlide + 1} OF {heroSlides.length}
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
                  {activeEvent.name}
                </h2>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#94A3B8',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}
                >
                  {activeEvent.description}
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
                        {activeEvent.formattedDate}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={18} color="#06B6D4" />
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '600' }}>VENUE</div>
                      <div style={{ fontSize: '0.85rem', color: '#E2E8F0', fontWeight: '600' }}>
                        {activeEvent.location}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Users size={18} color="#10B981" />
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '600' }}>SEATS LEFT</div>
                      <div style={{ fontSize: '0.85rem', color: '#10B981', fontWeight: '700' }}>
                        {activeEvent.availableSeats} of {activeEvent.totalSeats} seats
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  <button
                    onClick={() => openRegistrationModal(activeEvent)}
                    className="btn-primary"
                    style={{ padding: '0.75rem 1.6rem' }}
                  >
                    <Sparkles size={18} />
                    Reserve Spotlight Seat
                  </button>

                  <Link
                    to={`/events/${activeEvent.id}`}
                    className="btn-secondary"
                    style={{ padding: '0.75rem 1.4rem' }}
                  >
                    Full Agenda & Speakers
                  </Link>
                </div>
              </div>

              {/* Right Media Graphic: Auto-moving Slide Image Carousel */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  minHeight: '380px',
                  overflow: 'hidden'
                }}
              >
                {heroSlides.map((slide, idx) => (
                  <img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.name}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: idx === currentSlide ? 1 : 0,
                      transform: idx === currentSlide ? 'scale(1)' : 'scale(1.08)',
                      transition: 'opacity 0.8s ease-in-out, transform 1.2s ease-out'
                    }}
                  />
                ))}

                {/* Gradient Boundary Layer */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, #0B111E 0%, rgba(11, 17, 30, 0.3) 25%, transparent 100%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Previous & Next Manual Controls */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '14px',
                    right: '14px',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    pointerEvents: 'none',
                    zIndex: 4
                  }}
                >
                  <button
                    onClick={prevSlide}
                    aria-label="Previous event slide"
                    style={{
                      pointerEvents: 'auto',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(9, 13, 22, 0.75)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                      transition: 'all 0.2s'
                    }}
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    onClick={nextSlide}
                    aria-label="Next event slide"
                    style={{
                      pointerEvents: 'auto',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(9, 13, 22, 0.75)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                      transition: 'all 0.2s'
                    }}
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Carousel Pagination Indicator Dots */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    zIndex: 4
                  }}
                >
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      style={{
                        width: i === currentSlide ? '28px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        background: i === currentSlide ? '#06B6D4' : 'rgba(255, 255, 255, 0.4)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.4)'
                      }}
                    />
                  ))}
                </div>

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
                    boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
                    zIndex: 4
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
