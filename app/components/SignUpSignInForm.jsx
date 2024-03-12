'use client'
import { usePathname, useRouter } from 'next/navigation';
import { Auth } from '@supabase/auth-ui-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import Link from 'next/link';
import img from '../../public/signup_signin.jpeg';
import logo from '../../public/logo.png'
import SignUpSignInButton from './SignUpSignInButton';

export default function SignUpSignInForm() {
  const supabase = createClientComponentClient();
  const pathname = usePathname();
  const router = useRouter();
  
  return (
    <div className='flex min-h-full flex-1'>
      <div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <Image
              src={logo}
              loading='lazy'
              alt='cat logo'
              className='h-20 w-auto'
            />
            <h2 className='mt-8 font-bold leading-9 tracking-tight'>
              {pathname === '/sign-up' ? 'Sign up for an account' : 'Log in'}
            </h2>
            {pathname === '/sign-up' && (
              <p className='mt-2 text-base leading-6 font-semibold text-red-600'>
                Already have an account?{' '}
                <Link
                  href='/log-in'
                  className='no-underline hover:text-purpleDefault'
                >
                  Log in here
                </Link>
              </p>
            )}
          </div>
          <div className='mt-10'>
            <div>
              <form>
                {/* first name */}
                {pathname === '/sign-up' && (
                  <div>
                    <label htmlFor='firstName' className='block leading-6'>
                      First name
                    </label>
                    <div className='mt-2'>
                      <input
                        id='firstName'
                        name='firstName'
                        type='text'
                        required
                        className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                      />
                    </div>
                  </div>
                )}
                {/* last name */}
                {pathname === '/sign-up' && (
                  <div className='mt-2'>
                    <label htmlFor='lastName' className='block leading-6'>
                      Last name
                    </label>
                    <div className='mt-2'>
                      <input
                        id='lastName'
                        name='lastName'
                        type='text'
                        required
                        className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                      />
                    </div>
                  </div>
                )}
                {/* email address */}
                <div className='mt-2'>
                  <label htmlFor='email' className='block leading-6'>
                    Email address
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                    />
                  </div>
                </div>
                {/* password */}
                <div className='mt-2'>
                  <label
                    htmlFor='password'
                    className='block font-medium leading-6'
                  >
                    Password
                  </label>
                  <div className='mt-2'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='password'
                      required
                      className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                    />
                  </div>
                  {/* forgot password */}
                  {pathname === '/log-in' && (
                    <div className='mt-2'>
                      <Link
                        href='/'
                        className='text-base text-red-500 font-semibold no-underline hover:text-purpleDefault'
                      >
                        Forgot password?
                      </Link>
                    </div>
                  )}
                </div>
                {/* submit button */}
                <div className='mt-10 flex'>
                  <SignUpSignInButton
                    buttonText={pathname === '/sign-up' ? 'Sign up' : 'Log in'}
                    buttonWidth='w-full'
                    type='submit'
                  />
                </div>
              </form>
            </div>
            {/* end of form */}
          </div>
        </div>
      </div>
      <div className='relative hidden w-0 flex-1 lg:flex px-4 py-12 sm:px-6 lg:px-20 xl:px-24'>
        <Image
          src={img}
          loading='lazy'
          alt='cat wearing bandana'
          className='rounded-3xl object-cover'
        />
      </div>
    </div>
  );
}
