import { useId } from "react";
import { BsCircle, BsTrash, BsCheckCircleFill } from "react-icons/bs";

interface TaskProps {
  onClickDone: () => void;
  onClickDelete: () => void;
  setTask: (info: TaskInfo) => void;
  info: TaskInfo;
}

export const Task = (props: TaskProps) => {
  const taskId = useId();

  return (
    <div className="flex flex-row gap-2 items-center p-2 w-full rounded shadow justify-baseline bg-card">
      <button className="w-5 h-5" onClick={props.onClickDone}>
        <BsCircle aria-hidden className="w-full h-full stroke-0" />
        <span className="sr-only">Mark as completed</span>
      </button>
      <label htmlFor={taskId} className="sr-only">
        Task Description:
      </label>
      <p
        id={taskId}
        className="flex-1 mr-4 text-left bg-transparent resize-none"
      >
        {props.info.description}
      </p>
      <button className="w-5 h-5" onClick={props.onClickDelete}>
        <BsTrash aria-hidden className="w-full h-full stroke-0" />
        <span className="sr-only">Delete Task</span>
      </button>
    </div>
  );
};

export interface TaskInfo {
  id: number;
  description: string;
}
