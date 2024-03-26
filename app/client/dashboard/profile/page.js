import dynamic from 'next/dynamic';

const ProfileForm = dynamic(() => {
  return import ('../../../components/ProfileForm')
},
  { ssr: false }
)

export default function page() {
  return (
    <>
      <title>Your profile</title>
      <main>
        <ProfileForm />
      </main>
    </>
  )
}
