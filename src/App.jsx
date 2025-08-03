import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.component';
import PatientLayout from './layouts/PatientLayout';

import Landing from './pages/guest/Landing';
import About from './pages/guest/About';
import Service from './pages/guest/Service';
import FAQ from './pages/guest/Faq';

import LoginRegister from './pages/auth/LoginRegister';

import PatientDashboard from './pages/patient/Dashboard';
import EditProfile from './pages/patient/EditProfile';
import BookAppointment from './pages/patient/BookAppointment';
import AppointmentHistory from './pages/patient/AppointmentHistory';
import ReschedulePage from './pages/patient/RescheduleModal'; // ✅ NEW

import { RescheduleProvider } from './context/RescheduleContext'; // ✅ NEW
import './App.css';

const App = () => {
  return (
    <RescheduleProvider>
      <Routes>
        {/* Guest pages with Navbar */}
        <Route path="/" element={<Navbar />}>
          <Route index element={<Landing />} />
          <Route path="about-us" element={<About />} />
          <Route path="services" element={<Service />} />
          <Route path="faq" element={<FAQ />} />
        </Route>

        {/* Auth */}
        <Route path="/signin" element={<LoginRegister />} />
        <Route path="/signup" element={<LoginRegister />} />

        {/* Patient section with layout (Sidebar inside layout) */}
        <Route element={<PatientLayout />}>
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/appointment-history" element={<AppointmentHistory />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/reschedule" element={<ReschedulePage />} /> {/* ✅ NEW */}
        </Route>
      </Routes>
    </RescheduleProvider>
  );
};

export default App;
