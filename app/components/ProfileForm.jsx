'use client';
import { useState } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react';
import Image from 'next/image';
import Link from 'next/link';
import img from '../../public/signup_signin.jpeg';
import SignUpSignInButton from './SignUpSignInButton';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

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
};

export default function ProfileForm() {
  const [values, setValues] = useState(initialState);
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState('');
  const [formatted, setFormatted] = useState('');

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setEmail(user.email);
  };
  getUser();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className='space-y-12 px-64'>
      <div className='flex flex-col justify-center'>
        <div>
          <h2 className='mt-8 font-bold leading-9 tracking-tight text-center'>
            Finish creating your account
          </h2>
        </div>
        <div className='mt-10 w-full'>
          <form
            className='grid grid-cols-2 justify-center'
            onSubmit={handleSubmit}
          >
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
                  type='tel'
                  required
                  autoComplete='tel-national'
                  maxLength='10'
                  onChange={handleChange}
                  className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                />
              </div>
            </div>
            {/* email */}
            <div className='mt-2 mr-10'>
              <label htmlFor='email' className='block leading-6 text-red-600'>
                Email address cannot be changed
              </label>
              <div className='mt-2'>
                <input
                  defaultValue={email}
                  id='email'
                  name='email'
                  type='email'
                  readOnly={true}
                  className='cursor-not-allowed block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6 text-red-600'
                />
              </div>
              <div className='mt-10'>
                <button
                  className='w-full shadow shadow-2xl font-raleway rounded-md px-3 py-2 text-base font-semibold hover:outline hover:outline-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-purpleDefault hover:bg-purpleDefault hover:text-white border-purpleDefault border-2 hover:border-lavender'
                  type='submit'
                >
                  Create account
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
