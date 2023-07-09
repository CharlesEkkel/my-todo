import { TiTickOutline } from "react-icons/ti";

interface TaskProps {
  onClickDone: () => void;
  info: TaskInfo;
}

export const Task = ({ onClickDone, info }: TaskProps) => {
  return (
    <div className="flex relative flex-row items-center p-2 max-w-md rounded shadow">
      <h2 className="flex-1 mr-4 text-left">{info.description}</h2>
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
  description: string;
  date: string;
  time: string;
}

export const basicTask: TaskInfo = {
  description: "Unpack the Hello Fresh meals.",
  date: "19/03/2021",
  time: "17:24",
};
