
import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LayoutDashboard, Briefcase, User, LogOut, Globe } from 'lucide-react';
import Button from '../../components/ui/Button';

const AdminLayout: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `flex items-center px-4 py-3 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'bg-brand-primary-500 text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'
    }`;

  return (
    <div className="flex flex-col md:flex-row min-h-[80vh] bg-brand-bg-800 rounded-lg overflow-hidden">
      <aside className="w-full md:w-64 bg-brand-bg-900 p-4 flex flex-col border-b md:border-b-0 md:border-r border-white/10">
        <h1 className="font-heading text-xl text-brand-text tracking-widest px-4 mb-8">Admin Panel</h1>
        <nav className="flex-grow space-y-2">
          <NavLink to="/admin" end className={navLinkClass}>
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Dashboard
          </NavLink>
          <NavLink to="/admin/profile" className={navLinkClass}>
            <User className="mr-3 h-5 w-5" />
            Profile
          </NavLink>
          <NavLink to="/admin/projects" className={navLinkClass}>
            <Briefcase className="mr-3 h-5 w-5" />
            Projects
          </NavLink>
        </nav>
        <div className="mt-auto space-y-4 pt-4">
          <Button variant="outline" className="w-full" onClick={() => navigate('/')}>
            <Globe className="mr-2 h-4 w-4" /> View Site
          </Button>
          <Button variant="secondary" onClick={handleLogout} className="w-full">
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </aside>
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
