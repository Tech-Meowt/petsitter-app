'use client'
import { createClient } from '@/prismicio';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import { usePathname, useRouter } from 'next/navigation';

export default async function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const client = createClient();
  const nav = await client.getSingle('navigation_menu');

  const inactive = 'hover:border-purpleDefault hover:border-b-2';
  const active = 'border-lavender border-b-2';



  return (
    <div className='flex justify-center items-center font-semibold max-w-full mx-auto py-2'>
      <div className='container flex justify-between'>
        <span className='text-2xl leading-6 font-logo flex flex-row items-center'>
          {nav.data.company_name}
          <PrismicNextImage
            field={nav.data.company_logo}
            className='h-20 w-20 ml-4'
          />
        </span>
        <ul className='flex items-center text-2xl'>
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
        </ul>
      </div>
    </div>
  );
}
