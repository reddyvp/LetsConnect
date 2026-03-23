import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';

export function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function update(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.email.trim()) next.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.password) next.password = 'Password is required';
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    // Mock auth — navigate to app
    navigate('/');
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-10">
      {/* Logo */}
      <div className="flex flex-col items-center gap-1 mb-8">
        <h1 className="text-3xl font-black tracking-tight">
          <span className="text-white">Lets</span><span className="text-[#E50914]">Connect</span>
        </h1>
        <div className="w-8 h-0.5 bg-[#E50914] rounded-full" />
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-[#141414] rounded-2xl border border-white/10 p-8 shadow-2xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-white text-2xl font-bold mb-1">Welcome back</h1>
          <p className="text-gray-400 text-sm">Sign in to continue your story.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm mb-1.5 block">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={e => update('email', e.target.value)}
                className="w-full bg-[#1f1f1f] text-white placeholder-gray-600 pl-10 pr-4 py-3 rounded-xl border border-white/10 focus:border-[#E50914] focus:outline-none transition-colors text-sm"
              />
            </div>
            {errors.email && <p className="text-[#E50914] text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-gray-300 text-sm">Password</label>
              <span className="text-[#E50914] text-xs cursor-pointer hover:underline">Forgot password?</span>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Your password"
                value={form.password}
                onChange={e => update('password', e.target.value)}
                className="w-full bg-[#1f1f1f] text-white placeholder-gray-600 pl-10 pr-10 py-3 rounded-xl border border-white/10 focus:border-[#E50914] focus:outline-none transition-colors text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(p => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && <p className="text-[#E50914] text-xs mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#E50914] hover:bg-[#c4070f] text-white font-semibold py-3 rounded-xl transition-colors mt-2"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-gray-600 text-xs">OR</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 bg-[#1f1f1f] hover:bg-[#2a2a2a] border border-white/10 text-white py-3 rounded-xl transition-colors text-sm">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center gap-3 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 text-white py-3 rounded-xl transition-colors text-sm">
            <svg className="w-4 h-4" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Continue with Facebook
          </button>
        </div>

        {/* Sign up link */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#E50914] hover:underline font-medium">
            Create one
          </Link>
        </p>
      </div>

      {/* Footer */}
      <p className="text-gray-700 text-xs mt-8 text-center">
        © 2025 LetsConnect · All rights reserved
      </p>
    </div>
  );
}
