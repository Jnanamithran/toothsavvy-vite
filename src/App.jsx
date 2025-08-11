// App.jsx (Updated)

import { Routes, Route } from 'react-router-dom';

// Layouts
import PatientLayout from './layouts/PatientLayout';
import DoctorLayout from './layouts/DoctorLayout';
import Navbar from './components/Navbar/Navbar.component';

// Guest Pages
import Landing from './pages/guest/Landing';
import About from './pages/guest/About';
import Service from './pages/guest/Service';
import FAQ from './pages/guest/Faq';

// Auth Page
import LoginRegister from './pages/auth/LoginRegister';
import DoctorLogin from './pages/auth/DoctorLogin'; // ✅ NEW

// Patient Pages
import PatientDashboard from './pages/patient/Dashboard';
import EditProfile from './pages/patient/EditProfile';
import BookAppointment from './pages/patient/BookAppointment';
import AppointmentHistory from './pages/patient/AppointmentHistory';
import ReschedulePage from './pages/patient/RescheduleModal';

// Doctor Pages
import DoctorDashboard from './pages/doctor/Dashboard';
import CheckupForm from './pages/doctor/CheckupForm';
import ManageAppointments from './pages/doctor/ManageAppointments';
import PatientHistory from './pages/doctor/PatientHistory';

// Context
import { RescheduleProvider } from './context/RescheduleContext';
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
        <Route path="/doctor-signin" element={<DoctorLogin />} /> {/* ✅ NEW */}

        {/* Patient section with layout */}
        <Route element={<PatientLayout />}>
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/appointment-history" element={<AppointmentHistory />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/reschedule" element={<ReschedulePage />} />
        </Route>

        {/* Doctor section with layout */}
        <Route element={<DoctorLayout />}>
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="/checkup-form" element={<CheckupForm />} />
            <Route path="/manage-appointments" element={<ManageAppointments />} />
            <Route path="/patient-history" element={<PatientHistory />} />
        </Route>

      </Routes>
    </RescheduleProvider>
  );
};

export default App;
