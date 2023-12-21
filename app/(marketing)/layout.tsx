import { Footer } from './_components/Footer'
import { Navbar } from './_components/Navbar'

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-full bg-gradient-to-br from-slate-300 to-slate-50'>
      <Navbar />
      <main className='pt-40 pb-20 min-h-full'>{children}</main>
      <Footer />
    </div>
  )
}

export default MarketingLayout
