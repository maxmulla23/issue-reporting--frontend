'use client'

import React from "react";
import { Button, Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["UserName", "e-mail address", "Phone Number" ,  "user type" , " "];

async function getData() {
    const res = await fetch('http://localhost:5030/api/User');
    if(!res.ok)
    {
        throw new Error('failed to fetch user data')
    }
    return res.json();
}

export default async function Page() {
    const data = await getData();
    return(
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
                    {data.map((users) => (
                       <tr key={users} className="even:bg-blue-gray-50/50">
                       <td className="p-4">
                           <Typography variant="small" color="blue-gray" className="font-normal">
                           {users.userName}
                           </Typography>   
                       </td>

                       <td className="p-4">
                           <Typography variant="small" color="blue-gray" className="font-normal">
                           {users.email}
                           </Typography>   
                       </td>
                       <td className="p-4">
                           <Typography variant="small" color="blue-gray" className="font-normal">
                           {users.phoneNumber}
                           </Typography>   
                       </td>
                       <td className="p-4">
                           <Typography variant="small" color="blue-gray" className="font-normal">
                           {users.userType}
                           </Typography>   
                       </td>
                       
                   </tr>
                    ))}
                       
                </tbody>
            </table>
        </Card>
    )
}