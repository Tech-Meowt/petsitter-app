'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function LinkExpired() {
  const router = useRouter();
  const [time, setTime] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
      if (time == 1) {
        // TO DO add router.push('/sign-up') for the redirect
        console.log('redirect')
      }
    }
  }, [time, router])

  return (
    <div className='text-center my-24'>
      <Image
        src='https://http.cat/401.jpg'
        width={500}
        height={500}
        className='mx-auto mt-6 rounded-3xl'
      />
      <h1 className='mt-8 text-3xl font-bold tracking-tight sm:text-5xl font-lato'>
        Link expired
      </h1>
      <h3 className='mt-6 leading-7 font-lato font-semibold'>
        You'll be redirected in {time} seconds
      </h3>
      <p className='mt-6 text-base leading-7 font-lato font-semibold text-red-600'>
        If you aren't redirected, <Link href='/sign-up'>click here &rarr;</Link>
      </p>
    </div>
  );
}
