'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import LoggedInNavbar from '@/components/LoggedInNavbar';
import AllInbox from '@/components/AllInbox';

const GoogleLogin: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get('token');
    console.log(token)
    if (token) {
      // Store the token in a cookie
      document.cookie = `token=${token}; path=/; max-age=${30 * 24 * 60 * 60}`;
      // Redirect to the home page or any other page
      router.push('/');
    } else {
      console.error('Token not found in the URL');
    }
  }, [router]);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <h1 className='text-2xl font-semibold text-white'>Authenticating...</h1>
    </main>
  );
};

export default GoogleLogin;
