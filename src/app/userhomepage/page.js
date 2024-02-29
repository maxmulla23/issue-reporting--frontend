'use client'
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Tab } from "@headlessui/react";

const user = {
  username: "maxmulla",
  email: "maxmulla23@email.com",
  Usertype: "Student",
}

export default function Page() {
  
  const [activeTab, setActiveTab] = useState('Contributions');
    return (
      <div className="flex flex-row text-black-500 fixed ml-5 top-0 mt-4">
        <div className="flex flex-col">
        <UserCircleIcon className="h-56 w-auto" />
        <h1 className="ml-9">{user.username}</h1>
        </div>
        <div className="left-30 ml-12 mt-20 ">
          <h1 className="font-mono md:font-serif text-5xl mt-3">{user.email}</h1>
          <p className="font-sans text-lg mt-3">{user.Usertype}</p>
          <button className="bg-teal-400 text-white font-bold py-2 px-4 border border-teal-400 mt-3">Edit Profile</button>
          <div className="mt-3">
            
          </div>
        </div>
        
      </div>
      
    )
}