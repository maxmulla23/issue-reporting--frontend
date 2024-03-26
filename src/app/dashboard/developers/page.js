'use client'

import AddDeveloperForm from "@/app/components/forms/adddev";
import { Button, Card, Popover, PopoverContent, PopoverHandler, Typography } from "@material-tailwind/react"
import axios from "axios";
import React from "react";


const TABLE_HEAD = ["Name", "Email", " "]

// async function getData() {
//     const res = await axios.get(`api/developer`);
//     if(!res.ok)
//     {
//         throw new Error('failed')
//     }
//     return res.json();
// }

export default function Page()
{
    const[data, setData] = React.useState()
    // const data = await getData();
    React.useEffect(() => {
        async function getDeveloper () {
            const response = await axios.get(`/api/developer`)
            console.log(response)
            setData(response.data)
        }
        getDeveloper()
    }, [])   
    return(
        <div className="mt-10">
            <Typography variant="h2" color="teal">Developers</Typography>
            <Popover>
                <PopoverHandler>
                <Button color="teal" className="mt-5">Add Developer</Button>
                </PopoverHandler>
                <PopoverContent>
                    <AddDeveloperForm />
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
                {data?.map((data)=> (
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
                            <td className="p-4">
                                <Button color="teal">Edit</Button>
                            </td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        </Card>

        </div>
    )
}