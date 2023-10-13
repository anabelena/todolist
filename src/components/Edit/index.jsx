import { Fragment } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import { TextField } from "../../components";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const categories = ["Home", "Work", "College", "Personal"];

export default function Edit({ task }) {
  const [open, setOpen] = useState(false);

  const [category, setCategory] = useState(categories[0]);

  return (
    <>
      <PencilIcon
        className="h-6 w-6 text-blue-600 cursor-pointer"
        onClick={() => setOpen(true)}
      />

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="bg-white mx-auto w-full md:max-w-sm rounded  p-4 ">
            <Dialog.Title> Edit : {task.text} </Dialog.Title>

            <div className="my-5">
              <TextField
                value={task.text}
                placeholder="Edit your taks"
                className="rounded-r"
              />

              <div className="mt-5">
                <Listbox value={category} onChange={setCategory}>
                  <Listbox.Button className="w-full flex items-center justify-between px-3 border pl-3 py-3 rounded shadow ">
                    <span> {category} </span>
                    <ChevronUpDownIcon className="h-5 w-5" />
                  </Listbox.Button>

                  <div className="transition-all duration-100 ease-in">
                    <Listbox.Options className="w-full border  pt-1 rounded mt-1 ">
                      {categories.map((item) => (
                        <Listbox.Option 
                        key={item} 
                        value={item} 
                        className={`py-2 px-3 hover:bg-blue-200 hover:text-blue-600  cursor-pointer ${item == category ? "bg-blue-200" : "bg-white"}`}
                        >
                        {item}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
