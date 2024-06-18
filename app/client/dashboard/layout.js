import NavBar from '@/app/components/NavBar'
import Footer from '@/app/components/Footer'

export default function ClientDashboardLayout({ children }) {
  return (
    <>
      <NavBar />
      <section>
        {children}
      </section>
      <Footer />
    </>
  )
}
