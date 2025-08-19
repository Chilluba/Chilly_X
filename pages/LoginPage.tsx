
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const LoginPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = auth.login(password);
    if (success) {
      navigate('/admin');
    } else {
      setError('Incorrect password. Try "admin".');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <Card className="max-w-md w-full">
        <h1 className="font-heading text-3xl text-brand-accent uppercase tracking-wider mb-6 text-center">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-mono text-gray-400 mb-2">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-white/5 border border-white/20 p-3 text-white focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition"
              aria-describedby="password-error"
            />
          </div>
          {error && <p id="password-error" className="text-brand-accent text-sm">{error}</p>}
          <Button type="submit" variant="primary" className="w-full">
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
