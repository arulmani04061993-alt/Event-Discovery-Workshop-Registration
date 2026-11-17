import React from 'react';
import { Cpu, Briefcase, Palette, GraduationCap, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ICON_MAP = {
  Cpu,
  Briefcase,
  Palette,
  GraduationCap
};

export const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.25rem',
        width: '100%'
      }}
    >
      {categories.map((cat) => {
        const IconComponent = ICON_MAP[cat.iconName] || Cpu;
        const isSelected = selectedCategory === cat.id;

        return (
          <div
            key={cat.id}
            role="button"
            tabIndex={0}
            onClick={() => {
              if (onSelectCategory) {
                onSelectCategory(cat.id);
              } else {
                navigate(`/events?category=${encodeURIComponent(cat.id)}`);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                if (onSelectCategory) onSelectCategory(cat.id);
                else navigate(`/events?category=${encodeURIComponent(cat.id)}`);
              }
            }}
            className="glass-panel"
            style={{
              padding: '1.5rem',
              borderRadius: '16px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              background: isSelected
                ? 'rgba(79, 70, 229, 0.15)'
                : 'rgba(15, 23, 42, 0.65)',
              borderColor: isSelected
                ? '#6366F1'
                : 'rgba(255, 255, 255, 0.08)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = isSelected
                ? '#6366F1'
                : 'rgba(255, 255, 255, 0.08)';
            }}
          >
            {/* Top row: Icon and Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: isSelected
                    ? 'linear-gradient(135deg, #4F46E5, #06B6D4)'
                    : 'rgba(255, 255, 255, 0.06)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <IconComponent size={22} />
              </div>

              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  color: isSelected ? '#38BDF8' : '#94A3B8',
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '3px 9px',
                  borderRadius: '20px'
                }}
              >
                {cat.badge}
              </span>
            </div>

            {/* Title */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h4
                style={{
                  fontSize: '1.15rem',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  marginBottom: '0.4rem'
                }}
              >
                {cat.title}
              </h4>
              <ArrowUpRight
                size={18}
                color={isSelected ? '#38BDF8' : '#64748B'}
                style={{ transition: 'transform 0.2s ease' }}
              />
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: '0.85rem',
                color: '#94A3B8',
                lineHeight: 1.4
              }}
            >
              {cat.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
