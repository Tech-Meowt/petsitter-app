'use client'
import { useState } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react';
import { usePathname } from 'next/navigation';
import { Auth } from '@supabase/auth-ui-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import Link from 'next/link';
import img from '../../public/signup_signin.jpeg';
import SignUpSignInButton from './SignUpSignInButton';

const initialState = {
  first_name: '',
  last_name: '',
  phone: '',
  address_1: '',
  address_2: '',
  city: '',
  state: '',
  zip: '',
  email: '',
}

export default function SignUpForm() {
  const supabase = createClientComponentClient();
  const pathname = usePathname();
  const [values, setValues] = useState(initialState)

  // const checkEmail = async () => {
  //   const { email } = values;
    
  //   const {
  //     data: { user },
  //   } = await supabase.auth.getUser();
    
  //   if (email !== user.email) {
  //     console.log('does not match')
  //   }
  // }
  
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values)

  }

  return (
    <div className='space-y-12 px-64'>
      <div className='flex flex-col justify-center'>
        <div>
          <h2 className='mt-8 font-bold leading-9 tracking-tight text-center'>
            Sign up for an account
          </h2>
          <p className='mt-2 text-base leading-6 font-semibold text-red-600 text-center'>
            Already have an account?{' '}
            <Link
              href='/log-in'
              className='no-underline hover:text-purpleDefault'
            >
              Log in here
            </Link>
          </p>
        </div>
        <div className='mt-10 w-full'>
          <form className='grid grid-cols-2 justify-center'>
            {/* first name */}
            <div className='mr-10'>
              <label htmlFor='first_name' className='block leading-6'>
                First name
              </label>
              <div className='mt-2'>
                <input
                  value={values.first_name}
                  id='first_name'
                  name='first_name'
                  type='text'
                  required
                  autoComplete='given-name'
                  onChange={handleChange}
                  className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                />
              </div>
            </div>
            {/* last name */}
            <div>
              <label htmlFor='last_name' className='block leading-6'>
                Last name
              </label>
              <div className='mt-2'>
                <input
                  value={values.last_name}
                  id='last_name'
                  name='last_name'
                  type='text'
                  required
                  autoComplete='family-name'
                  onChange={handleChange}
                  className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                />
              </div>
            </div>
            {/* address line 1 */}
            <div className='mt-2 mr-10'>
              <label htmlFor='address_1' className='block leading-6'>
                Address
              </label>
              <div className='mt-2'>
                <AddressAutofill
                  accessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                >
                  <input
                    value={values.address_1}
                    id='address_1'
                    name='address_1'
                    type='text'
                    required
                    autoComplete='address-line1'
                    onChange={handleChange}
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
                  value={values.address_2}
                  id='address_2'
                  name='address_2'
                  type='text'
                  autoComplete='address-line2'
                  onChange={handleChange}
                  className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                />
              </div>
            </div>
            {/* city */}
            <div className='mt-2 mr-10'>
              <label htmlFor='city' className='block leading-6'>
                City
              </label>
              <div className='mt-2'>
                <input
                  value={values.city}
                  id='city'
                  name='city'
                  type='text'
                  required
                  autoComplete='address-level2'
                  onChange={handleChange}
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
                  value={values.state}
                  id='state'
                  name='state'
                  type='text'
                  required
                  autoComplete='address-level1'
                  onChange={handleChange}
                  className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                />
              </div>
            </div>
            {/* zip */}
            <div className='mt-2 mr-10'>
              <label htmlFor='zip' className='block leading-6'>
                Zip code
              </label>
              <div className='mt-2'>
                <input
                  value={values.zip}
                  id='zip'
                  name='zip'
                  type='text'
                  required
                  autoComplete='postal-code'
                  onChange={handleChange}
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
                  value={values.phone}
                  id='phone'
                  name='phone'
                  type='text'
                  required
                  autoComplete='tel-national'
                  onChange={handleChange}
                  className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                />
              </div>
            </div>
            {/* confirm that emails match and send magic link */}
            {/* <div className='mt-2 mr-10'>
              <Auth
                supabaseClient={supabase}
                view='magic_link'
                showLinks={false}
                providers={[]}
                redirectTo='http://localhost:3000/auth/callback'
                appearance={{
                  extend: false,
                  className: {
                    button:
                      'mt-10 shadow shadow-2xl font-raleway rounded-md px-3 py-2 text-base font-semibold hover:outline hover:outline-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-purpleDefault hover:bg-purpleDefault hover:text-white border-purpleDefault border-2 hover:border-lavender w-full',
                    input:
                      'mt-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6',
                  },
                }}
                localization={{
                  variables: {
                    magic_link: {
                      email_input_label: 'Email address',
                      email_input_placeholder: '',
                      button_label: 'Sign up',
                      loading_button_label: 'Creating account',
                    },
                  },
                }}
              />
            </div> */}
            {/* email */}
            <div className='mt-2'>
              <label htmlFor='email' className='block leading-6'>
                Confirm email address
              </label>
              <div className='mt-2'>
                <input
                  value={values.email}
                  id='email'
                  name='email'
                  type='email'
                  required
                  autoComplete='email'
                  onChange={handleChange}
                  className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}