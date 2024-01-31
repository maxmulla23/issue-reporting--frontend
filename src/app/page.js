'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()

  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <div className="max-w-7xl w-10/12 ">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="left w-full">
            <Image 
              src="/homepage.svg" 
              width={500}
              height={500}
              alt="issue-tracker"
              
            />
          </div>
          
          <div className="px-5 flex gap-5 flex-col">
            <h1 className="text-3xl md:text-5xl my-4 tracking-wide text-teal-700 font-bold">
              <span className="block my-5 whitespace-nowrap">Bugzz</span>
              Issue Tracker
            </h1>
            <p className="font-thin text-sm md:text-lg text-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit inventore rerum ut sunt adipisci labore. Facere
              magni laudantium delectus quasi illum repellat neque laboriosam,
            </p>
            
            <div>
            </div>
            <div>
            <button type="button" onClick={() => router.push('/Login')}
              size="md"
              className="btn bg-teal-700 hover:bg-teal-600 text-black font-bold h-12 py-2 px-4 rounded"
            >
              Login
            </button>
            </div>
          </div>
          
          </div>
        </div>
      </div>
  );
}
