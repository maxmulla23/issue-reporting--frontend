'use client'
import {
    Card,
    CardBody,
    Input,

    Textarea,
  } from "@material-tailwind/react";

import React from "react";

export default function CreateTask()
{
    const [date, setDate] = React.useState();
    return(
        <>
        <div>
            <Card className="w-96">
                <CardBody className="flex flex-col gap-6">
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
                    
                    
    
               
                </CardBody>
            </Card>
        </div>
        </>
    )
}