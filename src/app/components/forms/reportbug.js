'use client'

import { Button, Card, CardBody, CardFooter, CardHeader, Input, Typography } from "@material-tailwind/react"

export default function ReportBugform(){
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
