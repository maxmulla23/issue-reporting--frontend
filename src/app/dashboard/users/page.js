'use client'

import React from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import axios from "axios";

const TABLE_HEAD = ["UserName", "e-mail address", " "];

// async function getData() {
//     const res = await fetch('http://localhost:5030/api/User');
//     if(!res.ok)
//     {
//         throw new Error('failed to fetch user data')
//     }
//     return res.json();
// }

export default function Page() {
    const[data, setData] = React.useState()
    React.useEffect(() => {
        async function getUsers () {
            const response = await axios.get(`/api/users`)
            console.log(response)
            setData(response.data)
        }
        getUsers()
    }, []) 
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
                    {data?.map((data) => (
                       <tr key={data} className="even:bg-blue-gray-50/50">
                       <td className="p-4">
                           <Typography variant="small" color="blue-gray" className="font-normal">
                           {data.name}
                           </Typography>   
                       </td>

                       <td className="p-4">
                           <Typography variant="small" color="blue-gray" className="font-normal">
                           {data.email}
                           </Typography>   
                       </td>
                       
                      
                       
                   </tr>
                    ))}
                       
                </tbody>
            </table>
        </Card>
    )
}