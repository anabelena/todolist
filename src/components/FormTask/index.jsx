import { useState } from "react";
import Swal from "sweetalert2";
import { create } from "../../services";

export default function FormTask() {
  const [textTask, setTextTask] = useState("");

  const handleInputChange = (e) => setTextTask(e.target.value);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!textTask) {
      Swal.fire({
        title: "Error",
        text: "You must to add a task",
        icon: "error",
      });
      return;
    }

    await create({
      text: textTask,
      status: "created",
    });

    setTextTask("");
    Swal.fire({
        title:"Success",
        text:"Task was added correctly",
        icon:"success"
    })

  };

  return (
    <>
      <h2 className="font-semibold text-xl mt-3">Add a task </h2>
      <form className="my-5 flex items-center" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={textTask}
          onChange={handleInputChange}
          className="border w-full px-2 py-3 rounded-l outline-none"
          placeholder="Your task goes here ..."
        />
        <button className="bg-green-400 px-2 py-3 rounded-r text-white border border-green-400">
          Add
        </button>
      </form>
    </>
  );
}
