'use client'
import {
    Card,
    CardBody,
    Input,
    Textarea,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  } from "@material-tailwind/react";

import React from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function CreateTask()
{
    
    const [enddate, setEndDate] = React.useState(null);

    async function onSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        const response = await  fetch("http://localhost:5030/api/todo",  {
            method: 'POST',
            body: formData,
    })
        const data = await response.json();
    return(
        <>
        <div>
            <Card className="w-96">
                <CardBody className="flex flex-col gap-6">
                    <form onSubmit={onSubmit}>
                <Input 
                        color="teal"
                        type="text"
                        label="Title" size="lg" 
                />
                <Textarea
                        color="teal"
                        type="text"
                        label="Description" size="lg" 
                />
        <label>End Date:</label>
        <DatePicker selected={enddate} onChange={(date) => setEndDate(date)} dateFormat="MM/dd/yyyy" />

        <Button 
        type="submit"
        variant="gradient"
        color="teal"
        >
            Create Task
        </Button>
        </form>
                </CardBody>
            </Card>
        </div>
        </>
    )}
}