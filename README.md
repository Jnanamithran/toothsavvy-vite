# 🦷 ToothSavvy - Dental Clinic Management System

**ToothSavvy** is a modern, user-friendly web application designed to streamline the operations of a dental clinic.  
It provides a seamless interface for **patients** to book and manage their appointments, while empowering **doctors** and **administrative staff** with robust tools to manage schedules, patient records, and clinic workflow.

This project is currently focused on **frontend development**, built with **React**, showcasing the complete user experience and application flow.

---

## ✨ Key Features

The application uses a **role-based access system** to cater to the needs of different users.

### 👤 Guest (Unauthenticated Users)
- **Landing Page:** Attractive introduction to the clinic  
- **Services Information:** Details of services offered  
- **About Us & FAQ:** Learn more about the clinic  
- **Login/Register:** Access for patients and staff  

### 👩‍⚕️ Patient Portal
- **Dashboard:** Overview of upcoming appointments & notifications  
- **Book Appointment:** Choose service, doctor, and time slot  
- **Appointment History:** View past & upcoming appointments  
- **Reschedule Appointments:** Request rescheduling  
- **Manage Profile:** Update personal information  

### 👨‍⚕️ Doctor Portal
- **Dashboard:** Daily appointments & key stats  
- **Manage Appointments:** View, approve, reschedule appointments  
- **Patient History:** Access medical records & past visits  
- **Checkup Forms:** Fill & save digital consultation forms  

### ⚙️ Admin Portal
- **Admin Dashboard:** Overview of clinic activity  
- **Manage Doctors:** Add, edit, or remove doctor profiles  
- **Manage Receptionists:** Manage front-desk staff accounts  
- **View All Appointments:** Master view of all schedules  

---

## 🛠️ Tech Stack & Tools
- **Frontend:** React.js  
- **Build Tool:** Vite  
- **Styling:** CSS Modules / Custom CSS  
- **State Management:** React Context API  
- **Routing:** React Router  

---

## 📂 Project Structure

/  
├── public/                  # Public assets  
├── src/  
│   ├── assets/              # Static assets (images, logos, etc.)  
│   ├── components/          # Shared UI components  
│   │   ├── Button/  
│   │   ├── Footer/  
│   │   ├── Navbar/  
│   │   └── Sidebar/  
│   ├── context/             # Global state management  
│   │   ├── AuthContext.jsx  
│   │   └── RescheduleContext.jsx  
│   ├── data/                # Mock JSON data  
│   │   ├── appointments.json  
│   │   └── ...  
│   ├── layouts/             # Layouts for different user roles  
│   │   ├── AdminLayout.jsx  
│   │   ├── DoctorLayout.jsx  
│   │   └── PatientLayout.jsx  
│   ├── pages/               # Feature pages (by role)  
│   │   ├── admin/  
│   │   │   ├── Dashboard.jsx  
│   │   │   └── ManageDoctor.jsx  
│   │   ├── auth/  
│   │   │   └── DoctorLogin.jsx  
│   │   ├── doctor/  
│   │   │   ├── Dashboard.jsx  
│   │   │   └── ManageAppointments.jsx  
│   │   ├── guest/  
│   │   │   ├── Landing.jsx  
│   │   │   └── About.jsx  
│   │   ├── patient/  
│   │   │   ├── Dashboard.jsx  
│   │   │   └── BookAppointment.jsx  
│   │   └── receptionist/  
│   │       ├── Dashboard.jsx  
│   │       └── SearchPatient.jsx  
│   ├── services/            # API / service logic  
│   │   ├── adminService.jsx  
│   │   ├── auth.jsx  
│   │   └── ...  
│   ├── App.jsx              # Main app & routing  
│   ├── main.jsx             # Entry point  
│   └── index.css            # Global styles  
├── .gitignore  
├── index.html  
├── package.json  
└── README.md  

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)  
- npm or yarn  

### Installation & Setup

Clone the repository:
```bash
git clone https://github.com/your-username/toothsavvy.git
```

Navigate to the project folder:
```bash 
cd toothsavvy
```

Install dependencies:
```bash 
npm install
# or
yarn install
```

Run the development server:
```bash 
npm run dev
# or
yarn dev
```

Open your browser:
👉 http://localhost:5173 (or the port shown in your terminal)

---

### 🤝 Contributing
Contributions are always welcome!
1.Fork the project
2.Create your feature branch:
```bash 
git checkout -b feature/AmazingFeature
```
3.Commit your changes:
```bash 
git commit -m 'Add some AmazingFeature'
```
4.Push to the branch:
```bash 
git push origin feature/AmazingFeature
```
5.Open a Pull Request

