import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='max-w-full mx-auto'>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
