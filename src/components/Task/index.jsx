import {Card, Edit} from "../../components";

import {CheckCircleIcon,TrashIcon} from "@heroicons/react/24/solid";


export default function Task ({task}) {
    return(
        <Card className="flex justify-between gap-2">
        <p className="italic font-semibold text-slate-700 capitalize "> 
        {task.id}.  {task.text} </p>
        <div className="flex gap-3">
          <CheckCircleIcon className="h-6 w-6 text-green-600 " />
          <Edit task={task}/>
          <TrashIcon className="h-6 w-6 text-black " />
        </div>
      </Card>
    )
}

