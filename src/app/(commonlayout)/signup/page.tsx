import { SignupForm } from "@/components/signup-form"

export default function Page() {
  return (
    <div className="flex min-h-svh w-9/12 mx-auto items-center justify-center p-6 md:p-10">
      <div className="w-9/12 max-w-sm">
        <SignupForm />
      </div>
    </div>
  )
}
