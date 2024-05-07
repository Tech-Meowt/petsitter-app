'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className='text-center my-24'>
      <Image
        src='https://http.cat/404.jpg'
        width={500}
        height={500}
        className='mx-auto mt-6 rounded-3xl'
      />
      <h1 className='mt-8 text-3xl font-bold tracking-tight sm:text-5xl font-lato'>
        Oops!
      </h1>
      <p className='mt-6 text-base leading-7 font-lato font-semibold text-red-600'>
        We can't find the page you're looking for.
      </p>
      <p
        onClick={() => router.back()}
        className='cursor-pointer mt-6 text-base leading-7 font-lato font-semibold text-red-600'>
        &larr; Back
      </p>
    </div>
  );
}
