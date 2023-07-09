import { useState } from "react";
import "./App.css";
import { Task, TaskInfo, basicTask } from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([basicTask]);

  const removeTask = (task: TaskInfo) =>
    setTasks(tasks.filter((x) => x !== task));

  return (
    <body className="flex flex-col items-center">
      <h1 className="mb-6 text-2xl">Todo</h1>
      {tasks.map((task) => (
        <Task info={task} onClickDone={() => removeTask(task)} />
      ))}
    </body>
  );
}

export default App;
