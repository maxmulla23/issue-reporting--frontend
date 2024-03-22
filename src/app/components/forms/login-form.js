'use client'
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Checkbox, Button, Input } from "@material-tailwind/react";




export default function LoginForm() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const  [isLoggedIn, setIsLoggedIn] = useState(false)
 
useEffect(() => {
const isLoggedIn = localStorage.getItem( "loggedin" );
if ( isLoggedIn === "true") {
    setIsLoggedIn(true)
}
})

const handleLogin = async () => {
    try {
        const response = await fetch('http://localhost:5030/api/User/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  email, password })
        })
        const data = await response.json()
        if (response.ok) {
            setIsLoggedIn(true)
            console.log(data)
        } else {
            throw new Error("Log In failed! try again")
        }
    } catch(error) {
        console.error(error);
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
                    
                    <Input
                        type="email"
                        id="email"
                        value={email}
                        label="Email Address" size="lg" 
                        placeholder="Email"
                        color="teal"
                        onChange={(e) => setEmail(e.target.value)}
                       
                        />
                    <Input
                        type="password"
                        id="password"
                        value={password}
                        label="Password" size="lg" 
                        placeholder="password"
                        color="teal"
                        onChange={(e) => setPassword(e.target.value)}
                      
                        />
                    <div className="-ml-2.5">
                        <Checkbox label="Remember Me" />
                    </div>
                    <Button 
                    type="submit"
                    variant="gradient" 
                    color="teal"
                    fullWidth
                    onClick={handleLogin}
                    >
                    
                        Sign In
                    </Button>
                
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