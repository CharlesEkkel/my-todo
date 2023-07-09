import { useId } from "react";
import { TiTickOutline } from "react-icons/ti";

interface TaskProps {
  onClickDone: () => void;
  setTask: (info: TaskInfo) => void;
  info: TaskInfo;
}

export const Task = ({ onClickDone, setTask, info }: TaskProps) => {
  const taskId = useId();

  return (
    <div className="flex relative flex-row items-center p-2 max-w-md bg-white rounded shadow">
      <label htmlFor={taskId} className="sr-only">
        Task Description:
      </label>
      <textarea
        id={taskId}
        className="flex-1 mr-4 text-left resize-none"
        value={info.description}
        onChange={(e) => setTask({ ...info, description: e.target.value })}
      />
      <div className="flex flex-col mr-6 text-sm">
        <span className="sr-only">Due Date:</span>
        <p>{info.date}</p>
        <span className="sr-only">Due Time:</span>
        <p>{info.time}</p>
      </div>
      <button
        className="absolute right-1 bottom-1 w-6 h-6"
        onClick={onClickDone}
        title="Mark as completed"
      >
        <TiTickOutline aria-hidden className="w-full h-full stroke-0" />
        <span className="sr-only">Mark as completed</span>
      </button>
    </div>
  );
};

export interface TaskInfo {
  id: number;
  description: string;
  date: string;
  time: string;
}

export const basicTask: TaskInfo = {
  id: 1,
  description: "Unpack the Hello Fresh meals.",
  date: "19/03/2021",
  time: "17:24",
};
