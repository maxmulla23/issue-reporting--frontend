import { Typography } from "@material-tailwind/react";
import axios from "axios";
import React from "react";

export default function Page(){
    const [data, setData] = React.useState()

    React.useEffect(() => {
        async function getAllRecommendations () {
            const response = axios.get(`/api/allRecommendation`)
            setData(response.data)
        }
        getAllRecommendations();
    }, [])
    return (
        <>
        <Typography variant="h4" color="teal">All Recommendations</Typography>
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
        </>
    )
}