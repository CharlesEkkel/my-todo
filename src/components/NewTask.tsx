import { useState } from "react";
import { TaskInfo } from "./Task";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsPlusCircle } from "react-icons/bs";

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
      className="flex flex-row gap-2 justify-center w-full h-14"
      onSubmit={handleSubmit(handleNewTask)}
    >
      <label className="sr-only" htmlFor="taskDesc">
        Task Description:
      </label>
      <input
        className="flex-1 p-3 rounded-lg border text-grey300 bg-grey500 border-grey700"
        type="text"
        id="taskDesc"
        placeholder="What's your next task?"
        {...register("taskDesc", { required: true })}
      />
      {errors.taskDesc && <span>Task description is required</span>}
      <button
        className="flex flex-row gap-2 items-center p-4 rounded-lg bg-blue-dark text-grey100"
        type="submit"
      >
        Create <BsPlusCircle className="stroke-[0.5]" />
      </button>
    </form>
  );
};
