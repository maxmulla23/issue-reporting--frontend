"use client"
import {
    Card,
    CardBody,
    Input,
    Textarea,
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Select,
  Option,
  } from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import axios from "axios";

export default function CreateTaskForm()
{
    const [formData, setFormData] = React.useState({
        name: "",
        description: "",
        developerId: "",
        endDate:"",
    })
  const [date, setDate] = React.useState(null);
  const [data, setData] = React.useState()

    React.useEffect(() => {
      async function getDevs () {
        try {
          const devs = await axios.get(`/api/developer`)
        console.log(devs)
        setData(devs.data)
        console.log(devs.data)
        } catch (error) {
          console.log(error)
        }
        
      }
      getDevs()
    }, [])

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let newFormdata = {
            ...formData,
            
        }
        // console.log(newFormdata)
        const response = await axios.post("/api/task", newFormdata)

        // console.log(response)
        toast.success("Task created successfully")
      } catch(error) {
        console.log(error)
        toast.error("Failed! Please check your inputs.")
      }
    }
    

    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value

      const currentInputFieldData = {
        [name]: value,
      }
      const updatedData ={
        ...formData,
        ...currentInputFieldData,
      }
      setFormData(updatedData)
    }


    return(
        <>
        <div>
            <Card className="w-96">
                <CardBody className="flex flex-col gap-6">
                    
                <Input 
                        onChange={handleChange}
                        color="teal"
                        type="text"
                        label="Title" 
                        size="lg"
                        name="title"

                />
                <Textarea
                        onChange={handleChange}
                        color="teal"
                        type="text"
                        label="Description" 
                        name="description"
                        size="lg" 
                />
                <Select onChange={handleChange} name="developerId" value="developerId" label="choose a developer" color="teal">
                  {data?.map((data) => {
                    <Option key={data.id} value={data.id}>
                      {data.name}
                    </Option>
                  })}
                </Select>
                
        
        <Popover placement="bottom">
        <PopoverHandler>
          <Input
            label="Choose End Date"
            onChange={handleChange}
            value={date ? format(date, "PPP") : ""}
          />
        </PopoverHandler>
        <PopoverContent>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            showOutsideDays
            className="border-0"
            classNames={{
              caption: "flex justify-center py-2 mb-4 relative items-center",
              caption_label: "text-sm font-medium text-gray-900",
              nav: "flex items-center",
              nav_button:
                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
              nav_button_previous: "absolute left-1.5",
              nav_button_next: "absolute right-1.5",
              table: "w-full border-collapse",
              head_row: "flex font-medium text-gray-900",
              head_cell: "m-0.5 w-9 font-normal text-sm",
              row: "flex w-full mt-2",
              cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal",
              day_range_end: "day-range-end",
              day_selected:
                "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
              day_today: "rounded-md bg-gray-200 text-gray-900",
              day_outside:
                "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
              day_disabled: "text-gray-500 opacity-50",
              day_hidden: "invisible",
            }}
            components={{
              IconLeft: ({ ...props }) => (
                <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
              ),
              IconRight: ({ ...props }) => (
                <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
              ),
            }}
          />
        </PopoverContent>
      </Popover>

        <Button 
        onClick={handleSubmit}
        variant="gradient"
        color="teal"
        >
            Create Task
        </Button>
       
                </CardBody>
            </Card>
        </div>
        </>
    )}
