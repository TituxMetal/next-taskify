export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className='fixed top-0 w-full h-14 shadow-sm px-4 border-b bg-slate-100 flex items-center'>
      {children}
    </header>
  )
}
