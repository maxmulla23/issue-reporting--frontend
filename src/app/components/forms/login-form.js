'use client'
import { useState } from "react";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Checkbox, Button } from "@material-tailwind/react";

async function getData() {
    try {
        const res = await fetch('http://localhost:5030/api/User/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password }),
        });

        
        if (!res.ok) {
            throw new Error('LOGIN FAILED');
        } 
        return res.json();
    } catch (error) {
        return error;
        console.log(error);
    }
}
export default async function LoginForm() {
    const data = await getData();
    const [email,  setEmail] = useState("");
    const [password, setPassword] = useState("")
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
                <CardBody className="flex flex-col gap-4">
                    <input 
                        type="email"
                        label="Email" size="lg" 
                        placeholder="Email"
                        value={email}
                        color="teal"
                        onChange={(e) =>
                        setEmail(e.target.value)}
                        />
                    <input 
                        type="password"
                        label="Password" size="lg" 
                        placeholder="password"
                        value={password}
                        color="teal"
                        onChange={(e) =>
                        setPassword(e.target.value)}
                        />
                    <div className="-ml-2.5">
                        <Checkbox label="Remember Me" />
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button 
                    type="submit"
                    onClick={handleLogin}
                    variant="gradient" 
                    color="teal"
                    fullWidth
                    
                    >
                        Sign In
                    </Button>
                    {error && <p>{error}</p>}
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