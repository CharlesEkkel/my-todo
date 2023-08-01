import { useState } from "react";
import { TaskInfo } from "./Task";
import { useForm, SubmitHandler } from "react-hook-form";

type NewTaskProps = {
  createTask: (t: TaskInfo) => void;
};

type Inputs = {
  taskDesc: string;
};

export const NewTask = ({ createTask }: NewTaskProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [nextId, setNextId] = useState(0);

  const handleNewTask: SubmitHandler<Inputs> = (data) => {
    createTask({
      id: nextId,
      description: data.taskDesc,
      isChecked: false,
    });

    setNextId(nextId + 1);
  };

  return (
    <form
      className="flex flex-row gap-2 justify-center -mt-6 w-full h-12"
      onSubmit={handleSubmit(handleNewTask)}
    >
      <label className="sr-only" htmlFor="taskDesc">
        Task Description:
      </label>
      <input
        className="flex-1 p-3 w-24 rounded-lg border text-grey100 bg-grey500 border-grey700"
        type="text"
        id="taskDesc"
        placeholder="What's your next task?"
        {...register("taskDesc", { required: true })}
      />
      {errors.taskDesc && <span>Task description is required</span>}
      <button
        className="flex flex-row gap-1 items-center p-4 text-white rounded-lg bg-blue-dark hover:bg-blue"
        type="submit"
      >
        Create
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="w-6 h-6 stroke-white"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </form>
  );
};
