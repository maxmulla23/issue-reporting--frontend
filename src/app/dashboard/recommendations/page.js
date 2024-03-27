"use client"
import { Alert, Typography } from "@material-tailwind/react";
import axios from "axios";
import React from "react";

export default function Page(){
    const [data, setData] = React.useState()

    React.useEffect(() => {
        try {
            async function getAllRecommendations () {
                const response = await axios.get(`/api/alRecommendations`)
                console.log(response)
                setData(response.data)
            }
            getAllRecommendations();
        } catch (error) {
            console.log(error)
        }
       
    }, [])
    return (
        <div>
        <Typography variant="h4" color="teal">All Recommendations</Typography>
        <div>
        <div className="flex flex-wrap mt-4 gap-3">
        {data?.map((data) => (
            <Alert variant="ghost">
                <Typography color="teal" variant="h4">{data.title}</Typography>
                <ul className="mt-2 ml-2 list-inside list-disc">
                    <li>{data.description}</li>
                </ul>
                <Typography variant="h5" color="teal">Recommender: {data.author.name}</Typography>
            </Alert>
        ))}
        </div>
        </div>
        </div>
    )
}