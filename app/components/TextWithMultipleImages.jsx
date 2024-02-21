import { createClient } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

export default async function TextWithMultipleImages({ slice }) {
  const client = createClient();
  const page = await client.getAllByType('homepage');
  console.log(page)

  return (
    <>
      <ul
        role='list'
        className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg: grid-cols-3'
      >
        {page.data.slices.image.map((item) => (
          <li key={item.image}>
            <PrismicNextImage field={item.image} />
          </li>
        ))}
      </ul>
    </>
  );
}
