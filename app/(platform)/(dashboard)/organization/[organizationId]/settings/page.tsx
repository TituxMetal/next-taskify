import { OrganizationProfile } from '@clerk/nextjs'

const SettingsPage = () => {
  return (
    <div className='w-full'>
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: 'shadow-none w-full',
            card: 'shadow-none w-full border border-neutral-200'
          }
        }}
      />
    </div>
  )
}

export default SettingsPage
