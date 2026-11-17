import React from 'react';
import { useEvents } from '../hooks/useEvents';
import { CATEGORIES_DATA } from '../data/events';
import HeroSection from '../components/HeroSection';
import FeaturedEvents from '../components/FeaturedEvents';
import CategoryFilter from '../components/CategoryFilter';
import EventCard from '../components/EventCard';
import { 
  ShieldCheck, 
  Award, 
  Zap, 
  Users, 
  Compass, 
  ArrowRight, 
  Calendar,
  CheckCircle2,
  TrendingUp,
  Globe2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { events } = useEvents();

  // Find keynote event
  const primaryHeroEvent = events[0] || null;

  // Upcoming upcoming events (first 6 non-featured or mixed)
  const upcomingEvents = events.slice(0, 6);

  return (
    <div className="animate-fade-in">
      {/* 1. Hero Section with Auto-Moving Images & Event Slides */}
      <HeroSection events={events} />

      {/* 2. Platform Statistics Banner */}
      <section style={{ padding: '2rem 0', borderY: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container">
          <div
            className="glass-panel"
            style={{
              padding: '2rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              textAlign: 'center'
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '2.4rem',
                  fontWeight: '800',
                  color: '#FFFFFF',
                  fontFamily: 'monospace'
                }}
              >
                120+
              </div>
              <div style={{ fontSize: '0.88rem', color: '#94A3B8', marginTop: '2px' }}>
                Annual Summits & Labs
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: '2.4rem',
                  fontWeight: '800',
                  color: '#06B6D4',
                  fontFamily: 'monospace'
                }}
              >
                45,000+
              </div>
              <div style={{ fontSize: '0.88rem', color: '#94A3B8', marginTop: '2px' }}>
                Engineers & Leaders
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: '2.4rem',
                  fontWeight: '800',
                  color: '#818CF8',
                  fontFamily: 'monospace'
                }}
              >
                99.4%
              </div>
              <div style={{ fontSize: '0.88rem', color: '#94A3B8', marginTop: '2px' }}>
                Attendee Satisfaction Rate
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: '2.4rem',
                  fontWeight: '800',
                  color: '#10B981',
                  fontFamily: 'monospace'
                }}
              >
                100%
              </div>
              <div style={{ fontSize: '0.88rem', color: '#94A3B8', marginTop: '2px' }}>
                Verified Organizers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Events Section */}
      <FeaturedEvents events={events} />

      {/* 4. Event Categories Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: '700',
                color: '#818CF8',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              CHOOSE YOUR FOCUS
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: '800',
                color: '#FFFFFF',
                marginTop: '6px'
              }}
            >
              Explore Events by Track
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#94A3B8', marginTop: '8px' }}>
              Filter across specialized disciplines led by vetted industry practitioners and technology leaders.
            </p>
          </div>

          <CategoryFilter categories={CATEGORIES_DATA} />
        </div>
      </section>

      {/* 5. Upcoming Events Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: '#10B981',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                UPCOMING IMMERSIONS
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  fontWeight: '800',
                  color: '#FFFFFF',
                  marginTop: '6px'
                }}
              >
                Reserve Your Seat Today
              </h2>
            </div>

            <Link
              to="/events"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#818CF8',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}
            >
              <span>See Full Calendar</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Grid of upcoming events */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose STACKLY */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(2rem, 5vw, 4rem)',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem auto' }}>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: '#06B6D4',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                THE STACKLY STANDARD
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: '800',
                  color: '#FFFFFF',
                  marginTop: '8px'
                }}
              >
                Why Leaders & Builders Rely on Stackly
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '2rem'
              }}
            >
              {/* Feature 1 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(79, 70, 229, 0.15)',
                    border: '1px solid rgba(79, 70, 229, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#818CF8'
                  }}
                >
                  <ShieldCheck size={24} />
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#FFFFFF' }}>
                  Peer-Vetted Curriculums
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6 }}>
                  No sponsor fluff or generic slide decks. Every speaker and workshop curriculum passes rigorous technical committee reviews.
                </p>
              </div>

              {/* Feature 2 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(6, 182, 212, 0.15)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38BDF8'
                  }}
                >
                  <Zap size={24} />
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#FFFFFF' }}>
                  Instant Seat Reservation
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6 }}>
                  Reserve workshop passes in seconds with one-click verification and persistent local admission passes ready on any device.
                </p>
              </div>

              {/* Feature 3 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6EE7B7'
                  }}
                >
                  <Users size={24} />
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#FFFFFF' }}>
                  High-Density Networking
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6 }}>
                  Engage directly with engineering directors, founders, and angel syndicates during dedicated breakout lounges and salons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. How It Works Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: '700',
                color: '#818CF8',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              SEAMLESS REGISTRATION
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: '800',
                color: '#FFFFFF',
                marginTop: '6px'
              }}
            >
              How Stackly Works in 3 Steps
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* Step 1 */}
            <div
              className="glass-panel"
              style={{ padding: '2rem', borderRadius: '16px', position: 'relative' }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: 'rgba(99, 102, 241, 0.35)',
                  marginBottom: '1rem',
                  fontFamily: 'monospace'
                }}
              >
                01
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>
                Discover Events
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6 }}>
                Filter workshops by track, location, and upcoming dates. Preview agendas, venue maps, and organizer profiles.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="glass-panel"
              style={{ padding: '2rem', borderRadius: '16px', position: 'relative' }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: 'rgba(6, 182, 212, 0.35)',
                  marginBottom: '1rem',
                  fontFamily: 'monospace'
                }}
              >
                02
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>
                Instant Admission Pass
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6 }}>
                Submit verified registration credentials. A unique digital pass ID is minted instantly without tedious payment gates.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="glass-panel"
              style={{ padding: '2rem', borderRadius: '16px', position: 'relative' }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  fontWeight: '900',
                  color: 'rgba(16, 185, 129, 0.35)',
                  marginBottom: '1rem',
                  fontFamily: 'monospace'
                }}
              >
                03
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>
                Manage & Attend
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6 }}>
                Track your registrations in your dedicated dashboard. Cancel seamlessly anytime if your schedule changes to release seats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Newsletter-Style Visual CTA */}
      <section style={{ padding: '3rem 0 5rem 0' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.85) 0%, rgba(15, 23, 42, 0.95) 100%)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '24px',
              padding: 'clamp(2rem, 5vw, 4rem)',
              textAlign: 'center',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
          >
            <h2
              className="gradient-text-electric"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: '800',
                marginBottom: '1rem'
              }}
            >
              Ready to Expand Your Technical Mastery?
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#CBD5E1',
                maxWidth: '620px',
                margin: '0 auto 2rem auto',
                lineHeight: 1.6
              }}
            >
              Join thousands of architects, software engineers, and founders attending premier summits this season.
            </p>

            <Link
              to="/events"
              className="btn-primary"
              style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem' }}
            >
              <Compass size={20} />
              Browse All Available Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
