import { useState } from "react";
import "./App.css";
import { Task, TaskInfo } from "./components/Task";
import { NewTask } from "./components/NewTask";

function App() {
  const [tasks, setTasks] = useState<TaskInfo[]>([]);

  const addTask = (newTask: TaskInfo) => setTasks([...tasks, newTask]);

  const removeTask = (task: TaskInfo) =>
    setTasks(tasks.filter((x) => x.id !== task.id));

  const setTask = (task: TaskInfo) =>
    setTasks(tasks.map((x) => (x.id == task.id ? task : x)));

  return (
    <main className="flex flex-col gap-2 mx-auto max-w-lg">
      <h1 className="text-2xl">todo</h1>
      <NewTask createTask={addTask} />
      {tasks.map((task) => (
        <Task
          key={task.id}
          info={task}
          onClickDone={() => removeTask(task)}
          onClickDelete={() => removeTask(task)}
          setTask={setTask}
        />
      ))}
    </main>
  );
}

export default App;
