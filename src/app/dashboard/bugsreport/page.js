'use client'
import React from "react";
import axios from "axios";
import { Alert, Typography } from "@material-tailwind/react";
import { useSession } from "next-auth/react";

export default function Page(){
    const [data, setData] = React.useState()
    const session = useSession()

    React.useEffect(() => {
        async function getAllIssues () {
            const response = await axios.get(`/api/allIssue`)
            console.log(response)
            setData(response.data)
        }
        getAllIssues();
    }, [])
    return(
       <div>
        <Typography variant="h2" color="teal">All Reported Issues</Typography>
        <div className="flex flex-wrap mt-4 gap-3">
        {data?.map((data) => (
            <Alert variant="ghost">
                <Typography color="teal" variant="h4">{data.title}</Typography>
                <ul className="mt-2 ml-2 list-inside list-disc">
                    <li>{data.description}</li>
                </ul>
            </Alert>
        ))}
        </div>
        
       </div>
    )
}