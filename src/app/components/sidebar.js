'use client'

import { Accordion, AccordionBody, AccordionHeader, Card, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react"
import React from "react"
import {
    PresentationChartBarIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    UserGroupIcon,
  } from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
  
export default function Sidebar(){
    const  router = useRouter();
    const handleLogOut = () => {
        signOut()
        router.push("/")
    }
    const [open, setOpen] = React.useState(0);

    const handleopen = (value) => {
        setOpen(open === value ? 0 : value);
    }
    const pathname = usePathname();
    
    return (
        <Card className="has-[calc(100vh-2rem)] w-full h-full max-w-[20rem]  p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                    Buggz 
                </Typography>
            </div>
            <List>
                <Link href="/dashboard">
                    <ListItem>
                    <ListItemPrefix>
                    <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                        Home
                    </ListItem>
                </Link>
                <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                        />    
                    }
                    >
                        <ListItem className="p-0" selected={open === 1}>
                        
                            <AccordionHeader onClick={() => handleopen(1)} className="border-b-0 p-3">

                                <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                <Typography color="blue-gray" className="mr-auto font-normal">
                                    Issues
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">

                                <Link href="/dashboard/bugsreport">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Bugs Reported
                                </ListItem>
                                </Link>

                                <Link href="/dashboard/recommendations">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    User Recommendations
                                </ListItem>
                                </Link>

                                <Link href="/dashboard/tasks">
                                <ListItem>
                                    
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Tasks
                                </ListItem>
                                </Link>

                            </List>
                        </AccordionBody>
                    </Accordion>
                    <Link href="/dashboard/users">
                    <ListItem>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Users
                    </ListItem>
                    </Link>
                    {/* <Link href="/dashboard/developers">
                        <ListItem>
                            <ListItemPrefix>
                                <UserGroupIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Developers
                        </ListItem>
                    </Link> */}
                    
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
    )
}