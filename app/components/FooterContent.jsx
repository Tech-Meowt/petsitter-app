'use client'
import { useState, useEffect } from 'react';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function FooterContent({ footer }) {
  const router = useRouter();
  const pathname = usePathname();
  const [date, setDate] = useState();
  const [showFooter, setShowFooter] = useState(false);

  const getYear = () => setDate(new Date().getFullYear());

  const showFoot = setTimeout(() => {
    setShowFooter(true);
  }, 2000);

  useEffect(() => {
    getYear();
  }, []);

  if (pathname === '/sign-up' || pathname === '/log-in' || pathname === '/client/confirm-email' || pathname.includes('/create-account')) {
    return ''
  }

  return (
    <footer className={`${showFooter ? 'block' : 'hidden'}`}>
          <div className='max-w-full mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px8'>
            <nav
              className='-mx-5 -my-2 flex flex-wrap justify-center'
              aria-label='Footer'
            >
              {footer.data.footer_items.map((item) => {
                return (
                  <ul className='list-none' key={JSON.stringify(item)}>
                    <li key={JSON.stringify(item)}>
                      <PrismicNextLink
                        field={item.link}
                        className='no-underline'
                      >
                        {item.label}
                      </PrismicNextLink>
                    </li>
                  </ul>
                );
              })}
            </nav>
            <div className='flex flex-row items-center justify-center my-2 text-center'>
              <span className='mr-2 flex flex-row items-center font-logo text-2xl leading-6'>
                {footer.data.company_name}
              </span>
            </div>
            <div className='flex justify-center items-center'>
              <p>
                {footer.data.company_city}, {footer.data.company_state} |{' '}
                <Link
                  href={`mailto:${footer.data.company_contact_email}`}
                  className='no-underline'
                >
                  {footer.data.company_contact_email} |{' '}
                </Link>
                <Link
                  href={`tel:${footer.data.company_phone_number}`}
                  className='no-underline'
                >
                  {footer.data.company_phone_number}
                </Link>
              </p>
            </div>
            <p className='text-center'>
              &copy; {date} {footer.data.company_name}. All rights reserved.
            </p>
            <p className='text-sm font-semibold text-center'>
              Website created and maintained by{' '}
              <Link href='https://www.techmeowt.com' className='no-underline'>
                Tech Meowt, LLC
              </Link>
            </p>
          </div>
    </footer>
  );
}
