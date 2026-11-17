/**
 * Validation utility for registration form
 */

// Email regex adhering to standard RFC formats
export const isValidEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).trim());
};

// Indian Phone Number validation (10 digits starting with 6, 7, 8, or 9, optional +91 or 0 prefix)
export const isValidIndianPhone = (phone) => {
  const cleaned = String(phone).replace(/[\s\-()]/g, '');
  const re = /^(?:\+91|91|0)?[6-9]\d{9}$/;
  return re.test(cleaned);
};

export const validateRegistrationForm = ({ fullName, email, phone }) => {
  const errors = {};

  if (!fullName || !fullName.trim()) {
    errors.fullName = 'Full Name is required.';
  } else if (fullName.trim().length < 3) {
    errors.fullName = 'Full Name must be at least 3 characters.';
  }

  if (!email || !email.trim()) {
    errors.email = 'Email Address is required.';
  } else if (!isValidEmail(email)) {
    errors.email = 'Please provide a valid email address (e.g., name@example.com).';
  }

  if (!phone || !phone.trim()) {
    errors.phone = 'Phone Number is required.';
  } else if (!isValidIndianPhone(phone)) {
    errors.phone = 'Please provide a valid 10-digit Indian mobile number (e.g., 9876543210).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const generateRegistrationId = () => {
  const prefix = 'STK';
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${timestamp}-${random}`;
};
