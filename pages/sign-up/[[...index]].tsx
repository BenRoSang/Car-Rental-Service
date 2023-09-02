import { SignUp } from '@clerk/nextjs'

function Page() {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignUp afterSignInUrl="/" />
    </div>
  )
}

export default Page