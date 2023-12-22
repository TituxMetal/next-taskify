import { Navbar } from './_components/Navbar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <Navbar />
      <div className='flex flex-1'>
        {/* <Sidebar /> */}
        Sidebar
        <div className='flex-1'>{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
