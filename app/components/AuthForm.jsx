'use client'
import { Auth } from '@supabase/auth-ui-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthForm() {
  const pathname = usePathname();
  const supabase = createClientComponentClient();

  return (
    <div className='flex min-h-full justify-center'>
      <div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <h2 className='mt-8 font-bold leading-9 tracking-tight'>
              {pathname === '/sign-up'
                ? 'Sign up for an account'
                : 'Log into your account'}
            </h2>
            {pathname === '/log-in' && (
              <p className='mt-2 text-center text-base leading-6 font-semibold text-red-600'>
                Don't have an account?{' '}
                <Link
                  href='/sign-up'
                  className='no-underline hover:text-purpleDefault'
                >
                  Sign up here
                </Link>
              </p>
            )}
            {pathname === '/sign-up' && (
              <p className='mt-2 text-center text-base leading-6 font-semibold text-red-600'>
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
            {/* TODO change redirect url */}
            {pathname === '/sign-up' && (
              <Auth
                supabaseClient={supabase}
                view='magic_link'
                showLinks={false}
                providers={[]}
                // redirectTo='http://localhost:3000/auth/callback'
                redirectTo='http://localhost:3000/client/create-account'
                appearance={{
                  extend: false,
                  className: {
                    button:
                      'mt-10 shadow shadow-2xl font-raleway rounded-md px-3 py-2 text-base font-semibold hover:outline hover:outline-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-purpleDefault hover:bg-purpleDefault hover:text-white border-purpleDefault border-2 hover:border-lavender w-full',
                    input:
                      'mt-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6',
                    label: 'font-semibold',
                  },
                }}
                localization={{
                  variables: {
                    magic_link: {
                      email_input_label: '',
                      email_input_placeholder: 'Email',
                      button_label: 'Confirm email',
                      loading_button_label: 'Sending confirmation email',
                      confirmation_text:
                        'Check your email and click on the confirmation link to finish creating your account',
                    },
                  },
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
