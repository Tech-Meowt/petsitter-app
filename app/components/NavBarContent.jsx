'use client';
import { useState, useEffect } from 'react';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import { usePathname, useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import SignUpSignInButton from './SignUpSignInButton';

export default function NavBarContent({ nav }) {
  const supabase = createClientComponentClient();
  const pathname = usePathname();
  const router = useRouter();
  const [showNavBar, setShowNavBar] = useState(false);

  const inactive =
    'border-b-2 border-transparent hover:border-purpleDefault hover:border-b-2';
  const active = 'border-lavender border-b-2';

  useEffect(() => {
    if (pathname === '/') {
      setShowNavBar(true);
    } else {
      const showNav = setTimeout(() => {
        setShowNavBar(true);
      }, 2000);
    }
  }, [])
  
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    router.push('/');
  };

  // {
  //   nav.data.menu_items.map((item) => {
  //     return (
  //    console.log(JSON.stringify(item.link.url))
  //     );
  //   });
  // }

  const staticLinks = [
    {
      label: 'Dashboard',
      href: '/client/dashboard',
    },
    {
      label: 'Profile',
      href: '/client/profile',
    },
  ];

  return (
    <nav
      className={`${showNavBar ? 'flex' : 'hidden'} justify-center items-center max-w-full mx-auto py-2`}
    >
      <div className='container flex justify-between'>
        <span className='text-2xl leading-6 font-logo flex flex-row items-center'>
          {nav.data.company_name}
          <PrismicNextImage
            field={nav.data.company_logo}
            priority='false'
            className='h-20 w-20 ml-4'
          />
        </span>
        {pathname.includes('/client') && (
          <div className='flex flex-row items-center space-x-6 text-lg'>
            {staticLinks.map((link) => {
              return (
                <li
                  key={link.href}
                  className={`list-none ${pathname === link.href ? active : inactive}`}
                >
                  <Link href={link.href} className='no-underline'>
                    {link.label}
                  </Link>
                </li>
              );
            })}
            {nav.data.menu_items.map((item) => {
              return (
                <li
                  key={JSON.stringify(item)}
                  className={`list-none ${router.pathname === JSON.stringify(item.link) ? active : inactive}`}
                >
                  <PrismicNextLink field={item.link} className='no-underline'>
                    {item.label}
                  </PrismicNextLink>
                </li>
              );
            })}
            <form
              action='/auth/logout'
              method='post'
              className='cursor-pointer border-b-2 border-transparent flex flex row items-center'
            >
              <ArrowLeftEndOnRectangleIcon className='h-5 w-5 mr-1' />
              <button type='submit'>Log the F out</button>
            </form>
          </div>
        )}
        {pathname === '/' && (
          <div className='flex items-center'>
            <div className='mr-4'>
              <SignUpSignInButton
                buttonText={'Sign up'}
                buttonLink={'/sign-up'}
              />
            </div>
            <div>
              <SignUpSignInButton buttonText={'Login'} buttonLink={'/log-in'} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
