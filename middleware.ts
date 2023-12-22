import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'
import { AuthObject } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ['/'],
  // debug: true,
  afterAuth: (
    {
      userId,
      isPublicRoute,
      orgId
    }: AuthObject & {
      isPublicRoute: boolean
      isApiRoute: boolean
    },
    req
  ) => {
    // Handle users who aren't authenticated
    if (!userId && !isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url })
    }

    if (userId) {
      // Redirect logged in users to organization selection page if they are not active in an organization
      if (!orgId && req.nextUrl.pathname !== '/select-org') {
        const orgSelection = new URL('/select-org', req.url)
        return NextResponse.redirect(orgSelection)
      }

      // Redirect to the organization's dashboard if trying to access a protected route and has an organization selected
      if (isPublicRoute && orgId) {
        const orgIdPath = new URL(`/organization/${orgId}`, req.url)
        return NextResponse.redirect(orgIdPath)
      }
    }

    // Allow users visiting public routes to access them
    return NextResponse.next()
  }
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}
