'use client'

import { Card, CardBody, CardFooter, Input, Typography } from "@material-tailwind/react"

export default function AddDeveloperForm(){
    return(
        <>
        <div>
        <Card color="white">
            <Typography variant="h5" color="teal">
                Add New Developer
            </Typography>
            <CardBody className="flex flex-col gap-4">
                    <Input
                        color="teal"
                        type="text"
                        label="Name" size="lg" />
                    <Input 
                        color="teal"
                        type="email"
                        label="Email" size="lg" />
                    
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