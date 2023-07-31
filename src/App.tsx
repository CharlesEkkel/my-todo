import { useState } from "react";
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
    <div className="h-screen">
      <header className="flex items-center justify-center w-screen h-1/4 bg-grey700">
        <h1 className="text-2xl text-grey100">todo</h1>
      </header>
      <main className="flex flex-col gap-2 mx-auto -mt-7 max-w-lg">
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
    </div>
  );
}

export default App;
