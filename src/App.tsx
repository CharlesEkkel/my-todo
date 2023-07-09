import { useState } from "react";
import "./App.css";
import { Task, TaskInfo, basicTask } from "./components/Task";
import { Listbox } from "@headlessui/react";

function App() {
  const [tasks, setTasks] = useState([basicTask, basicTask, basicTask]);
  const [sortMethod, setSortMethod] = useState("creation");

  const removeTask = (task: TaskInfo) =>
    setTasks(tasks.filter((x) => x.id !== task.id));

  const setTask = (task: TaskInfo) =>
    setTasks(tasks.map((x) => (x.id == task.id ? task : x)));

  const setSort = (newMethod: SortingMethod) => {
    setSortMethod(newMethod);

    if (newMethod === "creation") tasks.sort((a, b) => (a.id < b.id ? 1 : -1));
    else if (newMethod === "alphabetical")
      tasks.sort((a, b) => (a.description < b.description ? 1 : -1));
  };

  return (
    <main className="flex flex-col gap-2 items-center">
      <h1 className="mb-6 text-2xl">Todo</h1>
      <div className="mb-4">
        <SortSelector value={sortMethod} setSortingMethod={setSort} />
      </div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          info={task}
          onClickDone={() => removeTask(task)}
          setTask={setTask}
        />
      ))}
    </main>
  );
}

export default App;

type SortingMethod = "creation" | "alphabetical";

interface SortSelectorProps {
  value: string;
  setSortingMethod: (method: SortingMethod) => void;
}

const SortSelector = (props: SortSelectorProps) => (
  <Listbox value={props.value} onChange={props.setSortingMethod}>
    <Listbox.Button className="p-1 text-sm bg-white rounded-lg shadow transition-shadow hover:shadow-md active:shadow-none">
      Sort by: {props.value}
    </Listbox.Button>
    <Listbox.Options>
      {["creation", "alphabetical"].map((method) => (
        <Listbox.Option key={method} value={method}>
          {method}
        </Listbox.Option>
      ))}
    </Listbox.Options>
  </Listbox>
);
