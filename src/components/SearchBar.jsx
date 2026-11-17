import React from 'react';
import { Search, X } from 'lucide-react';

export const SearchBar = ({
  value,
  onChange,
  placeholder = "Search workshops, conferences, or topics...",
  onClear
}) => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '560px'
      }}
    >
      <Search
        size={18}
        color="#94A3B8"
        style={{
          position: 'absolute',
          left: '14px',
          pointerEvents: 'none'
        }}
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '0.75rem 2.6rem 0.75rem 2.6rem',
          background: 'rgba(15, 23, 42, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '12px',
          color: '#F8FAFC',
          fontSize: '0.925rem',
          transition: 'all 0.2s ease',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = '#6366F1';
          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.25)';
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        }}
      />

      {value && (
        <button
          onClick={onClear}
          style={{
            position: 'absolute',
            right: '12px',
            background: 'none',
            border: 'none',
            color: '#94A3B8',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          aria-label="Clear search text"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
