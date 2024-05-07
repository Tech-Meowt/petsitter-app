'use client';
import { useState, useEffect } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import AuthorizingSpinner from './AuthorizingSpinner';

const initialState = {
  first_name: '',
  last_name: '',
  address_1: '',
  address_2: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  phone: '',
};

export default function ProfileForm() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [values, setValues] = useState(initialState);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState();
  const [loading, setLoading] = useState(true);
  
  // get the current user's email address from the auth.users table and automatically set the value of the email input field
  const getEmail = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      const loadingTimer = setTimeout(() => {
        router.push('/link-expired');
      }, 2000);
    } else {
      const loadingTimer = setTimeout(() => {
        setLoading(false);
        setEmail(user.email);
        setValues({ ...values, email: user.email });
      }, 2000);
    }
  };

  useEffect(() => {
    getEmail();
  }, [time, router]);


  // function to call in onChange on phone input to allow pre-formatted and validated value
  const phoneNumberAutoFormat = (phoneNumber) => {
    const number = phoneNumber.trim().replace(/[^0-9]/g, '');
    if (number.length < 4) return number;
    if (number.length < 7) return number.replace(/(\d{3})(\d{1})/, '$1-$2');
    if (number.length < 11)
      return number.replace(/(\d{3})(\d{3})(\d{1})/, '$1-$2-$3');
    return number.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  };

  // add the client's profile information to the public.clients table called in onSubmit
  const addClientRecord = async () => {
    const {
      first_name,
      last_name,
      address_1,
      address_2,
      city,
      state,
      zip,
      phone,
      email,
    } = values;

    const { error } = await supabase.from('clients').insert({
      first_name,
      last_name,
      phone,
      address_1,
      address_2,
      city,
      state,
      zip,
      email,
    });
  };

  // sets all form data
  const handleChange = (e) => {
    const targetValue = phoneNumberAutoFormat(e.target.value);
    setValues({ ...values, [e.target.name]: e.target.value });
    if (e.target.name === 'phone') {
      setPhone(targetValue);
    }
  };

  // function to call onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    addClientRecord();
    router.push('/client/dashboard');
  };

  if (loading) {
    return <AuthorizingSpinner />;
  }

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
                  value={phone}
                  id='phone'
                  name='phone'
                  type='tel'
                  required
                  autoComplete='tel-national'
                  pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                  maxLength='12'
                  onChange={handleChange}
                  className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purpleDefault sm:leading-6'
                />
              </div>
            </div>
            {/* email */}
            <div className='mt-2 mr-10'>
              <label
                htmlFor='email'
                className='block leading-6 text-red-600 font-semibold'
              >
                Email address cannot be changed
              </label>
              <div className='mt-2'>
                <input
                  value={values.email}
                  id='email'
                  name='email'
                  type='email'
                  disabled
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
