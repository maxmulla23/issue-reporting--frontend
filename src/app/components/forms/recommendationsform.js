'use client'
import { Input } from "@material-tailwind/react";
import React from "react";

export default function RecommendationForm()
{
    return (
        <>
        <div>
            <Card className="w-96">
               
                <CardBody className="flex flex-col gap-4">
                    <Input 
                        color="teal"
                        type="text"
                        label="Title" size="lg" />
                    <Input 
                        color="teal"
                        type="text"
                        label="Description" size="lg" />
                    
                </CardBody>
                <CardFooter>
                    <Button
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