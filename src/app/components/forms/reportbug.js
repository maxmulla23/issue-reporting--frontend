'use client'

import { Button, Card, CardBody, CardFooter, CardHeader, Input, Textarea, Typography } from "@material-tailwind/react"
import  React from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function ReportBugform(){
    const [formData, setFormData] = React.useState({
        title: "",
        description: ""
    })
    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let newFormdata = {
                ...formData,  
            }
            console.log(newFormdata)
            const response = await axios.post("/api/issue", newFormdata)
            console.log(response)
            toast.success("Your bug report has been submitted!")
        } catch (error) {
            toast.error("Error occurred!");
        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const  value = e.target.value;

        const currentInputFieldData = {
            [name]: value,
        }
        const updatedData = {
            ...formData,
            ...currentInputFieldData,
        }
        setFormData(updatedData)
    }


    return (
        <>
        <div>
            <Card className="w-96">
                <CardHeader
                variant="gradient"
                className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h5" color="black">
                        Report Bug
                    </Typography>
                    
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input
                    onChange={handleChange}
                    color="teal"
                    type="text"
                    label="title"
                    size="lg" 
                    name="title"
                    
                    />
                    <Textarea
                        onChange={handleChange}
                        color="teal"
                        type="text"
                        label="Description" 
                        size="lg"
                        name="description" 
                        />
                    
                </CardBody>
                <CardFooter>
                    <Button
                    variant="filled"
                    color="teal"
                    onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </CardFooter>
            </Card>
        </div>
        </>
    )
}
