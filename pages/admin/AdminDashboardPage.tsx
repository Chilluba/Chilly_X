
import React from 'react';
import { useData } from '../../context/DataContext';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Briefcase, User, Server } from 'lucide-react';

const AdminDashboardPage: React.FC = () => {
  const { profile, projects, services } = useData();

  return (
    <div>
      <h1 className="font-heading text-4xl text-brand-accent uppercase tracking-wider mb-8">Dashboard</h1>
      <p className="text-lg text-gray-300 mb-10">Welcome back, {profile.displayName}. Here's a summary of your portfolio.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="flex items-center p-6">
          <Briefcase className="h-12 w-12 text-brand-accent mr-6" />
          <div>
            <p className="text-4xl font-mono text-white">{projects.length}</p>
            <p className="text-sm uppercase text-gray-400">Projects</p>
          </div>
        </Card>
        <Card className="flex items-center p-6">
          <Server className="h-12 w-12 text-brand-accent mr-6" />
          <div>
            <p className="text-4xl font-mono text-white">{services.length}</p>
            <p className="text-sm uppercase text-gray-400">Services</p>
          </div>
        </Card>
        <Card className="flex items-center p-6">
          <User className="h-12 w-12 text-brand-accent mr-6" />
          <div>
            <p className="text-2xl font-mono text-white truncate">{profile.fullName}</p>
            <p className="text-sm uppercase text-gray-400">Profile</p>
          </div>
        </Card>
      </div>
      
      <div className="mt-12">
        <h2 className="font-heading text-2xl text-brand-text mb-4">Quick Actions</h2>
        <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/admin/projects">
              <Button variant="primary" className="w-full sm:w-auto">Manage Projects</Button>
            </Link>
             <Link to="/admin/profile">
                <Button variant="outline" className="w-full sm:w-auto">Edit Profile</Button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
