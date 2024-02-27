'use client'

import { UserCircleIcon } from "@heroicons/react/24/solid"
import SignupForm from "../components/signup-from"

export default function Page(){
    return (
        <>
        <div className="flex justify-center items-center mt-10">
            <div className="w-full max-w-md space-y-8 px-4 py-6 bg-white rounded-md shadow-sm">
            <div>
                <UserCircleIcon className="mx-auto h-12 auto text-teal-500" />
            </div>
        <SignupForm />
        </div>
        </div>
        </>
    )
}