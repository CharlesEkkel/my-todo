import { useId } from "react";
import { BsCircle, BsTrash, BsCheckCircleFill } from "react-icons/bs";

interface TaskProps {
  onClickDone: () => void;
  onClickDelete: () => void;
  info: TaskInfo;
}

export const Task = (props: TaskProps) => {
  const taskId = useId();

  return (
    <div className="flex flex-row gap-4 items-start p-4 w-full rounded border shadow justify-baseline bg-grey500 border-grey400">
      <button className="mt-1 w-4 h-4" onClick={props.onClickDone}>
        {props.info.isChecked ? (
          <>
            <BsCheckCircleFill
              aria-hidden
              className="w-full h-full stroke-[0.5] text-purple"
            />
            <span className="sr-only">Unmark this task as completed</span>
          </>
        ) : (
          <>
            <BsCircle
              aria-hidden
              className="w-full h-full stroke-[0.5] text-blue"
            />
            <span className="sr-only">Mark this task as completed</span>
          </>
        )}
      </button>
      <label htmlFor={taskId} className="sr-only">
        Task Description:
      </label>
      <p
        id={taskId}
        className={`flex-1 mr-4 text-left ${
          props.info.isChecked && "line-through text-grey300"
        }`}
      >
        {props.info.description}
      </p>
      <button className="mt-1 w-4 h-4" onClick={props.onClickDelete}>
        <BsTrash aria-hidden className="w-full h-full stroke-0" />
        <span className="sr-only">Delete Task</span>
      </button>
    </div>
  );
};

export interface TaskInfo {
  id: number;
  description: string;
  isChecked: boolean;
}
