import { useState } from "react";
import { Card, FormTask,Task } from "./components";


export default function App() {
  return (
    <div className="mt-10">
      <Card>
        <FormTask />
      </Card>
      <Task text="Buy Grocery"/>
      <Task text="Send email to Mark"/>
      <Task text="Complete Assignment"/>
      <Task text="Send email to Karlos"/>
    </div>
  );
}
