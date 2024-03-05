'use client'
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Radio, Typography } from "@material-tailwind/react";
import React from "react";

export default function SignupForm() {
    return(
        <Card className="w-96">
            <CardHeader
                variant="gradient"
                color="teal"
                className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Create Account
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input
                        color="teal"
                        type="text"
                        label="first name" size="lg" />
                    <Input
                        color="teal"
                        type="text"
                        label="last name" size="lg" />
                    <Input
                        type="email"
                        color="teal" 
                        label="email address" size="lg" />
                    <Input
                        type="password"
                        color="teal"
                        label="enter password" size="lg" />
                    <div className="flex flex-row">
                        <Radio name="type" label="Student" />
                        <Radio name="type" label="Lecturer" />
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                    variant="filled"
                    color="teal"
                    fullWidth>
                        Create Account
                    </Button>
                </CardFooter>
        </Card>
    )
}