"use client";
import React from "react";
import axios from "axios";
import { Alert, Typography } from "@material-tailwind/react";
import { useSession, signOut } from "next-auth/react";
export default function Page() {
  const { data: session } = useSession();
  console.log(session);
  const [data, setData] = React.useState()

    React.useEffect(() => {
        async function getAllIssues () {
            const response = await axios.get(`/api/allIssue`)
            console.log(response)
            setData(response.data)
        }
        getAllIssues();
    }, [])
  return (
    <>
      <Typography variant="h5" color="teal">Welcome Admin</Typography>


      <div className="flex flex-wrap mt-4 gap-3">
        {data?.map((data) => (
            <Alert variant="ghost">
                <Typography color="teal" variant="h4">{data.title}</Typography>
                <ul className="mt-2 ml-2 list-inside list-disc">
                    <li>{data.description}</li>
                </ul>
                <Typography variant="h5">Reported By: {data.reported.name}</Typography>
            </Alert>
        ))}
        </div>

    </>
  );
}
