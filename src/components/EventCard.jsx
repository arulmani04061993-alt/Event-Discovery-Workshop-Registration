import React from 'react';
import { Link } from 'react-router-dom';
import { useEvents } from '../hooks/useEvents';
import { useRegistrations } from '../hooks/useRegistrations';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ArrowRight, 
  Heart, 
  Sparkles,
  CheckCircle
} from 'lucide-react';

export const EventCard = ({ event }) => {
  const { isFavorite, toggleFavorite } = useEvents();
  const { openRegistrationModal, isAlreadyRegistered } = useRegistrations();

  const favorited = isFavorite(event.id);
  const seatsLeft = event.availableSeats;
  const isSoldOut = seatsLeft <= 0;
  const seatPercentage = Math.round(((event.totalSeats - seatsLeft) / event.totalSeats) * 100);

  const getBadgeClass = (category) => {
    switch (category) {
      case 'Technology': return 'badge-technology';
      case 'Business': return 'badge-business';
      case 'Design': return 'badge-design';
      case 'Education': return 'badge-education';
      default: return 'badge-technology';
    }
  };

  return (
    <article
      className="glass-panel"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)';
        e.currentTarget.style.boxShadow = '0 20px 30px -10px rgba(0, 0, 0, 0.6), 0 0 20px rgba(79, 70, 229, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      }}
    >
      {/* Event Image & Badges */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
        <img
          src={event.image}
          alt={event.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          onError={(e) => {
            // Graceful fallback if any path has an issue
            e.currentTarget.src = '/assets/images/hero/hero-tech-summit.webp';
          }}
        />

        {/* Gradient Overlay for contrast */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(9, 13, 22, 0.2) 0%, rgba(9, 13, 22, 0.8) 100%)'
          }}
        />

        {/* Top Badges */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            right: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px'
          }}
        >
          <span className={`badge ${getBadgeClass(event.category)}`}>
            {event.category}
          </span>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(event.id);
            }}
            aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(9, 13, 22, 0.7)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: favorited ? '#F43F5E' : '#FFFFFF',
              transition: 'all 0.2s ease'
            }}
          >
            <Heart size={18} fill={favorited ? '#F43F5E' : 'none'} />
          </button>
        </div>

        {/* Featured Tag */}
        {event.featured && (
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              background: 'rgba(6, 182, 212, 0.2)',
              border: '1px solid rgba(6, 182, 212, 0.4)',
              color: '#38BDF8',
              borderRadius: '6px',
              padding: '2px 8px',
              fontSize: '0.72rem',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              letterSpacing: '0.04em'
            }}
          >
            <Sparkles size={12} />
            FEATURED SUMMIT
          </div>
        )}
      </div>

      {/* Card Content */}
      <div
        style={{
          padding: '1.25rem 1.5rem 1.5rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'space-between'
        }}
      >
        <div>
          {/* Metadata Row: Date & Location */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '12px',
              fontSize: '0.82rem',
              color: '#94A3B8',
              marginBottom: '0.75rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Calendar size={14} color="#818CF8" />
              <span>{event.formattedDate || event.date}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <MapPin size={14} color="#06B6D4" />
              <span>{event.location}</span>
            </div>
          </div>

          {/* Title */}
          <h3
            style={{
              fontSize: '1.15rem',
              fontWeight: '700',
              color: '#FFFFFF',
              lineHeight: 1.4,
              marginBottom: '0.6rem'
            }}
          >
            <Link
              to={`/events/${event.id}`}
              style={{
                color: 'inherit',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#818CF8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#FFFFFF')}
            >
              {event.name}
            </Link>
          </h3>

          {/* Short Excerpt */}
          <p
            style={{
              fontSize: '0.88rem',
              color: '#94A3B8',
              lineHeight: 1.5,
              marginBottom: '1rem',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {event.description}
          </p>
        </div>

        <div>
          {/* Remaining Seat Counter Bar */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.78rem',
                color: '#94A3B8',
                marginBottom: '5px'
              }}
            >
              <span>Seats Remaining</span>
              <span style={{ fontWeight: '600', color: seatsLeft < 20 ? '#FB7185' : '#38BDF8' }}>
                {isSoldOut ? 'Sold Out' : `${seatsLeft} of ${event.totalSeats} seats left`}
              </span>
            </div>

            <div
              style={{
                width: '100%',
                height: '6px',
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '3px',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  width: `${seatPercentage}%`,
                  height: '100%',
                  background: seatsLeft < 20 
                    ? 'linear-gradient(90deg, #F43F5E, #FB7185)' 
                    : 'linear-gradient(90deg, #4F46E5, #06B6D4)',
                  borderRadius: '3px',
                  transition: 'width 0.6s ease'
                }}
              />
            </div>
          </div>

          {/* Action Row */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Link
              to={`/events/${event.id}`}
              className="btn-secondary"
              style={{
                flex: 1,
                padding: '0.6rem 0.8rem',
                fontSize: '0.85rem',
                justifyContent: 'center'
              }}
            >
              View Details
            </Link>

            <button
              onClick={() => openRegistrationModal(event)}
              disabled={isSoldOut}
              className="btn-primary"
              style={{
                flex: 1,
                padding: '0.6rem 0.8rem',
                fontSize: '0.85rem',
                justifyContent: 'center',
                opacity: isSoldOut ? 0.5 : 1,
                cursor: isSoldOut ? 'not-allowed' : 'pointer'
              }}
            >
              {isSoldOut ? 'Full' : 'Register Now'}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
