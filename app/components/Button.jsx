import { PrismicNextLink } from '@prismicio/next';

export default function Button({ label, link, buttonColor }) {
  return (
    <button
      className={`shadow shadow-2xl text-xl font-raleway rounded-md px-3.5 py-2.5 text-sm font-semibold hover:outline hover:outline-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${buttonColor}`}
    >
      <PrismicNextLink field={link} className='no-underline'>{label}</PrismicNextLink>
    </button>
  );
}
