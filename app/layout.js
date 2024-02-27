import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import './globals.css';
import NavBar from './components/NavBar';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
