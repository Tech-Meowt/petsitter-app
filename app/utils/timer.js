'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function timer() {
  const router = useRouter();
  const [time, setTime] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => time - 1);
    }, 3600000);
    return () => {
      clearInterval(timer);
      if (time == 1) {
        router.push('/auth/time-out');
      }
    };
  }, [time, router]);
}
