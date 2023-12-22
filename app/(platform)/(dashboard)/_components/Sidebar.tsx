'use client'

import { useOrganization, useOrganizationList } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useLocalStorage } from 'usehooks-ts'

import { Accordion, Button, Skeleton } from '~/components/ui'
import { NavItem, Organization } from './NavItem'

interface SidebarProps {
  storageKey?: string
}

export const Sidebar = ({ storageKey = 't-sidebar-state' }: SidebarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(storageKey, {})
  const { organization: activeOrganization, isLoaded: isLoadedOraganization } = useOrganization()
  const { userMemberships, isLoaded: isLoadedOrganizationList } = useOrganizationList({
    userMemberships: { infinite: true }
  })
  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) acc.push(key)
      return acc
    },
    []
  )
  const onExpand = (id: string) => {
    setExpanded(curr => ({ ...curr, [id]: !expanded[id] }))
  }

  if (!isLoadedOraganization || !isLoadedOrganizationList || userMemberships.isLoading) {
    return (
      <>
        <Skeleton className='h-12' />
      </>
    )
  }

  return (
    <>
      <div className='font-medium text-xs flex items-center mb-1'>
        <span className='pl-4'>Workspaces</span>
        <Button asChild type='button' size='icon' variant='ghost' className='ml-auto'>
          <Link href='/select-org'>
            <Plus className='size-4' />
          </Link>
        </Button>
      </div>
      <Accordion type='multiple' defaultValue={defaultAccordionValue} className='space-y-2'>
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isExpanded={expanded[organization.id]}
            isActive={activeOrganization?.id === organization.id}
            organization={organization as Organization}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </>
  )
}
