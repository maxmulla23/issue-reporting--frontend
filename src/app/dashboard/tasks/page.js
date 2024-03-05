'use client'
import CreateTask from "@/app/components/forms/create-taskform";
import { Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react";

export default function page() {
    return(
        <div>
        <h1>this is tasks page</h1>

        <Popover>
            <PopoverHandler>
            <button className="bg-teal-400 text-white font-bold py-2 px-4 border border-teal-400 mt-3">Create Task</button>
            </PopoverHandler>
            <PopoverContent>
              <CreateTask />
            </PopoverContent>
          </Popover>
          </div>
    )
}