"use client"
import {
    Card,
    CardBody,
    Input,
    Textarea,
  Button,

  } from "@material-tailwind/react";
import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function CreateTaskForm()
{
  const session = useSession()
    const [formData, setFormData] = React.useState({
        name: "",
        description: "",
    })
 
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let newFormdata = {
            ...formData,
            
        }
        console.log(newFormdata)
        const response = await axios.post("/api/task", newFormdata)

        console.log(response)
        toast.success("Task created successfully")
      } catch(error) {
        console.log(error)
        toast.error("Failed! Please check your inputs.")
      }
    }
    

    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value

      const currentInputFieldData = {
        [name]: value,
      }
      const updatedData ={
        ...formData,
        ...currentInputFieldData,
      }
      setFormData(updatedData)
    }


    return(
        <>
        <div>
            <Card className="w-96">
                <CardBody className="flex flex-col gap-6">
                    
                <Input 
                        onChange={handleChange}
                        color="teal"
                        type="text"
                        label="Title" 
                        size="lg"
                        name="name"

                />
                <Textarea
                        onChange={handleChange}
                        color="teal"
                        type="text"
                        label="Description" 
                        name="description"
                        size="lg" 
                />
        <Button 
        onClick={handleSubmit}
        variant="gradient"
        color="teal"
        >
            Create Task
        </Button>
       
                </CardBody>
            </Card>
        </div>
        </>
    )}
