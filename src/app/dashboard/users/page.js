'use client'

import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Fisrt Name", "Last Name", "User type" , "e-mail address", ""];
const TABLE_ROWS = [
    {
        fname: "Maxwell",
        lname: "Mulla",
        usertype: "student",
        email: "maxmulla23@gmail.com",
    },
    {
        fname: "Iweene",
        lname: "Wanjiru",
        usertype: "lecturer",
        email: "iweene@gmail.com",
    }
]

export default function Page() {
    return(
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {TABLE_ROWS.map(({ fname, lname, usertype, email }, index) => {
                        const islast = index === TABLE_ROWS.length - 1;
                        const classes = islast ? "p-4" : "p-4 borderr-b border-blue-gray-50";

                        <tr key={fname}>
                            <td className={classes}>
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {TABLE_ROWS.fname}
                                </Typography>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </Card>
    )
}