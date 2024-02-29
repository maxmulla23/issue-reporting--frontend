'use client'
import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Tabs, TabsHeader, Tab, Popover, PopoverHandler, PopoverContent } from "@material-tailwind/react";
import ReportBugform from "../components/reportbug";

const user = {
  username: "maxmulla",
  email: "maxmulla23@email.com",
  Usertype: "Student",
}

export default function Page() {
  const [activeTab, setActiveTab] = React.useState("html");
  
  const data = [
    {
      label: "Bug Issue",
      value: "bugIssue",
    },
    {
      label: "Recommendations",
      value: "recommendations",
    }
  ]
    return (
      <div className="flex flex-row text-black-500 fixed ml-5 top-0 mt-4">
        <div className="flex flex-col">
        <UserCircleIcon className="h-56 w-auto ml-2" />
        <h1 className="ml-14 text-2xl">{user.username}</h1>
        </div>
        <div className="left-30 ml-12 mt-20 ">
          <h1 className="font-mono md:font-serif text-5xl mt-3">{user.email}</h1>
          <p className="font-sans text-lg mt-3">{user.Usertype}</p>
          <Popover>
            <PopoverHandler>
            <button className="bg-teal-400 text-white font-bold py-2 px-4 border border-teal-400 mt-3">Report Bug</button>
            </PopoverHandler>
            <PopoverContent>
              <ReportBugform />
            </PopoverContent>
          </Popover>
          
          <hr className="my-50 mt-5 border-blue-gray-200" />
          <div className="mt-6">
            <Tabs value={activeTab}>
              <TabsHeader 
                className="rounded-none border-b text-black border-blue-gray-50 text-lg bg-gray-100 p-0 gap-10"
                indicatorProps={{
                  className:
                    "bg-teal-50 border-b-2 border-gray-800 shadow-none rounded-none",
                }}
                >
                  {data.map(({ label, value }) => (
                    <Tab
                      key={value}
                      value={value}
                      onClick={() => setActiveTab(value)}
                      className={activeTab === value ? "text-gray-700" : ""}
                    >
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
            </Tabs>
          </div>
        </div>
        
      </div>
      
    )
}