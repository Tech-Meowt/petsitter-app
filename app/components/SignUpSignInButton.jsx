import Link from 'next/link';

export default function SignUpSignInButton({ buttonText, buttonLink }) {
  return (
      <button className='shadow shadow-2xl font-raleway rounded-md px-3 py-2 text-base font-semibold hover:outline hover:outline-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-purpleDefault hover:bg-purpleDefault hover:text-white border-purpleDefault border-2 hover:border-lavender'>
        {buttonText}
        <Link href={`${buttonLink}`} />
      </button>
  );
}
