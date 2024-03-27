'use client'
import React from "react";
import { Card, Popover, PopoverContent, PopoverHandler, Typography } from "@material-tailwind/react";
import axios from "axios";
import CreateTaskForm from "@/app/components/forms/create-taskform";

const TABLE_HEAD = ["Task Title", "Description", "Start Date", "End Date", "Status", "Assigned To" ]

// async function getData() {
//   const res = await fetch('http://localhost:5030/api/Todo');
//   if(!res.ok)
//   {
//     throw new Error('failed to fetch task data')
//   }
//   return res.json();
// }

export default function page() {

    const [data, setData] = React.useState()
    React.useEffect(() => {
        async function getTasks () {
            try {
                const response = await axios.get(`/api/task`)
                console.log(response);
                setData(response.data)
            } catch (error) {
                console.log(error)
            }
           
        }
        getTasks()
    }, [])
    return(
        <div>
        <h1>this is data page</h1>

         <Popover>
            <PopoverHandler>
            <button className="bg-teal-400 text-white font-bold py-2 px-4 border border-teal-400 mt-3">Create Task</button>
            </PopoverHandler>
            <PopoverContent>
              <CreateTaskForm />
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
                    {data?.map((data) => (
                       <tr key={data} className="even:bg-blue-gray-50/50">
                       <td className="p-4">
                           <Typography variant="small" color="blue-gray" className="font-normal">
                           {data.name}
                           </Typography>   
                       </td>

                       <td className="p-4">
                           <Typography variant="small" color="blue-gray" className="font-normal">
                           {data.description}
                           </Typography>   
                       </td>
                       <td className="p-4">
                           <Typography variant="small" color="blue-gray" className="font-normal">
                           {data.startDate}
                           </Typography>   
                       </td>
                       <td className="p-4">
                           <Typography variant="small" color="blue-gray" className="font-normal">
                           {data.endDate}
                           </Typography>   
                       </td>
                       <td className="p-4">
                           <Typography variant="small" color="blue-gray" className="font-normal">
                           {data.status}
                           </Typography>   
                       </td>
                       <td className="p-4">
                           <Typography variant="small" color="blue-gray" className="font-normal">
                           {data.AssignedTo.name}
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