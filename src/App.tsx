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

  const toggleDone = (task: TaskInfo) =>
    setTasks(
      tasks.map((x) =>
        x.id === task.id ? { ...x, isChecked: !x.isChecked } : x
      )
    );

  return (
    <main className="flex flex-col gap-2 mx-auto max-w-lg">
      <h1 className="text-2xl">todo</h1>
      <NewTask createTask={addTask} />
      {tasks
        .filter((x) => !x.isChecked)
        .map((task) => (
          <Task
            key={task.id}
            info={task}
            onClickDone={() => toggleDone(task)}
            onClickDelete={() => removeTask(task)}
          />
        ))}
      {tasks
        .filter((x) => x.isChecked)
        .map((task) => (
          <Task
            key={task.id}
            info={task}
            onClickDone={() => toggleDone(task)}
            onClickDelete={() => removeTask(task)}
          />
        ))}
    </main>
  );
}

export default App;
