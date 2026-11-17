import React, { useState, useMemo } from 'react';
import { useEvents } from '../hooks/useEvents';
import { useRegistrations } from '../hooks/useRegistrations';
import EventCard from '../components/EventCard';
import EmptyState from '../components/EmptyState';
import { 
  Sparkles, 
  Search, 
  Filter, 
  BookOpen, 
  Laptop, 
  Award, 
  Clock, 
  Users, 
  Calendar,
  CheckCircle2,
  SlidersHorizontal,
  X
} from 'lucide-react';

export const FindWorkshops = () => {
  const { events } = useEvents();
  const { openRegistrationModal } = useRegistrations();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('All');
  const [levelFilter, setLevelFilter] = useState('All'); // All, Beginner, Intermediate, Advanced
  const [formatFilter, setFormatFilter] = useState('All'); // All, In-Person, Hybrid

  // Dedicated workshop levels and topics mapping
  const workshopTracks = ['All', 'Technology', 'Design', 'Business', 'Education'];
  const levels = ['All', 'Hands-on Lab', 'Architect Level', 'Masterclass'];

  // Filtered workshops logic
  const filteredWorkshops = useMemo(() => {
    return events.filter((evt) => {
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        evt.name.toLowerCase().includes(q) ||
        evt.description.toLowerCase().includes(q) ||
        evt.location.toLowerCase().includes(q);

      const matchesTrack =
        selectedTrack === 'All' || evt.category === selectedTrack;

      return matchesSearch && matchesTrack;
    });
  }, [events, searchQuery, selectedTrack]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTrack('All');
    setLevelFilter('All');
    setFormatFilter('All');
  };

  return (
    <div className="animate-fade-in" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Hero Header Section */}
        <div
          className="glass-panel"
          style={{
            borderRadius: '24px',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.85) 0%, rgba(15, 23, 42, 0.95) 100%)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            marginBottom: '3rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Ambient Corner Lighting */}
          <div
            style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ maxWidth: '780px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '20px', background: 'rgba(6, 182, 212, 0.15)', border: '1px solid rgba(6, 182, 212, 0.35)', color: '#38BDF8', fontSize: '0.82rem', fontWeight: '700', marginBottom: '1rem' }}>
              <Sparkles size={16} />
              <span>STACKLY HANDS-ON ACADEMY & LABS</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                fontWeight: '900',
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '1rem'
              }}
            >
              Find Technical Workshops & Intensive Labs
            </h1>

            <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '2rem' }}>
              Deep dive into code labs, systems architecture, and product sprints. Every workshop features real production repositories, peer code reviews, and direct mentoring from industry leads.
            </p>

            {/* Feature Perks Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                fontSize: '0.88rem',
                color: '#94A3B8'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Laptop size={16} color="#818CF8" />
                <span>Live Coding Sprints</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Award size={16} color="#10B981" />
                <span>Verified Certificate</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <BookOpen size={16} color="#06B6D4" />
                <span>Take-Home Source Code</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div
          className="glass-panel"
          style={{
            padding: '1.25rem 1.5rem',
            borderRadius: '16px',
            marginBottom: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {/* Search Input */}
            <div style={{ position: 'relative', flex: 1, minWidth: '280px', maxWidth: '520px' }}>
              <Search
                size={18}
                color="#94A3B8"
                style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search workshops by topic, tool, or technology..."
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 42px',
                  borderRadius: '10px',
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Track Filter Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {workshopTracks.map((trk) => {
                const isActive = selectedTrack === trk;
                return (
                  <button
                    key={trk}
                    onClick={() => setSelectedTrack(trk)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '0.82rem',
                      fontWeight: isActive ? '700' : '500',
                      background: isActive ? 'linear-gradient(135deg, #4F46E5, #06B6D4)' : 'rgba(255, 255, 255, 0.05)',
                      color: isActive ? '#FFFFFF' : '#CBD5E1',
                      border: isActive ? '1px solid #818CF8' : '1px solid rgba(255, 255, 255, 0.08)',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                  >
                    {trk === 'All' ? 'All Workshops' : trk}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Metadata */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', padding: '0 4px' }}>
          <div style={{ fontSize: '0.95rem', color: '#94A3B8' }}>
            Found <strong style={{ color: '#FFFFFF' }}>{filteredWorkshops.length}</strong> active technical workshops
          </div>

          {(searchQuery || selectedTrack !== 'All') && (
            <button
              onClick={clearFilters}
              style={{ color: '#818CF8', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'underline' }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Workshop Cards Grid */}
        {filteredWorkshops.length === 0 ? (
          <EmptyState
            title="No workshops found"
            description="No active technical workshops match your search filters. Try searching for other topics like AI, Rust, Cloud, or Design Systems."
            actionText="Show All Workshops"
            onActionClick={clearFilters}
          />
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {filteredWorkshops.map((ws) => (
              <EventCard key={ws.id} event={ws} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindWorkshops;
