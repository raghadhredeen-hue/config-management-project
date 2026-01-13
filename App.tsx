
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UserRole } from './types';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Dashboards
import AdminDashboard from './pages/dashboards/AdminDashboard';
import ReviewerDashboard from './pages/dashboards/ReviewerDashboard';
import ConferenceManagerDashboard from './pages/dashboards/ConferenceManagerDashboard';
import ProfilePage from './pages/ProfilePage';
import UserDashboard from './pages/dashboards/UserDashboard';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              {/* Protected Routes by Role */}
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute allowedRoles={[UserRole.ADMIN]}>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/reviewer" 
                element={
                  <ProtectedRoute allowedRoles={[UserRole.REVIEWER]}>
                    <ReviewerDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/manager" 
                element={
                  <ProtectedRoute allowedRoles={[UserRole.CONFERENCE_MANAGER]}>
                    <ConferenceManagerDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute allowedRoles={[UserRole.USER]}>
                    <UserDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute allowedRoles={[UserRole.USER, UserRole.ADMIN, UserRole.REVIEWER, UserRole.CONFERENCE_MANAGER]}>
                    <ProfilePage />
                  </ProtectedRoute>
                } 
              />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
