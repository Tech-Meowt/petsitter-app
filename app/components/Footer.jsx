import { useState, useEffect } from 'react';
import { createClient } from '@/prismicio';
import { PrismicNextLink, PrismicNextImage } from '@prismicio/next';

export default async function Footer() {
  const [date, setDate] = useState();
  const client = createClient();
  const footer = await client.getSingle('footer')

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <footer className='font-semilbold'>
      <div className='max-w-full mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px8'>
        <nav className='-mx-5 -my-2 flex flex-wrap justify-center' aria-label='Footer'>
          {footer.data.menu_items.map((item) => {
            return (
              <li key={JSON.stringify(item)}>
                <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
                
    </li>
  )
})}
        </nav>

      </div>

    </footer>
  )
}
