"use client"
import {
    Card,
    CardBody,
    Input,
    Textarea,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Select,
  Option,
  } from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
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
  const [date, setDate] = React.useState(null);
  const developer = [
  { id: 1, name: 'yvonne', email: 'yvonne@gmail.com' },
  { id: 2, name: 'chris', email: 'chris@gmail.com' },
  { id: 3, name: 'justine Kengo', email: 'justines@gmail.com' },
  { id: 4, name: 'christine nyikal', email: 'chrisN@gmail.com' },
  { id: 5, name: 'christian bale', email: 'cbale@gmail.com' },
  { id: 6, name: 'shawn amalemba', email: 'shawnA@gmail.com' },
  { id: 7, name: 'Meg Atieno', email: 'meg@gmail.com' },
  { id: 8, name: 'samuel mathenge', email: 'samm@gmail.com' }
  ]


    

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let newFormdata = {
            ...formData,
            
        }
        // console.log(newFormdata)
        const response = await axios.post("/api/task", newFormdata)

        // console.log(response)
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
                        name="title"

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
