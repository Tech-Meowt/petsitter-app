'use client';
import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import timer from '../utils/timer';

export default function ClientDashboard() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [firstName, setFirstName] = useState('');

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { data, error } = await supabase
      .from('clients')
      .select('email, first_name')
      .eq('email', user.email);
    if (error) {
      router.push('/client/create-account');
    } else {
      setFirstName(data[0].first_name);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  timer();

  return <div>Welcome, {firstName}</div>;
}
