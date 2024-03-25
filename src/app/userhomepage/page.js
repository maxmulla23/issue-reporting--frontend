"use client";
import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
  Popover,
  PopoverHandler,
  PopoverContent,
  Alert,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import ReportBugform from "../components/forms/reportbug";
import { useSession } from "next-auth/react";
import axios from "axios";

const user = {
  username: "maxmulla",
  email: "maxmulla23@email.com",
  Usertype: "Student",
};

export default function Page() {
  const [activeTab, setActiveTab] = React.useState("html");
  React.useEffect(()=> {
    async function getUserIssues () { 
      const response = await axios.get(`/api/issue?userId={session?.data?.id}`)
      console.log(response)
    }
    getUserIssues()
  }, [])
  const session = useSession();


  return (
    <div className="flex flex-row text-black-500 fixed ml-5 top-0 mt-4 w-[75%] overflow-hidden">
      <div className="flex flex-col">
        <UserCircleIcon className="h-56 w-auto ml-2" />
        <h1 className="ml-14 text-2xl">{session?.data?.name}</h1>
      </div>
      <div className="left-30 ml-12 mt-20 w-full">
        <h1 className="font-mono md:font-serif text-3xl mt-3">
          {session?.data?.email}
        </h1>
        
       

        {/* <hr className="my-50 mt-5 border-blue-gray-200 " /> */}
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b text-black border-blue-gray-50 text-lg bg-gray-100 p-0 gap-10"
            indicatorProps={{
              className:
                "bg-teal-50 border-b-2 border-gray-800 shadow-none rounded-none",
            }}
          >
            {/* {data.map(({ label, value }) => ( */}
            <Tab
              value={"bugIssue"}
              onClick={() => setActiveTab("bugIssue")}
              className={activeTab === "bugIssue" ? "text-gray-700" : ""}
            >
              Issue Report
            </Tab>
            <Tab
              value={"bugIssue1"}
              onClick={() => setActiveTab("bugIssue1")}
              className={activeTab === "bugIssue1" ? "text-gray-700" : ""}
            >
              Issue Report
            </Tab>
            {/* ))} */}
          </TabsHeader>
          <TabsBody>
            <TabPanel value="bugIssue">
              <div className="flex flex-col w-full space-y-6">
                <div className="flex justify-between">
                  <h3 className="text-4xl my-6 font-bold">My Issues</h3>
                  <Popover>
          <PopoverHandler>
          <button className="bg-teal-400 text-white font-bold py-2 px-4 border border-teal-400 mt-3">
                    New Issue
                  </button>
          </PopoverHandler>
          <PopoverContent>
            <ReportBugform />
          </PopoverContent>
        </Popover>
                  
                </div>
                {[1, 2, 3, 4, 5].map((item) => (
                  <Alert variant="outlined">
                    <span>A simple outlined alert for showing message.</span>
                  </Alert>
                ))}
              </div>
            </TabPanel>
          </TabsBody>
        </Tabs>

        {/* <div className="mt-6 bg-blue-gray-500">
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
        </div> */}
      </div>
    </div>
  );
}
