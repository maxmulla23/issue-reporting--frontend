"use client";

import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { UserCircleIcon, PowerIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const router = useRouter();
  const handleLogOut = () => {
    signOut();
    Router.push("/");
  };
  return (
    <Card className="has-[calc(100vh-2rem)] w-full h-full max-w-[20rem]  p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Profile
        </Typography>
      </div>
      <List>
        <Link href="/userhomepage">
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Home
          </ListItem>
        </Link>
      </List>
      <hr className="my-50 border-blue-gray-50" />
      <List onClick={handleLogOut}>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
