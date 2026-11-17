import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_EVENTS } from '../data/events';
import { getStoredItem, setStoredItem, STORAGE_KEYS } from '../utils/localStorage';
import { generateRegistrationId } from '../utils/validation';

const EventContext = createContext(null);

export const EventProvider = ({ children }) => {
  // 1. Events state
  const [events, setEvents] = useState(() => {
    const saved = getStoredItem(STORAGE_KEYS.EVENTS, null);
    if (saved && Array.isArray(saved) && saved.length > 0) {
      return saved;
    }
    setStoredItem(STORAGE_KEYS.EVENTS, INITIAL_EVENTS);
    return INITIAL_EVENTS;
  });

  // 2. Registrations state
  const [registrations, setRegistrations] = useState(() => {
    return getStoredItem(STORAGE_KEYS.REGISTRATIONS, []);
  });

  // 3. Favorites state
  const [favorites, setFavorites] = useState(() => {
    return getStoredItem(STORAGE_KEYS.FAVORITES, []);
  });

  // 4. Modal state for registration
  const [activeModalEvent, setActiveModalEvent] = useState(null);

  // 5. Toast Notification state
  const [toasts, setToasts] = useState([]);

  // Sync events to localStorage
  useEffect(() => {
    setStoredItem(STORAGE_KEYS.EVENTS, events);
  }, [events]);

  // Sync registrations to localStorage
  useEffect(() => {
    setStoredItem(STORAGE_KEYS.REGISTRATIONS, registrations);
  }, [registrations]);

  // Sync favorites to localStorage
  useEffect(() => {
    setStoredItem(STORAGE_KEYS.FAVORITES, favorites);
  }, [favorites]);

  // Helper: Trigger a toast notification
  const addToast = (message, type = 'info', duration = 4000) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Toggle Favorite
  const toggleFavorite = (eventId) => {
    setFavorites((prev) => {
      const exists = prev.includes(eventId);
      if (exists) {
        addToast('Removed event from your favorites.', 'info');
        return prev.filter((id) => id !== eventId);
      } else {
        addToast('Saved event to your favorites!', 'success');
        return [...prev, eventId];
      }
    });
  };

  // Check if an event is favorited
  const isFavorite = (eventId) => favorites.includes(eventId);

  // Check if an email is already registered for this event
  const isAlreadyRegistered = (eventId, email) => {
    if (!email) return false;
    const cleanEmail = email.trim().toLowerCase();
    return registrations.some(
      (reg) => reg.eventId === eventId && reg.email.toLowerCase() === cleanEmail
    );
  };

  // Register user for an event
  const registerForEvent = (event, { fullName, email, phone }) => {
    const targetEvent = events.find((e) => e.id === event.id);

    if (!targetEvent) {
      return { success: false, error: 'Event not found.' };
    }

    if (targetEvent.availableSeats <= 0) {
      return { success: false, error: 'Sorry, this event is fully booked!' };
    }

    if (isAlreadyRegistered(targetEvent.id, email)) {
      return {
        success: false,
        error: `The email "${email}" is already registered for this event.`
      };
    }

    const regId = generateRegistrationId();
    const newRegistration = {
      id: regId,
      eventId: targetEvent.id,
      eventTitle: targetEvent.name,
      eventDate: targetEvent.date,
      formattedDate: targetEvent.formattedDate,
      eventTime: targetEvent.startTime,
      eventLocation: targetEvent.location,
      eventVenue: targetEvent.venue,
      eventImage: targetEvent.image,
      eventCategory: targetEvent.category,
      userName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      registrationDate: new Date().toISOString(),
      status: 'Confirmed'
    };

    // 1. Update Registrations
    setRegistrations((prev) => [newRegistration, ...prev]);

    // 2. Decrement Available Seats
    setEvents((prev) =>
      prev.map((e) =>
        e.id === targetEvent.id
          ? { ...e, availableSeats: Math.max(0, e.availableSeats - 1) }
          : e
      )
    );

    addToast(`Registration Confirmed! Pass ID: ${regId}`, 'success', 5000);
    return { success: true, registration: newRegistration };
  };

  // Cancel a registration and restore seats
  const cancelRegistration = (registrationId) => {
    const registration = registrations.find((r) => r.id === registrationId);
    if (!registration) {
      return { success: false, error: 'Registration not found.' };
    }

    // 1. Remove from registrations
    setRegistrations((prev) => prev.filter((r) => r.id !== registrationId));

    // 2. Restore seat in events
    setEvents((prev) =>
      prev.map((e) =>
        e.id === registration.eventId
          ? { ...e, availableSeats: Math.min(e.totalSeats, e.availableSeats + 1) }
          : e
      )
    );

    addToast('Registration cancelled. Your reserved seat has been released.', 'info');
    return { success: true };
  };

  const openRegistrationModal = (event) => {
    setActiveModalEvent(event);
  };

  const closeRegistrationModal = () => {
    setActiveModalEvent(null);
  };

  return (
    <EventContext.Provider
      value={{
        events,
        registrations,
        favorites,
        toasts,
        activeModalEvent,
        openRegistrationModal,
        closeRegistrationModal,
        registerForEvent,
        cancelRegistration,
        toggleFavorite,
        isFavorite,
        isAlreadyRegistered,
        addToast,
        removeToast
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
};
