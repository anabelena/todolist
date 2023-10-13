import { useState } from "react";
import Swal from "sweetalert2";
import { create } from "../../services";
import { TextField} from "../../components";

export default function FormTask({getTasks}) {
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

    await getTasks();

  };



  return (
    <>
      <h2 className="font-bold text-2xl mt-3  "> Add a task </h2>
      <form className="my-5 flex items-center" onSubmit={handleFormSubmit}>
        <TextField value={textTask} onChange={handleInputChange}/>
        <button className="bg-blue-400 px-2 py-3 rounded-r text-white border border-blue-400">
          Add
        </button>
      </form>
    </>
  );
}
