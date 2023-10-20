/* eslint-disable react/prop-types */
import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Dialog } from "@headlessui/react";
import { Button, Select, TextField } from "../../components";
import { update } from "../../services";
import Swal from "sweetalert2";

const categories = ["Home", "Work", "College", "Personal"];
const priorities = ["Low", "Medium", "High","ASAP"];


export default function Edit({ task, getTasks }) {

  const [open, setOpen] = useState(false);
  const [text,setText] = useState(task.text);  

  const [category, setCategory] = useState(task.category ?? categories[0]);
  const [priority, setPriority] = useState(task.priority ?? priorities[0]);


  const handleChange = (e) => setText(e.target.value);

  const handleEditSubmit = async (e) => {
    e.preventDefault(); //avoid recargar web

    const body = {
      text,
      category,
      priority,
    }

    await update(task.id,body,"tasks");

    Swal.fire({
      title: "Success",
      icon:"success",
      text:"Task has been uptaded",
    })

    //close modal
    setOpen(false);
    //refresh tasks
    await getTasks();

  };

  return (
    <>
      <PencilIcon
        className="h-6 w-6 text-blue-500 cursor-pointer"
        onClick={() => setOpen(true)}
      />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="bg-white mx-auto w-full  md:max-w-md rounded p-4">
            <Dialog.Title className=" text-lg font-semibold" > Edit task : <span className=" text-blue-600 ">{task.text}</span>  </Dialog.Title>
            <form className="my-5" onSubmit={handleEditSubmit}>
              <TextField
                value={text}
                onChange={handleChange}
                placeholder="Your task goes here ..."
                className="rounded-r text-blue-600"
              />
              <div className="mt-5">
                <Select
                  value={category}
                  onChange={setCategory}
                  items={categories}
                />
              </div>
              <div className="mt-5">
              <Select 
              value={priority}
              onChange={setPriority}
              items={priorities}
              />
              </div>
              <div className="mt-5">
                <Button 
                type="submit"
                text="Update" 
                className="rounded-l w-full text-lg font-semibold"/>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}