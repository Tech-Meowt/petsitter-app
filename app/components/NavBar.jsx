import { createClient } from '@/prismicio';
import NavBarContent from './NavBarContent';

export default async function NavBar() {
  const client = createClient();
  const nav = await client.getSingle('navigation_menu');

  return (
    <NavBarContent nav={nav} />
  );
}
