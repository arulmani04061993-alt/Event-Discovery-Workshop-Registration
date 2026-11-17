import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegistrations } from '../hooks/useRegistrations';
import EmptyState from '../components/EmptyState';
import { 
  Ticket, 
  Calendar, 
  MapPin, 
  Clock, 
  User, 
  Mail, 
  Trash2, 
  Compass, 
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export const MyRegistrations = () => {
  const { registrations, cancelRegistration } = useRegistrations();

  // State for cancellation confirmation modal
  const [targetCancelReg, setTargetCancelReg] = useState(null);

  const confirmCancel = () => {
    if (targetCancelReg) {
      cancelRegistration(targetCancelReg.id);
      setTargetCancelReg(null);
    }
  };

  return (
    <div className="animate-fade-in" style={{ paddingTop: '2.5rem', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Page Title */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Ticket size={20} color="#818CF8" />
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: '700',
                color: '#818CF8',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              MY STACKLY PASSES
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: '800',
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom: '0.5rem'
            }}
          >
            My Event Registrations
          </h1>

          <p style={{ fontSize: '1rem', color: '#94A3B8', maxWidth: '640px' }}>
            Manage your verified workshop passes, credentials, and reserved sessions. All passes are securely synchronized to your browser session.
          </p>
        </div>

        {/* If no registrations */}
        {registrations.length === 0 ? (
          <EmptyState
            icon={Ticket}
            title="No registrations yet!"
            description="Discover exciting events and reserve your spot. When you register for any conference or workshop, your admission passes will be displayed here."
            actionText="Explore Events"
            actionLink="/events"
          />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Registrations count banner */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 4px',
                color: '#94A3B8',
                fontSize: '0.925rem'
              }}
            >
              <div>
                You have <strong style={{ color: '#FFFFFF' }}>{registrations.length}</strong> active confirmed {registrations.length === 1 ? 'pass' : 'passes'}.
              </div>
              <Link to="/events" className="btn-secondary" style={{ padding: '0.45rem 1rem', fontSize: '0.82rem' }}>
                <Compass size={14} />
                Find More Events
              </Link>
            </div>

            {/* Grid of Registration Cards */}
            <div
              className="responsive-grid-cards"
            >
              {registrations.map((reg) => (
                <div
                  key={reg.id}
                  className="glass-panel"
                  style={{
                    borderRadius: '18px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative'
                  }}
                >
                  {/* Top Image & Status Banner */}
                  <div style={{ position: 'relative', width: '100%', height: '160px' }}>
                    <img
                      src={reg.eventImage}
                      alt={reg.eventTitle}
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
                        background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.85) 100%)'
                      }}
                    />

                    {/* Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'rgba(16, 185, 129, 0.25)',
                        border: '1px solid #10B981',
                        color: '#6EE7B7',
                        padding: '3px 10px',
                        borderRadius: '20px',
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <CheckCircle size={12} />
                      {reg.status || 'CONFIRMED'}
                    </div>

                    {/* Pass ID Tag */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'rgba(15, 23, 42, 0.85)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        padding: '3px 9px',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontFamily: 'monospace',
                        color: '#06B6D4',
                        fontWeight: '600'
                      }}
                    >
                      {reg.id}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      {/* Event Title */}
                      <h3
                        style={{
                          fontSize: '1.15rem',
                          fontWeight: '700',
                          color: '#FFFFFF',
                          lineHeight: 1.35,
                          marginBottom: '0.75rem'
                        }}
                      >
                        <Link
                          to={`/events/${reg.eventId}`}
                          style={{ color: '#FFFFFF', textDecoration: 'none' }}
                        >
                          {reg.eventTitle}
                        </Link>
                      </h3>

                      {/* Event Date & Location */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          fontSize: '0.85rem',
                          color: '#94A3B8',
                          marginBottom: '1.25rem',
                          paddingBottom: '1rem',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Calendar size={14} color="#818CF8" />
                          <span>{reg.formattedDate || reg.eventDate} ({reg.eventTime})</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <MapPin size={14} color="#06B6D4" />
                          <span>{reg.eventVenue || reg.eventLocation}</span>
                        </div>
                      </div>

                      {/* Attendee Details */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '4px',
                          fontSize: '0.82rem',
                          color: '#CBD5E1',
                          marginBottom: '1.5rem',
                          background: 'rgba(255, 255, 255, 0.02)',
                          padding: '10px 12px',
                          borderRadius: '10px',
                          border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <User size={13} color="#94A3B8" />
                          <span>Passholder: <strong style={{ color: '#FFFFFF' }}>{reg.userName}</strong></span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Mail size={13} color="#94A3B8" />
                          <span>Email: {reg.email}</span>
                        </div>
                        <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '2px' }}>
                          Registered on: {new Date(reg.registrationDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    {/* Actions: View Details & Cancel */}
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <Link
                        to={`/events/${reg.eventId}`}
                        className="btn-secondary"
                        style={{ flex: 1, padding: '0.6rem 0.8rem', fontSize: '0.85rem', justifyContent: 'center' }}
                      >
                        <ExternalLink size={14} />
                        View Agenda
                      </Link>

                      <button
                        onClick={() => setTargetCancelReg(reg)}
                        className="btn-danger"
                        style={{ padding: '0.6rem 1rem' }}
                      >
                        <Trash2 size={15} />
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cancellation Confirmation Modal */}
        {targetCancelReg && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 3000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              background: 'rgba(5, 8, 16, 0.88)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
            onClick={() => setTargetCancelReg(null)}
          >
            <div
              className="glass-panel animate-scale-in"
              style={{
                width: '100%',
                maxWidth: '460px',
                background: '#0F172A',
                borderRadius: '18px',
                border: '1px solid rgba(244, 63, 94, 0.3)',
                padding: '2rem',
                textAlign: 'center'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(244, 63, 94, 0.15)',
                  border: '1px solid rgba(244, 63, 94, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F43F5E',
                  margin: '0 auto 1.25rem auto'
                }}
              >
                <AlertTriangle size={28} />
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '8px' }}>
                Cancel Registration?
              </h3>

              <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Are you sure you want to cancel your pass for{' '}
                <strong style={{ color: '#F8FAFC' }}>"{targetCancelReg.eventTitle}"</strong>?
                Your reserved seat will be immediately returned to the public pool.
              </p>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => setTargetCancelReg(null)}
                  className="btn-secondary"
                  style={{ flex: 1, padding: '0.75rem', justifyContent: 'center' }}
                >
                  Keep Pass
                </button>

                <button
                  onClick={confirmCancel}
                  className="btn-danger"
                  style={{ flex: 1, padding: '0.75rem', justifyContent: 'center', background: '#F43F5E', color: '#FFFFFF' }}
                >
                  Yes, Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRegistrations;
