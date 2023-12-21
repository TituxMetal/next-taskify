import { SignOutButton } from '@clerk/nextjs'

const ProtectedPage = () => {
  return (
    <div>
      <h1 className='text-4xl text-sky-400'>This page is protected</h1>
      <p className='text-lg text-neutral-900'>You can only see this page if you are logged in.</p>
      <div>
        <SignOutButton>
          <button className='rounded-lg bg-amber-800 text-lg text-neutral-100 px-4 py-2'>
            Logout
          </button>
        </SignOutButton>
      </div>
    </div>
  )
}

export default ProtectedPage
