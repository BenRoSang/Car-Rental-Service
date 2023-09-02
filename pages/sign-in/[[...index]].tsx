import { SignIn } from "@clerk/nextjs"


function Page() {
  return (
    <div className="h-screen flex justify-center items-center">
      <SignIn afterSignInUrl="/" />
    </div>
  )
}

export default Page