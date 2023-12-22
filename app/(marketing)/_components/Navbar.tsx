import Link from 'next/link'
import { Header } from '~/components/Header'
import { Logo } from '~/components/Logo'
import { Button } from '~/components/ui/button'

export const Navbar = () => {
  return (
    <Header>
      <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
        <Logo />
        <div className='space-x-4 md:block md:w-auto flex items-center justify-between w-full'>
          <Button size='sm' variant='outline' asChild>
            <Link href='/sign-in'>Login</Link>
          </Button>
          <Button size='sm' asChild>
            <Link href='/sign-up'>Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </Header>
  )
}
