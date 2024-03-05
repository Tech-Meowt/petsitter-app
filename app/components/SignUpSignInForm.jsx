'use client'
import Image from 'next/image';
import Link from 'next/link';
import img from '../../public/signup_signin.jpeg';
import logo from '../../public/logo.png'
import SignUpSignInButton from './SignUpSignInButton';

export default function SignUpSignInForm() {
  return (
    <div className='flex min-h-full flex-1'>
      <div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
        <div className='mx-auto w-full max-w-sm lg:w-96'>
          <div>
            <Image
              src={logo}
              loading='lazy'
              alt='cat logo'
              className='h-10 w-auto'
            />
            <h2 className='mt-8 text-2xl font-bold leading-9 tracking-tight'>
              Sign in to your account
            </h2>
            <p className='mt-2 text-base leading-6 font-semibold text-red-600'>
              Don't have an account?{' '}
              <Link href='/' className='no-underline hover:text-purpleDefault'>
                Sign up here
              </Link>
            </p>
          </div>
          <div className='mt-10'>
            <div>
              <form>
                {/* email address */}
                <div>
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
                  <div className='mt-2'>
                    <Link
                      href='/'
                      className='text-base text-red-500 font-semibold no-underline hover:text-purpleDefault'
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                {/* submit button */}
                <div className='mt-2 flex'>
                  <SignUpSignInButton
                    buttonText='Sign in'
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
    </div>
  );
}
