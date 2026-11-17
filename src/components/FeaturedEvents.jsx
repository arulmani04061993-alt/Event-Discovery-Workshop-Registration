import React from 'react';
import EventCard from './EventCard';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturedEvents = ({ events }) => {
  // Grab up to 4 featured events
  const featured = events.filter((e) => e.featured).slice(0, 4);

  return (
    <section id="featured-section" style={{ padding: '4rem 0' }}>
      <div className="container">
        {/* Section Header */}
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <Sparkles size={18} color="#06B6D4" />
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: '#06B6D4',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                CURATED SPOTLIGHT
              </span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: '800',
                color: '#FFFFFF',
                letterSpacing: '-0.02em'
              }}
            >
              Featured Masterclasses & Summits
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
            <span>Browse All {events.length} Events</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Cards Grid */}
        <div
          className="responsive-grid-cards"
        >
          {featured.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
