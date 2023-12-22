'use client'

import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { Plus } from 'lucide-react'

import { Header } from '~/components/Header'
import { Logo } from '~/components/Logo'
import { Button } from '~/components/ui'
import { MobileSidebar } from './MobileSidebar'

export const Navbar = () => {
  return (
    <Header>
      <MobileSidebar />

      <nav className='flex items-center gap-x-4'>
        <div className='hidden md:flex'>
          <Logo />
        </div>
        <Button
          size='sm'
          variant='primary'
          className='rounded-sm hidden md:block h-auto py-1.5 px-2'
        >
          Create
        </Button>
        <Button size='sm' variant='primary' className='rounded-sm md:hidden block'>
          <Plus className='size-4' />
        </Button>
      </nav>
      <div className='ml-auto flex items-center gap-x-2'>
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl='/organization/:id'
          afterLeaveOrganizationUrl='/select-org'
          afterSelectOrganizationUrl='/organization/:id'
          appearance={{ elements: { rootBox: 'flex justify-center items-center' } }}
        />
        <UserButton afterSignOutUrl='/' appearance={{ elements: { avatarBox: 'size-8' } }} />
      </div>
    </Header>
  )
}
