'use client';
import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import timer from '../utils/timer';
import AuthorizingSpinner from './AuthorizingSpinner';

export default function ClientDashboard() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { data, error } = await supabase
      .from('clients')
      .select('email, first_name')
      .eq('email', user.email);
      setFirstName(data[0].first_name);
  };

  const loadPage = setTimeout(() => {
    setLoading(false);
  }, 2000);

  useEffect(() => {
    getUser();
  }, []);

  timer();

  if (loading) {
    return <AuthorizingSpinner />;
  }

  return (
    <div>Welcome, {firstName}</div>
  );
}
