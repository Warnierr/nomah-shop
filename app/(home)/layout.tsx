import Header from '@/public/components/shared/header'
import Footer from '@/public/components/shared/footer'

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1 flex flex-col'>{children}</main>
      <Footer />
    </div>
  )
}
