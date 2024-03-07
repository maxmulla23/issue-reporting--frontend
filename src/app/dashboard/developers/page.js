'use client'

import { Button, Typography } from "@material-tailwind/react"

const TABLE_HEAD = ["Name", "Email", "Phone Number"]

export default function Page()
{
    return(
        <div className="mt-10">
            <Typography variant="h2" color="teal">Developers</Typography>
            <Button color="teal" className="mt-5">Add Developer</Button>
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        
                    </tr>
                </thead>
            </table>
        </Card>

        </div>
    )
}