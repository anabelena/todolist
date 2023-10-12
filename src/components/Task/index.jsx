import Card from "../Card";
import {
    CheckCircleIcon,
    TrashIcon,
    PencilIcon,
  } from "@heroicons/react/24/solid";


export default function Task ({text}) {
    
    return(
        <Card className="flex justify-between gap-2">
        <p> {text} </p>
        <div className="flex gap-3">
          <CheckCircleIcon className="h-6 w-6 text-green-500 " />
          <TrashIcon className="h-6 w-6 text-blue-500 " />
          <PencilIcon className="h-6 w-6 text-red-500 " />
        </div>
      </Card>
    )
}
