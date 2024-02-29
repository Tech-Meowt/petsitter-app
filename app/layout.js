import { PrismicPreview, PrismicNextLink, PrismicNextImage } from '@prismicio/next';
import { repositoryName, createClient } from '@/prismicio';
import { usePathname, useRouter } from 'next/navigation';
import './globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <Footer />
      </body>
    </html>
  );
}

// async function Footer() {
//   const [date, setDate] = useState();
//   const client = createClient();
//   const footer = await client.getSingle('footer');

//   const getYear = () => setDate(new Date().getFullYear());

//   getYear();

//   return (
//     <footer className='font-semilbold'>
//       <div className='max-w-full mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px8'>
//         <nav
//           className='-mx-5 -my-2 flex flex-wrap justify-center'
//           aria-label='Footer'
//         >
//           {footer.data.menu_items.map((item) => {
//             return (
//               <ul className='list-none'>
//                 <li key={JSON.stringify(item)}>
//                   <PrismicNextLink field={item.link} className='no-underline'>
//                     {item.label}
//                   </PrismicNextLink>
//                 </li>
//               </ul>
//             );
//           })}
//         </nav>
//         <div className='flex flex-row items-center justify-center my-6 text-center'>
//           <span className='mr-2 flex flex-row items-center font-logo text-2xl leading-6'>
//             {footer.data.company_name}
//             <PrismicNextImage
//               field={footer.data.company_logo}
//               className='h-20 w-20 ml-4'
//             />
//           </span>
//         </div>
//         <div className='flex justify-center items-center'>
//           <p>
//             Brooklyn, NY |{' '}
//             <a href='mailto:hello@techmeowt.com'>hello@techmeowt.com</a>
//           </p>
//         </div>
//         <p className='text-center mt-2'>

//         </p>
//       </div>
//     </footer>
//   );
// }
