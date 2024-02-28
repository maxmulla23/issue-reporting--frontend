'use client'
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export default function Page() {
  
  const [activeTab, setActiveTab] = useState('Contributions');
    return (
      <div className="text-black-500 fixed ml-5 top-0 mt-4">
        <UserCircleIcon className="h-56 w-auto" />
        <h1>Maxmulla23</h1>
      </div>
    )
}