'use client'

import { Button, Card, Typography } from "@material-tailwind/react"


const TABLE_HEAD = ["Name", "Email", " "]

async function getData() {
    const res = await fetch('http://localhost:5030/api/Developer');
    if(!res.ok)
    {
        throw new Error('failed')
    }
    return res.json();
}

export default async function Page()
{
    const data = await getData();   
    return(
        <div className="mt-10">
            <Typography variant="h2" color="teal">Developers</Typography>
            <Button color="teal" className="mt-5">Add Developer</Button>
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
                    {data.map((developers)=> (
                        <tr key={developers} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                {developers.fullName}
                                </Typography>   
                            </td>

                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                {developers.email}
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