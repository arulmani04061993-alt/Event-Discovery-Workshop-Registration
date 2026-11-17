import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEvents } from '../hooks/useEvents';
import { useRegistrations } from '../hooks/useRegistrations';
import EmptyState from '../components/EmptyState';
import EventCard from '../components/EventCard';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Heart, 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  Share2, 
  CheckCircle,
  Building,
  CheckCircle2
} from 'lucide-react';

export const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, isFavorite, toggleFavorite } = useEvents();
  const { openRegistrationModal, isAlreadyRegistered } = useRegistrations();

  const event = events.find((e) => e.id === id);

  // If event not found, render 404 state gracefully
  if (!event) {
    return (
      <div className="container" style={{ padding: '6rem 1.5rem' }}>
        <EmptyState
          title="Event Not Found"
          description="The workshop or event you requested does not exist or may have been archived."
          actionText="Browse Available Events"
          actionLink="/events"
        />
      </div>
    );
  }

  const favorited = isFavorite(event.id);
  const seatsLeft = event.availableSeats;
  const isSoldOut = seatsLeft <= 0;
  const seatPercentage = Math.round(((event.totalSeats - seatsLeft) / event.totalSeats) * 100);

  // Related events: same category or other events
  const relatedEvents = events
    .filter((e) => e.id !== event.id && (e.category === event.category || e.featured))
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.name,
        text: event.description,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Event URL copied to your clipboard!');
    }
  };

  return (
    <div className="animate-fade-in" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Top Navigation Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem'
          }}
        >
          <button
            onClick={() => navigate(-1)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#94A3B8',
              fontSize: '0.925rem',
              fontWeight: '500',
              padding: '6px 12px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'all 0.2s ease'
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to Events</span>
          </button>

          <div style={{ display: 'flex', gap: '10px' }}>
            <Link
              to="/404"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#CBD5E1',
                fontSize: '0.88rem',
                padding: '6px 14px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <Share2 size={16} />
              <span>Share</span>
            </Link>

            <button
              onClick={() => navigate('/404')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#CBD5E1',
                fontSize: '0.88rem',
                padding: '6px 14px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <Heart size={16} fill="none" color="#CBD5E1" />
              <span>Save</span>
            </button>
          </div>
        </div>

        {/* Large Event Banner */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(280px, 40vw, 480px)',
            borderRadius: '24px',
            overflow: 'hidden',
            marginBottom: '2.5rem',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)'
          }}
        >
          <img
            src={event.image}
            alt={event.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            onError={(e) => {
              e.currentTarget.src = '/assets/images/hero/hero-tech-summit.webp';
            }}
          />

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(9, 13, 22, 0.2) 0%, rgba(9, 13, 22, 0.9) 100%)'
            }}
          />

          {/* Banner Overlaid Badges */}
          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span className={`badge badge-${event.category.toLowerCase()}`}>
                {event.category} TRACK
              </span>

              {event.featured && (
                <span
                  style={{
                    background: 'rgba(6, 182, 212, 0.25)',
                    border: '1px solid #06B6D4',
                    color: '#38BDF8',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Sparkles size={12} />
                  FEATURED WORKSHOP
                </span>
              )}
            </div>

            <div
              style={{
                background: 'rgba(9, 13, 22, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: '6px 14px',
                borderRadius: '20px',
                color: '#10B981',
                fontSize: '0.82rem',
                fontWeight: '700'
              }}
            >
              {event.price || 'Free Admission'}
            </div>
          </div>
        </div>

        {/* Content Layout: 2 Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start'
          }}
        >
          {/* Main Info Column (Left) */}
          <div style={{ flex: 1.8 }}>
            <h1
              style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
                fontWeight: '800',
                color: '#FFFFFF',
                lineHeight: 1.25,
                marginBottom: '1.25rem'
              }}
            >
              {event.name}
            </h1>

            {/* Quick Metadata Bar */}
            <div
              className="glass-panel"
              style={{
                padding: '1.25rem',
                borderRadius: '16px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1rem',
                marginBottom: '2rem'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#818CF8', fontSize: '0.78rem', fontWeight: '700' }}>
                  <Calendar size={14} />
                  <span>DATE</span>
                </div>
                <div style={{ fontSize: '0.92rem', color: '#FFFFFF', fontWeight: '600', marginTop: '4px' }}>
                  {event.formattedDate || event.date}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#38BDF8', fontSize: '0.78rem', fontWeight: '700' }}>
                  <Clock size={14} />
                  <span>SCHEDULE</span>
                </div>
                <div style={{ fontSize: '0.92rem', color: '#FFFFFF', fontWeight: '600', marginTop: '4px' }}>
                  {event.startTime} - {event.endTime}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#F472B6', fontSize: '0.78rem', fontWeight: '700' }}>
                  <MapPin size={14} />
                  <span>LOCATION</span>
                </div>
                <div style={{ fontSize: '0.92rem', color: '#FFFFFF', fontWeight: '600', marginTop: '4px' }}>
                  {event.location}
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                About This Experience
              </h3>
              <p style={{ fontSize: '1rem', color: '#CBD5E1', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                {event.description}
              </p>
            </div>

            {/* Event Highlights */}
            {event.highlights && event.highlights.length > 0 && (
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '1rem' }}>
                  Session Highlights & Curriculum
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {event.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      <CheckCircle2 size={18} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.92rem', color: '#E2E8F0', lineHeight: 1.5 }}>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Venue & Location Overview */}
            <div
              className="glass-panel"
              style={{ padding: '1.5rem', borderRadius: '16px', marginBottom: '2.5rem' }}
            >
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building size={18} color="#06B6D4" />
                <span>Venue & On-Site Experience</span>
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#94A3B8', marginBottom: '1rem' }}>
                {event.venue}
              </p>
              <div style={{ fontSize: '0.85rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="#10B981" />
                <span>Security pass checkpoints and badge collection available on arrival.</span>
              </div>
            </div>

            {/* Organizer Info */}
            {event.organizer && (
              <div
                className="glass-panel"
                style={{
                  padding: '1.5rem',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <img
                  src={event.organizer.avatar}
                  alt={event.organizer.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    objectFit: 'cover',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                  onError={(e) => {
                    e.currentTarget.src = '/assets/images/organizers/org-stackly-labs.webp';
                  }}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF' }}>
                      {event.organizer.name}
                    </h4>
                    {event.organizer.verified && (
                      <span
                        style={{
                          background: 'rgba(16, 185, 129, 0.15)',
                          color: '#10B981',
                          padding: '2px 8px',
                          borderRadius: '10px',
                          fontSize: '0.72rem',
                          fontWeight: '700'
                        }}
                      >
                        VERIFIED
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '2px' }}>
                    {event.organizer.title}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sticky Registration Card (Right) */}
          <div
            style={{
              position: 'sticky',
              top: '100px',
              width: '100%',
              maxWidth: '420px',
              margin: '0 auto'
            }}
          >
            <div
              className="glass-panel"
              style={{
                padding: '1.75rem',
                borderRadius: '20px',
                border: '1px solid rgba(99, 102, 241, 0.25)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.25rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: '700' }}>ADMISSION</span>
                  <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#10B981' }}>
                    Complimentary
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: '700' }}>SEATS</span>
                  <div style={{ fontSize: '1rem', fontWeight: '700', color: seatsLeft < 20 ? '#FB7185' : '#38BDF8' }}>
                    {seatsLeft} remaining
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '100%',
                    height: '8px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      width: `${seatPercentage}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #4F46E5, #06B6D4)',
                      borderRadius: '4px'
                    }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748B', marginTop: '6px' }}>
                  <span>{event.totalSeats - seatsLeft} Attending</span>
                  <span>{event.totalSeats} Total Capacity</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => openRegistrationModal(event)}
                disabled={isSoldOut}
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  fontSize: '1rem',
                  marginBottom: '1rem',
                  opacity: isSoldOut ? 0.5 : 1,
                  cursor: isSoldOut ? 'not-allowed' : 'pointer'
                }}
              >
                {isSoldOut ? 'Event Full (Waitlist)' : 'Register Now'}
              </button>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: '#94A3B8' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={14} color="#10B981" />
                  <span>Instant badge & pass generation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={14} color="#10B981" />
                  <span>Full hands-on curriculum access</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={14} color="#10B981" />
                  <span>Catering & breakout lounge pass</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Events Section */}
        {relatedEvents.length > 0 && (
          <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ marginBottom: '2rem' }}>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: '#818CF8',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                RECOMMENDED SESSIONS
              </span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#FFFFFF', marginTop: '4px' }}>
                Related Events You May Like
              </h3>
            </div>

            <div
              className="responsive-grid-cards"
            >
              {relatedEvents.map((relEvent) => (
                <EventCard key={relEvent.id} event={relEvent} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
