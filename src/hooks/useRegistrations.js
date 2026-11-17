import { useEventContext } from '../context/EventContext';

export const useRegistrations = () => {
  const {
    registrations,
    registerForEvent,
    cancelRegistration,
    isAlreadyRegistered,
    openRegistrationModal,
    closeRegistrationModal,
    activeModalEvent
  } = useEventContext();

  return {
    registrations,
    registerForEvent,
    cancelRegistration,
    isAlreadyRegistered,
    openRegistrationModal,
    closeRegistrationModal,
    activeModalEvent,
    totalRegistrations: registrations.length
  };
};
