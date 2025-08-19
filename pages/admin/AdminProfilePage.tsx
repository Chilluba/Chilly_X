
import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import Button from '../../components/ui/Button';
import ImageUpload from '../../components/ui/ImageUpload';

const AdminProfilePage: React.FC = () => {
  const { profile, updateProfile } = useData();
  const [formData, setFormData] = useState(profile);
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (base64: string) => {
    setFormData(prev => ({...prev, profileImageUrl: base64}));
  };

  const handleImageRemove = () => {
      setFormData(prev => ({...prev, profileImageUrl: ''}));
  };

  const handleCounterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        counters: {
            ...prev.counters,
            [name]: parseInt(value, 10) || 0
        }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    setStatus('Profile updated successfully!');
    window.scrollTo(0, 0);
    setTimeout(() => setStatus(''), 3000);
  };
  
  return (
    <div>
      <h1 className="font-heading text-4xl text-brand-accent uppercase tracking-wider mb-8">Edit Profile</h1>
       {status && <div className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded relative mb-6" role="alert">{status}</div>}
      <form onSubmit={handleSubmit} className="bg-brand-bg-900 p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Display Name" name="displayName" value={formData.displayName} onChange={handleChange} />
            <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Location" name="location" value={formData.location} onChange={handleChange} />
            <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
        </div>
        <InputField label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
        <div>
            <label htmlFor="shortBio" className="block text-sm font-mono text-gray-400 mb-1">Short Bio</label>
            <textarea id="shortBio" name="shortBio" value={formData.shortBio} onChange={handleChange} rows={5} className="w-full bg-white/5 border border-white/20 p-2 text-white outline-none transition focus:ring-2 focus:ring-brand-accent" />
        </div>
        
        <div className="pt-6 border-t border-white/10">
            <h2 className="font-heading text-xl text-white mb-4">Profile Image</h2>
            <InputField
                label="Image URL"
                name="profileImageUrl"
                value={formData.profileImageUrl || ''}
                onChange={handleChange}
                placeholder="Enter an image URL or upload a file below"
            />
            <div className="my-4 text-center text-gray-400 font-mono text-sm">OR</div>
            <ImageUpload
                initialImageUrl={formData.profileImageUrl}
                onImageUpload={handleImageUpload}
                onImageRemove={handleImageRemove}
            />
        </div>

        <h2 className="font-heading text-xl text-white pt-6 border-t border-white/10">Counters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InputField label="Years Experience" name="years" type="number" value={formData.counters.years} onChange={handleCounterChange} />
            <InputField label="Projects Shipped" name="projects" type="number" value={formData.counters.projects} onChange={handleCounterChange} />
            <InputField label="Tools Mastered" name="tools" type="number" value={formData.counters.tools} onChange={handleCounterChange} />
        </div>

        <div className="flex justify-end items-center gap-4 pt-4">
            <Button type="submit" variant="primary">Save Changes</Button>
        </div>
      </form>
    </div>
  );
};

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, ...props}) => (
    <div>
        <label htmlFor={name} className="block text-sm font-mono text-gray-400 mb-1">{label}</label>
        <input id={name} name={name} {...props} className="w-full bg-white/5 border border-white/20 p-2 text-white outline-none transition focus:ring-2 focus:ring-brand-accent" />
    </div>
);

export default AdminProfilePage;
