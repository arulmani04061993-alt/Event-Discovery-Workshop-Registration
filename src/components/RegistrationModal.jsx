import React, { useState } from 'react';
import { useRegistrations } from '../hooks/useRegistrations';
import RegistrationForm from './RegistrationForm';
import { X, Calendar, MapPin, CheckCircle, Ticket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RegistrationModal = () => {
  const { activeModalEvent, closeRegistrationModal } = useRegistrations();
  const [confirmedPass, setConfirmedPass] = useState(null);

  if (!activeModalEvent) return null;

  const handleSuccess = (registration) => {
    setConfirmedPass(registration);
  };

  const handleClose = () => {
    setConfirmedPass(null);
    closeRegistrationModal();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        background: 'rgba(5, 8, 16, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
      onClick={handleClose}
    >
      <div
        className="glass-panel animate-scale-in"
        style={{
          width: '100%',
          maxWidth: '540px',
          background: '#0B101D',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
          overflow: 'hidden',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: '700',
                color: '#818CF8',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              WORKSHOP PASS REGISTRATION
            </span>
            <h3
              style={{
                fontSize: '1.2rem',
                fontWeight: '800',
                color: '#FFFFFF',
                marginTop: '2px'
              }}
            >
              {confirmedPass ? 'Admission Confirmed!' : 'Reserve Your Admission'}
            </h3>
          </div>

          <button
            onClick={handleClose}
            style={{
              color: '#94A3B8',
              padding: '6px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Close registration modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '1.5rem' }}>
          {confirmedPass ? (
            /* Successful Registration Ticket Preview */
            <div className="animate-fade-in" style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10B981',
                  margin: '0 auto 1.25rem auto'
                }}
              >
                <CheckCircle size={36} />
              </div>

              <h4 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '4px' }}>
                You are registered!
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#94A3B8', marginBottom: '1.5rem' }}>
                Your digital workshop pass is generated and stored in your profile.
              </p>

              {/* Ticket Card */}
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px dashed rgba(99, 102, 241, 0.4)',
                  borderRadius: '14px',
                  padding: '1.25rem',
                  textAlign: 'left',
                  marginBottom: '1.5rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: '700' }}>
                    REGISTRATION PASS ID
                  </span>
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontFamily: 'monospace',
                      fontWeight: '700',
                      color: '#06B6D4'
                    }}
                  >
                    {confirmedPass.id}
                  </span>
                </div>

                <h5 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '6px' }}>
                  {confirmedPass.eventTitle}
                </h5>

                <div style={{ fontSize: '0.82rem', color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div>📅 {confirmedPass.formattedDate} ({confirmedPass.eventTime})</div>
                  <div>📍 {confirmedPass.eventVenue}</div>
                  <div>👤 Registered To: <strong style={{ color: '#E2E8F0' }}>{confirmedPass.userName}</strong> ({confirmedPass.email})</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <Link
                  to="/registrations"
                  onClick={handleClose}
                  className="btn-primary"
                  style={{ flex: 1, padding: '0.75rem', justifyContent: 'center' }}
                >
                  <Ticket size={16} />
                  View My Registrations
                </Link>

                <button
                  onClick={handleClose}
                  className="btn-secondary"
                  style={{ flex: 1, padding: '0.75rem', justifyContent: 'center' }}
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Event Mini Overview */}
              <div
                style={{
                  display: 'flex',
                  gap: '14px',
                  padding: '12px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '1.5rem'
                }}
              >
                <img
                  src={activeModalEvent.image}
                  alt={activeModalEvent.name}
                  style={{
                    width: '80px',
                    height: '60px',
                    borderRadius: '8px',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    e.currentTarget.src = '/assets/images/hero/hero-tech-summit.webp';
                  }}
                />

                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: '700',
                      color: '#FFFFFF',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {activeModalEvent.name}
                  </h4>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.78rem',
                      color: '#94A3B8',
                      marginTop: '4px'
                    }}
                  >
                    <span>{activeModalEvent.formattedDate || activeModalEvent.date}</span>
                    <span>•</span>
                    <span>{activeModalEvent.location}</span>
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: '#06B6D4',
                      fontWeight: '600',
                      marginTop: '2px'
                    }}
                  >
                    {activeModalEvent.availableSeats} seats remaining
                  </div>
                </div>
              </div>

              {/* Form */}
              <RegistrationForm
                event={activeModalEvent}
                onSuccess={handleSuccess}
                onCancel={handleClose}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
