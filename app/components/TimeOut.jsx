'use client';
import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';

export default function TimeOut() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [time, setTime] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
      if (time == 1) {
        console.log('logging out and redirecting home')
      }
    }
  }, [time, router])

  return (
    <div className='px-4 py-12 sm:px-6 lg:px-20 xl:px-24 flex justify-center'>
      <div className='rounded-md border border-purpleDefault shadow-2xl p-4 w-1/2'>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex-shrink-0 my-4'>
            <ExclamationTriangleIcon
              className='h-12 w-12 text-yellow-400'
              aria-hidden='true'
            />
          </div>
          <div className='ml-3'>
            <p className='font-medium text-red-600'>
              For security reasons, you will be logged out in {time} seconds.
            </p>
          </div>
        </div>
        <div className='flex justify-around my-8'>
          <div>
            <button className='w-[10rem] shadow shadow-2xl font-raleway rounded-md px-3 py-2 text-base font-semibold hover:outline hover:outline-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-purpleDefault hover:bg-purpleDefault hover:text-white border-purpleDefault border-2 hover:border-lavender'>
              Stay logged in
            </button>
          </div>
          <div>
            <button className='w-[10rem] shadow shadow-2xl font-raleway rounded-md px-3 py-2 text-base font-semibold hover:outline hover:outline-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-purpleDefault hover:bg-purpleDefault hover:text-white border-purpleDefault border-2 hover:border-lavender'>
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
