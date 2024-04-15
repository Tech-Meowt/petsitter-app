'use client'
import { useEffect } from 'react';
import Link from 'next/link';

export default function NewClientLoggedOut() {
  return (
    <div className='px-4 py-12 sm:px-6 lg:px-20 xl:px-24 text-center'>
      <h2>You've been logged out due to inactivity</h2>
      <p>
        <Link href='/sign-up'>Click here</Link>{' '}to sign up for an account again
      </p>
    </div>
  );
}
