'use client';
import { useState } from 'react';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import { usePathname, useRouter } from 'next/navigation';
import SignUpSignInButton from './SignUpSignInButton';

export default function NavBarContent({ nav }) {
  const pathname = usePathname();
  const router = useRouter();
  const [showNavBar, setShowNavBar] = useState(false);

  const inactive = 'hover:border-purpleDefault hover:border-b-2';
  const active = 'border-lavender border-b-2';

  const showNav = setTimeout(() => {
    setShowNavBar(true);
  }, 2000)

  return (
    <nav className={`${showNavBar ? 'flex' : 'hidden'} justify-center items-center font-semibold max-w-full mx-auto py-2`}>
      <div className='container flex justify-between'>
          <span className='text-2xl leading-6 font-logo flex flex-row items-center'>
            {nav.data.company_name}
            <PrismicNextImage
              field={nav.data.company_logo}
              priority='false'
              className='h-20 w-20 ml-4'
            />
          </span>
        {pathname !== '/' ||
          pathname !== '/sign-up' ||
          pathname !== '/log-in' && (
            <nav className='flex items-center text-xl'>
              {nav.data.menu_items.map((item) => {
                return (
                  <li
                    key={JSON.stringify(item)}
                    className={`list-none ${(router.pathname = JSON.stringify(item.link) ? active : inactive)}`}
                  >
                    <PrismicNextLink field={item.link} className='no-underline'>
                      {item.label}
                    </PrismicNextLink>
                  </li>
                );
              })}
            </nav>
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
