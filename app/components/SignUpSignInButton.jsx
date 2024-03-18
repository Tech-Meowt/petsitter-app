'use client'
import Link from 'next/link';

export default function SignUpSignInButton({ buttonText, buttonWidth, buttonLink, buttonType }) {
  return (
    <button
      className={`shadow shadow-2xl font-raleway rounded-md px-3 py-2 text-base font-semibold hover:outline hover:outline-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-purpleDefault hover:bg-purpleDefault hover:text-white border-purpleDefault border-2 hover:border-lavender ${buttonWidth}`}
    >
      <Link href={`${buttonLink}`} className='no-underline'>{buttonText}</Link>
    </button>
  );
}
