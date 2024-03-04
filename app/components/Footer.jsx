import { createClient } from '@/prismicio';
import FooterContent from './FooterContent';

export default async function Footer() {
  const client = createClient();
  const footer = await client.getSingle('page_footer');

  return (
    <FooterContent footer={footer} />
  )
}
