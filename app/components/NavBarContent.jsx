'use client'
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import { usePathname, useRouter } from 'next/navigation';
import SignUpSignInButton from './SignUpSignInButton';

export default function NavBarContent({ nav }) {
  const pathname = usePathname();
  const router = useRouter();

  const inactive = 'hover:border-purpleDefault hover:border-b-2';
  const active = 'border-lavender border-b-2';

  return (
    <div className='flex justify-center items-center font-semibold max-w-full mx-auto py-2'>
      <div className='container flex justify-between'>
        <span className='text-2xl leading-6 font-logo flex flex-row items-center'>
          {nav.data.company_name}
          <PrismicNextImage
            field={nav.data.company_logo}
            loading='lazy'
            alt=''
            className='h-20 w-20 ml-4'
          />
        </span>
        {/* <ul className='flex items-center text-xl'>
          {nav.data.menu_items.map((item) => {
            return (
              <li key={JSON.stringify(item)}>
                <PrismicNextLink
                  field={item.link}
                  className={`no-underline ${router.pathname = item.link ? active : inactive}`}
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul> */}
        <div className='flex items-center'>
          <div className='mr-4'>
            <SignUpSignInButton buttonText={'Sign up'} buttonLink={'/sign-up'}/>
          </div>
          <div>
            <SignUpSignInButton buttonText={'Log in'} buttonLink={'log-in'}/>
          </div>
        </div>
      </div>
    </div>
  );
}
