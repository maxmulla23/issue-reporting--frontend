'use client'
import { Button, Card, CardBody, CardFooter, Input, Textarea } from "@material-tailwind/react";
import { useSession } from "next-auth/react";
import React from "react";

export default function RecommendationForm()
{
    const session = useSession();
    const [formData, setFormData] = React.useState({
        title: "",
        description: "",
        userId: session?.data?.id
    })
    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let newFormdata = {
                ...formData,  
            }
            console.log(newFormdata)
            const response = await axios.post("/api/recommendation", newFormdata)
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
               
                <CardBody className="flex flex-col gap-4">
                    <Input
                        onChange={handleChange}
                        color="teal"
                        type="text"
                        label="Title" size="lg" 
                        name="title"/>
                    <Textarea 
                        onChange={handleChange}
                        color="teal"
                        type="text"
                        label="Description" size="lg" 
                        name="title"/>
                    
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