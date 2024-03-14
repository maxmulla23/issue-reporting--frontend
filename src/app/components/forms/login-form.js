'use client'
import { FormEvent } from "react";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Checkbox, Button, Input } from "@material-tailwind/react";


export default async function LoginForm() {
    async function onSubmit(event) {
       try {
        event.preventDefault()
    
        const formData = new FormData(event.target)
        const response = await fetch ("http://localhost:5030/api/User/login", {
            method: 'POST',
            body: formData,
        })
        const data = await response.json()
    } catch (error) {
        console.error(error.message);
    }
    }
    return(
        <Card className="w-96">
            <CardHeader
                variant="gradient"
                color="teal"
                className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Sign In
                    </Typography>
                </CardHeader>
                <div className="flex flex-col gap-4 mb-4">
                <CardBody className="flex flex-col gap-4">
                    <form onSubmit={onSubmit}>
                    <Input
                        type="email"
                        label="Email" size="lg" 
                        placeholder="Email"
                        color="teal"
                       
                        />
                    <Input
                        type="password"
                        label="Password" size="lg" 
                        placeholder="password"
                        color="teal"
                      
                        />
                    <div className="-ml-2.5">
                        <Checkbox label="Remember Me" />
                    </div>
                    <Button 
                    type="submit"
                    variant="gradient" 
                    color="teal"
                    fullWidth
                    
                    >
                        Sign In
                    </Button>
                    </form>
                </CardBody>
                </div>
                <CardFooter className="pt-0">
                   
                   
                    <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            as="a"
            href="/signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Sign up
          </Typography>
        </Typography>
                </CardFooter>
        </Card>
    )
}