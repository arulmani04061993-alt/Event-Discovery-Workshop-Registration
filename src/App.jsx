import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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

export const App = () => {
  return (
    <BrowserRouter>
      <EventProvider>
        <ScrollToTop />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          
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

          <Footer />
        </div>

        {/* Global Modals and Portals */}
        <RegistrationModal />
        <ToastNotification />
        <BackToTop />
      </EventProvider>
    </BrowserRouter>
  );
};

export default App;
