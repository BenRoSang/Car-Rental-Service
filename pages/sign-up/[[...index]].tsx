import { SignUp } from '@clerk/nextjs'

function Page() {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignUp redirectUrl="/" />
    </div>
  )
}

export default Page