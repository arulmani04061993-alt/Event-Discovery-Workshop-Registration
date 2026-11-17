import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { EventProvider } from './context/EventContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import ToastNotification from './components/ToastNotification';
import RegistrationModal from './components/RegistrationModal';
import LoadingAnimation from './components/LoadingAnimation';

// Pages
import Home from './pages/Home';
import ExploreEvents from './pages/ExploreEvents';
import EventDetails from './pages/EventDetails';
import MyRegistrations from './pages/MyRegistrations';
import FindWorkshops from './pages/FindWorkshops';
import NotFound from './pages/NotFound';

const AppContent = () => {
  const location = useLocation();

  // Known valid routes
  const validPrefixes = ['/', '/events', '/workshops', '/registrations'];
  const isKnownRoute =
    location.pathname === '/' ||
    location.pathname === '/events' ||
    location.pathname.startsWith('/events/') ||
    location.pathname === '/workshops' ||
    location.pathname === '/registrations';

  // If path is /404 or any undefined route, it is a 404 page -> hide navbar and footer
  const is404Page = location.pathname === '/404' || !isKnownRoute;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {!is404Page && <Navbar />}

      <main style={{ flex: 1 }}>
        <Suspense fallback={<LoadingAnimation text="Loading Stackly experience..." />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<ExploreEvents />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/workshops" element={<FindWorkshops />} />
            <Route path="/registrations" element={<MyRegistrations />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      {!is404Page && <Footer />}

      {/* Global Modals and Portals */}
      <RegistrationModal />
      <ToastNotification />
      {!is404Page && <BackToTop />}
    </div>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <EventProvider>
        <ScrollToTop />
        <AppContent />
      </EventProvider>
    </BrowserRouter>
  );
};

export default App;
