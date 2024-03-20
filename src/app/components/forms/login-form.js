'use client'
import React, { FormEvent, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Checkbox, Button, Input } from "@material-tailwind/react";


export default async function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function onSubmit(event) {
        event.preventDefault()
        setIsLoading(true);
        setError(null)
       try {
        const formData = new FormData(event.target)
        const response = await fetch ("http://localhost:5030/api/User/login", {
            method: 'POST',
            body: formData,
            mode: 'cors'
        })
        if (!response.ok) {
            throw new Error('failed to submit the data')
        }

        const data = await response.json()
        console.log(data);
    } catch (error) {
        setError(error.message)
        console.error(error);
    } finally {
        setIsLoading(false)
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
                    {error && <div style={{color:"red"}}>{error}</div>}
                    <form onSubmit={onSubmit}>
                <CardBody className="flex flex-col gap-4">
                    
                    <Input
                        type="email"
                        id="email"
                        label="Email Address" size="lg" 
                        placeholder="Email"
                        color="teal"
                       
                        />
                    <Input
                        type="password"
                        id="password"
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
                    disabled={isLoading}
                    >
                    
                        {isLoading ? 'Loading...' : 'Login'}
                    </Button>
                
                </CardBody>
                </form>
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