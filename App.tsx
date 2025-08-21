
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { SnarkProvider } from './context/SnarkContext';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import { I18nProvider } from './context/I18nContext';

import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminProfilePage from './pages/admin/AdminProfilePage';
import AdminProjectsPage from './pages/admin/AdminProjectsPage';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <SnarkProvider>
          <I18nProvider>
          <HashRouter>
            <div className="flex flex-col min-h-screen bg-brand-bg-900 font-body text-brand-text">
              <Header />
              <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/work" element={<WorkPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  
                  {/* Admin Routes */}
                  <Route path="/admin" element={<ProtectedRoute />}>
                    <Route element={<AdminLayout />}>
                        <Route index element={<AdminDashboardPage />} />
                        <Route path="profile" element={<AdminProfilePage />} />
                        <Route path="projects" element={<AdminProjectsPage />} />
                    </Route>
                  </Route>

                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </HashRouter>
          </I18nProvider>
        </SnarkProvider>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;
