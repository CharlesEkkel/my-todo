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
    <form onSubmit={handleSubmit(handleNewTask)}>
      <label className="sr-only" htmlFor="taskDesc">
        Task Description:
      </label>
      <input
        type="text"
        id="taskDesc"
        placeholder="What's your next task?"
        {...register("taskDesc", { required: true })}
      />
      {errors.taskDesc && <span>Task description is required</span>}
      <input type="submit" />
    </form>
  );
};
