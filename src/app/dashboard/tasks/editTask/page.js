"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"

export default function page(){
    const [status, setStatus] = useState()

    useEffect(() => {
        const fetchTask = async () => {
            const response = await axios.get(`/api/task/${taskId}`)
            setStatus(response.data)
        }
        fetchTask()
    }, [taskId])

    const handleUpdate = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.put("/api/task", { taskId, status })
            console.log("updated task: " , response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <select value={status} onChange={(e)=>{setStatus(e.target.value)}} >
                
            </select>
        </div>
    )
}