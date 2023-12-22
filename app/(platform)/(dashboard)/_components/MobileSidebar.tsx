'use client'

import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button, Sheet, SheetContent } from '~/components/ui'
import { useMobileSidebar } from '~/hooks/useMobileSidebar'
import { Sidebar } from './Sidebar'

export const MobileSidebar = () => {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)

  const state = useMobileSidebar(state => state)
  const { isOpen, onOpen, onClose } = state

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  if (!isMounted) return null

  return (
    <>
      <Button onClick={onOpen} variant='ghost' size='sm' className='block md:hidden mr-2'>
        <Menu className='size-4' />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side='left' className='p-2 pt-10'>
          <Sidebar storageKey='t-sidebar-mobile-state' />
        </SheetContent>
      </Sheet>
    </>
  )
}
