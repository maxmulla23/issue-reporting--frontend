"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Radio,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    type: "",
  });
const session = useSession();
const router = useRouter();


  useEffect(() => {
    if (session?.status === 'authenticated') {
       router.push('/login') 
    }
})

  console.log(formData);

  const onsubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) return;
    try {
      let newFormdata = {
        ...formData,
        isStudent: formData.type === "student",
        isLecturer: formData.type === "lecturer",
        isAdmin: formData.type === "admin",
      };

      console.log(newFormdata);

      const response = await axios.post("/api/register", newFormdata);

      console.log(response);

      toast.success("User Created successfully!");
    } catch (error) {
      toast.error("Something went wrong! Error");
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    //Create an object for the current input field
    const currentInputFieldData = {
      [name]: value,
    };

    //Merge the data object with the current input field data object
    const updatedData = {
      ...formData,
      ...currentInputFieldData,
    };
    setFormData(updatedData);
  };

  return (
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
          required
          onChange={handleChange}
          color="teal"
          type="text"
          label="user name"
          size="lg"
          name="name"
        />
        <Input
          required
          onChange={handleChange}
          type="email"
          color="teal"
          label="email address"
          size="lg"
          name="email"
        />
        <Input
          required
          onChange={handleChange}
          type="password"
          color="teal"
          label="enter password"
          size="lg"
          name="password"
        />
        <div className="flex flex-row">
          <Radio
            name="type"
            value="student"
            label="Student"
            onChange={handleChange}
          />
          <Radio
            name="type"
            value="lecturer"
            label="Lecturer"
            onChange={handleChange}
          />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="filled" color="teal" fullWidth onClick={onsubmit}>
          Create Account
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          have an account? proceed to 
          <Typography
            as="a"
            href="/login"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Sign in
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
}
