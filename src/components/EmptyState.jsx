import React from 'react';
import { CalendarX, Search, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EmptyState = ({
  icon: Icon = CalendarX,
  title = "No results found",
  description = "We couldn't find what you were searching for. Try adjusting your search query or filters.",
  actionText,
  actionLink,
  onActionClick
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1.5rem',
        textAlign: 'center',
        background: 'rgba(15, 23, 42, 0.5)',
        border: '1px dashed rgba(255, 255, 255, 0.12)',
        borderRadius: '16px',
        maxWidth: '560px',
        margin: '2rem auto'
      }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'rgba(99, 102, 241, 0.1)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.25rem',
          color: '#818CF8'
        }}
      >
        <Icon size={32} />
      </div>

      <h3
        style={{
          fontSize: '1.25rem',
          fontWeight: '700',
          color: '#F8FAFC',
          marginBottom: '0.5rem'
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: '0.95rem',
          color: '#94A3B8',
          maxWidth: '420px',
          lineHeight: '1.5',
          marginBottom: actionText ? '1.5rem' : '0'
        }}
      >
        {description}
      </p>

      {actionText && actionLink && (
        <Link to={actionLink} className="btn-primary">
          <Compass size={18} />
          {actionText}
        </Link>
      )}

      {actionText && onActionClick && !actionLink && (
        <button onClick={onActionClick} className="btn-secondary">
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
