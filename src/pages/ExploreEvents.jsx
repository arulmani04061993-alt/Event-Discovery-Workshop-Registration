import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEvents } from '../hooks/useEvents';
import EventCard from '../components/EventCard';
import EventGrid from '../components/EventGrid';
import SearchBar from '../components/SearchBar';
import EmptyState from '../components/EmptyState';
import { 
  Filter, 
  MapPin, 
  ArrowUpDown, 
  RotateCcw, 
  Compass, 
  Layers,
  Sparkles,
  ShieldCheck,
  Calendar,
  Award,
  Users,
  CheckCircle2,
  Clock,
  ExternalLink
} from 'lucide-react';

export const ExploreEvents = () => {
  const { events } = useEvents();
  const [searchParams, setSearchParams] = useSearchParams();

  // Extract initial filters from search parameters
  const categoryParam = searchParams.get('category') || 'All';
  const locationParam = searchParams.get('location') || 'All';
  const queryParam = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedLocation, setSelectedLocation] = useState(locationParam);
  const [sortBy, setSortBy] = useState('upcoming'); // 'upcoming', 'latest', 'seats'

  // Categories list
  const categories = ['All', 'Technology', 'Business', 'Design', 'Education'];

  // Distinct locations extracted dynamically from events
  const locations = useMemo(() => {
    const set = new Set(events.map((e) => e.location));
    return ['All', ...Array.from(set)];
  }, [events]);

  // Update query params when search or filters change
  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleLocationSelect = (loc) => {
    setSelectedLocation(loc);
    if (loc === 'All') {
      searchParams.delete('location');
    } else {
      searchParams.set('location', loc);
    }
    setSearchParams(searchParams);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    if (!query) {
      searchParams.delete('search');
    } else {
      searchParams.set('search', query);
    }
    setSearchParams(searchParams);
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedLocation('All');
    setSortBy('upcoming');
    setSearchParams({});
  };

  // Filtered and Sorted Events
  const filteredEvents = useMemo(() => {
    return events
      .filter((event) => {
        // 1. Text search match (Name or Description or Venue)
        const query = searchQuery.trim().toLowerCase();
        const matchesQuery =
          !query ||
          event.name.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query) ||
          event.venue.toLowerCase().includes(query) ||
          event.location.toLowerCase().includes(query);

        // 2. Category match
        const matchesCategory =
          selectedCategory === 'All' || event.category === selectedCategory;

        // 3. Location match
        const matchesLocation =
          selectedLocation === 'All' || event.location === selectedLocation;

        return matchesQuery && matchesCategory && matchesLocation;
      })
      .sort((a, b) => {
        if (sortBy === 'upcoming') {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
        if (sortBy === 'latest') {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        if (sortBy === 'seats') {
          return b.availableSeats - a.availableSeats;
        }
        return 0;
      });
  }, [events, searchQuery, selectedCategory, selectedLocation, sortBy]);

  const hasActiveFilters =
    searchQuery !== '' || selectedCategory !== 'All' || selectedLocation !== 'All';

  return (
    <div className="animate-fade-in" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
      <div className="container">
        {/* Header Title */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Compass size={20} color="#06B6D4" />
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: '700',
                color: '#06B6D4',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              GLOBAL WORKSHOPS DIRECTORY
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: '800',
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              marginBottom: '0.5rem'
            }}
          >
            Explore Masterclasses & Summits
          </h1>

          <p style={{ fontSize: '1rem', color: '#94A3B8', maxWidth: '680px' }}>
            Browse through 12+ enterprise-tier technical conferences and workshops. Filter by discipline, venue city, or search specific topics.
          </p>
        </div>

        {/* Filter & Search Bar Control Surface */}
        <div
          className="glass-panel"
          style={{
            padding: '1.5rem',
            borderRadius: '16px',
            marginBottom: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}
        >
          {/* Top row: Search Bar & Sort Dropdown */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <SearchBar
              value={searchQuery}
              onChange={handleSearchChange}
              onClear={() => handleSearchChange('')}
              placeholder="Search by event title, topic, or venue..."
            />

            {/* Sort & Quick Reset */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px',
                  padding: '6px 12px',
                  color: '#CBD5E1',
                  fontSize: '0.85rem'
                }}
              >
                <ArrowUpDown size={16} color="#818CF8" />
                <span style={{ color: '#94A3B8' }}>Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#FFFFFF',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  <option value="upcoming" style={{ background: '#0F172A' }}>Upcoming Date</option>
                  <option value="latest" style={{ background: '#0F172A' }}>Latest Date</option>
                  <option value="seats" style={{ background: '#0F172A' }}>Most Available Seats</option>
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="btn-secondary"
                  style={{ padding: '0.5rem 1rem', fontSize: '0.82rem' }}
                >
                  <RotateCcw size={14} />
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Bottom row: Category Pills & Location Filter */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '0.75rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)'
            }}
          >
            {/* Category Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontSize: '0.82rem', color: '#94A3B8', marginRight: '4px' }}>
                Track:
              </span>
              {categories.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    style={{
                      padding: '5px 14px',
                      borderRadius: '20px',
                      fontSize: '0.82rem',
                      fontWeight: active ? '700' : '500',
                      background: active
                        ? 'linear-gradient(135deg, #4F46E5, #6366F1)'
                        : 'rgba(255, 255, 255, 0.05)',
                      color: active ? '#FFFFFF' : '#CBD5E1',
                      border: active
                        ? '1px solid #818CF8'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Location Select */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} color="#06B6D4" />
              <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>City:</span>
              <select
                value={selectedLocation}
                onChange={(e) => handleLocationSelect(e.target.value)}
                style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  padding: '5px 12px',
                  color: '#FFFFFF',
                  fontSize: '0.82rem',
                  cursor: 'pointer'
                }}
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc} style={{ background: '#0F172A' }}>
                    {loc === 'All' ? 'All Locations' : loc}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Metadata Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
            padding: '0 4px'
          }}
        >
          <div style={{ fontSize: '0.92rem', color: '#94A3B8' }}>
            Showing{' '}
            <strong style={{ color: '#FFFFFF' }}>{filteredEvents.length}</strong> of{' '}
            <span>{events.length}</span> events
          </div>

          {hasActiveFilters && (
            <div style={{ fontSize: '0.85rem', color: '#818CF8' }}>
              Active filters applied
            </div>
          )}
        </div>

        {/* Event Cards Grid or Empty State */}
        <EventGrid
          events={filteredEvents}
          emptyState={
            <EmptyState
              title="No events match your criteria"
              description="We couldn't find any workshops matching your current filters. Try searching with different keywords or reset your filters."
              actionText="Reset All Filters"
              onActionClick={clearAllFilters}
            />
          }
        />

        {/* Extra Rich Content Section 1: Event Discovery Perks & Features */}
        <section style={{ marginTop: '5rem', paddingTop: '3.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem auto' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: '700',
                color: '#06B6D4',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              PREMIUM WORKSHOP EXPERIENCE
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: '800',
                color: '#FFFFFF',
                marginTop: '6px'
              }}
            >
              What to Expect at Every STACKLY Event
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#94A3B8', marginTop: '8px' }}>
              All events in our directory adhere to the highest enterprise standards of quality, zero sponsor fluff, and actionable takeaways.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3.5rem'
            }}
          >
            <div
              className="glass-panel"
              style={{
                padding: '1.75rem',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(79, 70, 229, 0.15)',
                  border: '1px solid rgba(79, 70, 229, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#818CF8',
                  marginBottom: '1rem'
                }}
              >
                <Award size={22} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>
                Verifiable Credentials
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6 }}>
                Receive official certificates of attendance and GitHub verified project credentials backed by organizer guilds.
              </p>
            </div>

            <div
              className="glass-panel"
              style={{
                padding: '1.75rem',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(6, 182, 212, 0.15)',
                  border: '1px solid rgba(6, 182, 212, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#06B6D4',
                  marginBottom: '1rem'
                }}
              >
                <Users size={22} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>
                Cohort-Based Learning
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6 }}>
                Intimate room sizes (50 to 150 practitioners) ensuring 1:1 engagement with speakers, mentors, and fellow senior engineers.
              </p>
            </div>

            <div
              className="glass-panel"
              style={{
                padding: '1.75rem',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#10B981',
                  marginBottom: '1rem'
                }}
              >
                <ShieldCheck size={22} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>
                Zero Sales Pitches
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6 }}>
                Content is vetted to ensure architecture teardowns, live terminal workflows, and raw source code instead of corporate pitches.
              </p>
            </div>

            <div
              className="glass-panel"
              style={{
                padding: '1.75rem',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F59E0B',
                  marginBottom: '1rem'
                }}
              >
                <Clock size={22} />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFFFFF', marginBottom: '8px' }}>
                Recorded & Synchronized
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6 }}>
                Registered attendees gain lifelong access to keynote recordings, private slide repos, and code samples.
              </p>
            </div>
          </div>
        </section>

        {/* Extra Rich Content Section 2: Host or Propose a Workshop CTA */}
        <section>
          <div
            className="glass-panel"
            style={{
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem'
            }}
          >
            <div style={{ maxWidth: '620px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#06B6D4',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem'
                }}
              >
                <Sparkles size={16} />
                <span>COMMUNITY & ENTERPRISE PARTNERSHIP</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: '800', color: '#FFFFFF', marginBottom: '0.75rem' }}>
                Are you organizing a conference or masterclass?
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#CBD5E1', lineHeight: 1.6 }}>
                List your event on STACKLY to reach our collective of 45,000+ senior architects, software engineers, and founders across India. Get verified organizer status and effortless registration management.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => alert('Partner onboarding is opening soon! Contact partnerships@stackly.io for priority review.')}
                className="btn-primary"
                style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
              >
                <Sparkles size={18} />
                Partner as an Organizer
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExploreEvents;
