import { useId } from "react";

interface TaskProps {
  onClickDone: () => void;
  onClickDelete: () => void;
  info: TaskInfo;
}

export const Task = (props: TaskProps) => {
  const taskId = useId();
  const unmarkId = useId();
  const markId = useId();
  const trashId = useId();

  return (
    <div className="flex flex-row items-start w-full rounded border shadow justify-baseline bg-grey500 border-grey400">
      <button className="m-4 w-4 h-4" onClick={props.onClickDone}>
        {props.info.isChecked ? (
          <>
            <div className="p-0.5 rounded-full bg-purple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                className="w-full h-full stroke-white"
                aria-labelledby={unmarkId}
              >
                <title id={unmarkId}>Unmark this task as completed</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>

            <span className="sr-only"></span>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              className="w-full h-full stroke-blue hover:fill-blue-dark"
              aria-labelledby={markId}
            >
              <title id={markId}>Mark this task as completed</title>
              <circle cx={12} cy={12} r={11} />
            </svg>
          </>
        )}
      </button>
      <label htmlFor={taskId} className="sr-only">
        Task Description:
      </label>
      <p
        id={taskId}
        className={`flex-1 mt-3 mb-3 text-left ${
          props.info.isChecked && "line-through text-purple"
        }`}
      >
        {props.info.description}
      </p>
      <button
        className="p-1 m-3 w-6 h-6 rounded hover:transition hover:bg-grey600"
        onClick={props.onClickDelete}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="w-full h-full stroke-grey200"
          aria-labelledby={trashId}
        >
          <title id={trashId}>Delete Task</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
};

export interface TaskInfo {
  id: number;
  description: string;
  isChecked: boolean;
}
