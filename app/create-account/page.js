import dynamic from 'next/dynamic'

const ProfileForm = dynamic(
  () => {
    return import('../components/ProfileForm');
  },
  { ssr: false }
);

export default function CreateAccount() {
  return (
    <>
      <title>Create your account</title>
      <main>
        <ProfileForm />
      </main>
    </>
  )
}
