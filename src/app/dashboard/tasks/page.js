'use client'
import React from "react";
import CreateTask from "@/app/components/forms/create-taskform";
import { Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react";

const TABLE_HEAD = ["Task Title", "Description", "Start Date", "End Date", "Status", "Devloper" ]

async function getData() {
  const res = await fetch('http://localhost:5030/api/Todo');
  if(!res.ok)
  {
      throw new Error('failed to fetch task data')
  }
  return res.json();
}

export default async function page() {
  const data = await getData();
    return(
        <div>
        <h1>this is tasks page</h1>

        <Popover>
            <PopoverHandler>
            <button className="bg-teal-400 text-white font-bold py-2 px-4 border border-teal-400 mt-3">Create Task</button>
            </PopoverHandler>
            <PopoverContent>
              <CreateTask />
            </PopoverContent>
          </Popover>
          <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((tasks) => (
                       <tr key={users} className="even:bg-blue-gray-50/50">
                       <td className="p-4">
                           <Typography variant="small" color="blue-gray" className="font-normal">
                           {tasks.taskTitle}
                           </Typography>   
                       </td>

                       <td className="p-4">
                           <Typography variant="small" color="blue-gray" className="font-normal">
                           {tasks.description}
                           </Typography>   
                       </td>
                       <td className="p-4">
                           <Typography variant="small" color="blue-gray" className="font-normal">
                           {tasks.startDate}
                           </Typography>   
                       </td>
                       <td className="p-4">
                           <Typography variant="small" color="blue-gray" className="font-normal">
                           {tasks.endDate}
                           </Typography>   
                       </td>
                       <td className="p-4">
                           <Typography variant="small" color="blue-gray" className="font-normal">
                           {tasks.status}
                           </Typography>   
                       </td>
                       <td className="p-4">
                           <Typography variant="small" color="blue-gray" className="font-normal">
                           {tasks.developer}
                           </Typography>   
                       </td>
                       
                   </tr>
                    ))}
                       
                </tbody>
                </table>
                </Card>
          </div>
    )
}