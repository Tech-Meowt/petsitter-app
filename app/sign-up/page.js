import dynamic from 'next/dynamic';

const SignUpForm = dynamic(() => {
  return import ('../components/SignUpForm')
}, {
  ssr: false
})

export default function SignUp() {
  return (
    <>
      <title>Sign up</title>
      <main>
       <SignUpForm />
      </main>
    </>
  );
}
