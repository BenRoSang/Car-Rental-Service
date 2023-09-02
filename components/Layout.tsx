import React from 'react'
import Navbar from './Navbar'
import { useUser } from '@clerk/nextjs';

function Layout({children} : {children: React.ReactNode}) {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <>
        {isSignedIn && <Navbar/> }
        {children}
    </>
  )
}

export default Layout