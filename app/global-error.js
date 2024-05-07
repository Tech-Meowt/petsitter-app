'use client'
import Image from 'next/image';
import './globals.css'

export default function GlobalError({ error, reset }) {
  return (
    <html lang='en'>
      <body className='max-w-full mx-auto mt-4 sm:mt-10 lg:mt-20'>
        <title>Error</title>
        <main>
          <div className='text-center my-24'>
            <Image
              src='https://http.cat/500.jpg'
              width={500}
              height={500}
              className='mx-auto mt-6 rounded-3xl'
            />
            <h1 className='mt-8 text-3xl font-bold tracking-tight sm:text-5xl font-lato'>
              Oops!
            </h1>
            <p className='mt-6 text-base leading-7 font-lato font-semibold text-red-600'>
              Something went wrong!
            </p>
            <p
              className='cursor-pointer mt-6 text-base leading-7 font-lato font-semibold text-red-600'
            onClick={() => reset()}
            >
              Try again
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
