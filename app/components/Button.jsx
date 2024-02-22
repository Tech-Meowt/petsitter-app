import { PrismicNextLink } from '@prismicio/next';

export default function Button({ label, link, buttonAlign, buttonColor }) {
  return (
    <button
      className={`shadow shadow-2xl text-2xl font-raleway rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:-translate-y-4 hover:-translate-x-2 hover:outline hover:outline-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${buttonColor}`}
    >
      <PrismicNextLink field={link}>{label}</PrismicNextLink>
    </button>
  );
}
