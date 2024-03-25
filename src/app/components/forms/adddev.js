'use client'


import { Button, Card, CardBody, CardFooter, Input, Typography } from "@material-tailwind/react"
import { useSession } from "next-auth/react"
import React from "react"
import axios from "axios"
import { toast } from "react-toastify";

export default function AddDeveloperForm(){
    const [formData, setFormData] = React.useState({
        name:"",
        email: ""
    })
    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let newFormdata = {
                ...formData,  
            }
            console.log(newFormdata)
            const response = await axios.post("/api/developer", newFormdata)
            
            console.log(response)
            toast.success("Developer added successfully!")
        } catch (error) {
            console.log(error)
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

    return(
       
        <>
        <div>
        <Card color="white">
            <Typography variant="h5" color="teal">
                Add New Developer
            </Typography>
            <CardBody className="flex flex-col gap-4">
                    <Input
                        onChange={handleChange}
                        color="teal"
                        type="text"
                        label="Name" 
                        name="name"
                        size="lg" />
                    <Input 
                        onChange={handleChange}
                        color="teal"
                        type="email"
                        label="Email" 
                        name="email"
                        size="lg" />
                    
                </CardBody>
                <CardFooter>
                    <Button
                    onClick={handleSubmit}
                    variant="filled"
                    color="teal"
                    
                    >
                        Submit
                    </Button>
                </CardFooter>
        </Card>
        </div>
        </>
    )
}