'use client'
import { UserCircleIcon } from "@heroicons/react/24/solid"
import LoginForm from "../components/login-form"

export default function Page() {
    return(
        <>
        <div className="flex justify-center items-center mt-6 ">
        <div className="w-full max-w-md space-y-8 px-4 py-6 bg-white rounded-md shadow-sm">
        <div>
          <UserCircleIcon className="mx-auto h-12 w-auto text-teal-800" />

          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-700">
           Bugzz Issue Tracker
          </h2>
         
        </div>

        <LoginForm />
      </div>
      </div>
        </>
    )
}
