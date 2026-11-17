import { useEventContext } from '../context/EventContext';

export const useEvents = () => {
  const { events, favorites, toggleFavorite, isFavorite } = useEventContext();
  return {
    events,
    favorites,
    toggleFavorite,
    isFavorite,
    totalEvents: events.length
  };
};
