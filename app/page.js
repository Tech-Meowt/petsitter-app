import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const queryHomepage = () => {
  const client = createClient();
  return client.getSingle('homepage');
};

export async function generateMetadata() {
  const page = await queryHomepage();

  return {
    openGraph: {
      title: page.data.meta_title,
      description: page.data.meta_description,
      images: prismic.asImageSrc(page.data.meta_image),
    },
  };
}

export default async function Home() {
  const page = await queryHomepage();

  return (
    <>
      <title>{page.data.page_title}</title>
      <main>
        <NavBar />
        <SliceZone slices={page.data.slices} components={components} />
        <Footer />
      </main>
    </>
  );
}
