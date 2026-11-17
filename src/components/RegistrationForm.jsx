import React, { useState } from 'react';
import { useRegistrations } from '../hooks/useRegistrations';
import { validateRegistrationForm } from '../utils/validation';
import confetti from 'canvas-confetti';
import { 
  User, 
  Mail, 
  Phone, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const RegistrationForm = ({ event, onSuccess, onCancel }) => {
  const { registerForEvent, isAlreadyRegistered } = useRegistrations();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [duplicateWarning, setDuplicateWarning] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field-specific error as user types
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
    if (duplicateWarning && field === 'email') {
      setDuplicateWarning('');
    }
  };

  const handleBlur = (field) => {
    if (field === 'email' && formData.email) {
      if (isAlreadyRegistered(event.id, formData.email)) {
        setDuplicateWarning(`"${formData.email}" has already registered for this event.`);
      } else {
        setDuplicateWarning('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDuplicateWarning('');

    // Validation check
    const validation = validateRegistrationForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Duplicate check
    if (isAlreadyRegistered(event.id, formData.email)) {
      setDuplicateWarning(
        `This email address (${formData.email}) is already registered for "${event.name}". Duplicate registrations are not permitted.`
      );
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const result = registerForEvent(event, formData);

      if (result.success) {
        // Trigger celebratory confetti effect
        try {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 }
          });
        } catch (e) {
          // graceful fallback if canvas-confetti is not rendered
        }

        if (onSuccess) {
          onSuccess(result.registration);
        }
      } else {
        setDuplicateWarning(result.error);
        setIsSubmitting(false);
      }
    }, 400);
  };

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Duplicate warning notification */}
      {duplicateWarning && (
        <div
          className="animate-fade-in"
          style={{
            padding: '12px 14px',
            borderRadius: '10px',
            background: 'rgba(244, 63, 94, 0.12)',
            border: '1px solid rgba(244, 63, 94, 0.3)',
            color: '#FB7185',
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px'
          }}
        >
          <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>{duplicateWarning}</span>
        </div>
      )}

      {/* Full Name Field */}
      <div>
        <label
          htmlFor="reg-fullname"
          style={{
            display: 'block',
            fontSize: '0.85rem',
            fontWeight: '600',
            color: '#CBD5E1',
            marginBottom: '6px'
          }}
        >
          Full Name <span style={{ color: '#F43F5E' }}>*</span>
        </label>
        <div style={{ position: 'relative' }}>
          <User
            size={18}
            color="#64748B"
            style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            id="reg-fullname"
            type="text"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder="e.g. Priya Sharma"
            style={{
              width: '100%',
              padding: '10px 14px 10px 42px',
              borderRadius: '10px',
              background: 'rgba(15, 23, 42, 0.75)',
              border: `1px solid ${errors.fullName ? '#F43F5E' : 'rgba(255, 255, 255, 0.12)'}`,
              color: '#FFFFFF',
              fontSize: '0.925rem',
              transition: 'all 0.2s'
            }}
          />
        </div>
        {errors.fullName && (
          <p style={{ color: '#F43F5E', fontSize: '0.78rem', marginTop: '4px' }}>
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email Address Field */}
      <div>
        <label
          htmlFor="reg-email"
          style={{
            display: 'block',
            fontSize: '0.85rem',
            fontWeight: '600',
            color: '#CBD5E1',
            marginBottom: '6px'
          }}
        >
          Email Address <span style={{ color: '#F43F5E' }}>*</span>
        </label>
        <div style={{ position: 'relative' }}>
          <Mail
            size={18}
            color="#64748B"
            style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            id="reg-email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            placeholder="name@company.com"
            style={{
              width: '100%',
              padding: '10px 14px 10px 42px',
              borderRadius: '10px',
              background: 'rgba(15, 23, 42, 0.75)',
              border: `1px solid ${errors.email ? '#F43F5E' : 'rgba(255, 255, 255, 0.12)'}`,
              color: '#FFFFFF',
              fontSize: '0.925rem',
              transition: 'all 0.2s'
            }}
          />
        </div>
        {errors.email && (
          <p style={{ color: '#F43F5E', fontSize: '0.78rem', marginTop: '4px' }}>
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Number Field */}
      <div>
        <label
          htmlFor="reg-phone"
          style={{
            display: 'block',
            fontSize: '0.85rem',
            fontWeight: '600',
            color: '#CBD5E1',
            marginBottom: '6px'
          }}
        >
          Mobile Number <span style={{ color: '#F43F5E' }}>*</span>
          <span style={{ fontSize: '0.75rem', color: '#64748B', marginLeft: '6px' }}>(10-digit Indian)</span>
        </label>
        <div style={{ position: 'relative' }}>
          <Phone
            size={18}
            color="#64748B"
            style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            id="reg-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            placeholder="9876543210"
            style={{
              width: '100%',
              padding: '10px 14px 10px 42px',
              borderRadius: '10px',
              background: 'rgba(15, 23, 42, 0.75)',
              border: `1px solid ${errors.phone ? '#F43F5E' : 'rgba(255, 255, 255, 0.12)'}`,
              color: '#FFFFFF',
              fontSize: '0.925rem',
              transition: 'all 0.2s'
            }}
          />
        </div>
        {errors.phone && (
          <p style={{ color: '#F43F5E', fontSize: '0.78rem', marginTop: '4px' }}>
            {errors.phone}
          </p>
        )}
      </div>

      {/* Security reassurance */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 12px',
          borderRadius: '8px',
          background: 'rgba(255, 255, 255, 0.03)',
          color: '#64748B',
          fontSize: '0.78rem'
        }}
      >
        <ShieldCheck size={16} color="#10B981" />
        <span>Instant admission pass generated. Stored securely in your session.</span>
      </div>

      {/* Modal Actions */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '0.5rem' }}>
        <button
          type="button"
          onClick={onCancel}
          className="btn-secondary"
          style={{ flex: 1, padding: '0.75rem' }}
          disabled={isSubmitting}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="btn-primary"
          style={{ flex: 1.5, padding: '0.75rem' }}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            'Reserving Spot...'
          ) : (
            <>
              <Sparkles size={16} />
              Confirm Registration
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
