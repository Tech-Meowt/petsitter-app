'use client'
import { AddressAutofill } from '@mapbox/search-js-react'
import Image from 'next/image';
import Link from 'next/link';
import img from '../../public/signup_signin.jpeg';
import SignUpSignInButton from './SignUpSignInButton';


export default function SignUpForm() {
  return (
    <div className='flex min-h-full flex-1'>
      <div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <h2 className='mt-8 font-bold leading-9 tracking-tight'>
              Sign up for an account
            </h2>
            <p className='mt-2 text-base leading-6 font-semibold text-red-600'>
              Already have an account?{' '}
              <Link
                href='/log-in'
                className='no-underline hover:text-purpleDefault'
              >
                Log in here
              </Link>
            </p>
          </div>
          <div className='mt-10'>
            <form>
              {/* first name */}
              <div>
                <label htmlFor='first_name' className='block leading-6'>
                  First name
                </label>
                <div className='mt-2'>
                  <input
                    id='first_name'
                    name='first_name'
                    type='text'
                    required
                    autoComplete='given-name'
                    className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                  />
                </div>
              </div>
              {/* last name */}
              <div className='mt-2'>
                <label htmlFor='last_name' className='block leading-6'>
                  Last name
                </label>
                <div className='mt-2'>
                  <input
                    id='last_name'
                    name='last_name'
                    type='text'
                    required
                    autoComplete='family-name'
                    className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                  />
                </div>
              </div>
              {/* email */}
              <div className='mt-2'>
                <label htmlFor='email' className='block leading-6'>
                  Email address
                </label>
                <div className='mt-2'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    autoComplete='email'
                    className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                  />
                </div>
              </div>
              {/* phone */}
              <div className='mt-2'>
                <label htmlFor='phone' className='block leading-6'>
                  Phone number
                </label>
                <div className='mt-2'>
                  <input
                    id='phone'
                    name='phone'
                    type='text'
                    required
                    autoComplete='tel-national'
                    className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                  />
                </div>
              </div>
              {/* address line 1 */}
              <div className='mt-2'>
                <label htmlFor='address_1' className='block leading-6'>
                  Address
                </label>
                <div className='mt-2'>
                  <AddressAutofill
                    accessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                  >
                    <input
                      id='address_1'
                      name='address_1'
                      type='text'
                      required
                      autoComplete='address-line1'
                      className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                    />
                  </AddressAutofill>
                </div>
              </div>
              <div className='mt-2'>
                <label htmlFor='address_2' className='block leading-6'>
                  Apt/Unit (optional)
                </label>
                <div className='mt-2'>
                  <input
                    id='address_2'
                    name='address_2'
                    type='text'
                    autoComplete='address-line2'
                    className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                  />
                </div>
              </div>
              {/* city */}
              <div className='mt-2'>
                <label htmlFor='city' className='block leading-6'>
                  City
                </label>
                <div className='mt-2'>
                  <input
                    id='city'
                    name='city'
                    type='text'
                    required
                    autoComplete='address-level2'
                    className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                  />
                </div>
              </div>
              {/* state */}
              <div className='mt-2'>
                <label htmlFor='state' className='block leading-6'>
                  State
                </label>
                <div className='mt-2'>
                  <input
                    id='state'
                    name='state'
                    type='text'
                    required
                    autoComplete='address-level1'
                    className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                  />
                </div>
              </div>
              {/* zip */}
              <div className='mt-2'>
                <label htmlFor='zip' className='block leading-6'>
                  Zip code
                </label>
                <div className='mt-2'>
                  <input
                    id='zip'
                    name='zip'
                    type='text'
                    required
                    autoComplete='postal-code'
                    className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
