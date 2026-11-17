import React from 'react';
import EventCard from './EventCard';

export const EventGrid = ({ events, emptyState }) => {
  if (!events || events.length === 0) {
    return emptyState || null;
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.75rem',
        width: '100%'
      }}
    >
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventGrid;
