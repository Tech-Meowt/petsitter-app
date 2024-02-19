import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';
import { SliceZone } from '@prismicio/react';
// import { components } from '@/slices';

const queryHomepage = () => {
  const client = createClient();
  return client.getSingle('homepage');
};

export async function generateMetadata() {
  const page = await queryHomepage();

  return {
    openGraph: {
      title: page.data.meta_title,
      // description: prismic.asText(page.data.meta_description),
      // in the tutorial, the description field is just a plain text field, so prismic.asText() throws an error. this should work if it's a rich text field.
      description: page.data.meta_description,
      images: prismic.asImageSrc(page.data.meta_image),
    },
  };
}

export default async function Home() {
  const page = await queryHomepage();

  return (
    <main>
      <div>Hello world</div>
    </main>
  );
}
