import React from 'react';
import EventCard from './EventCard';

export const EventGrid = ({ events, emptyState }) => {
  if (!events || events.length === 0) {
    return emptyState || null;
  }

  return (
    <div
      className="responsive-grid-cards"
    >
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventGrid;
