import { Fragment, useState } from "react";
import "./App.css";
import { Task, TaskInfo, basicTask } from "./components/Task";
import { Listbox } from "@headlessui/react";

function App() {
  const [tasks, setTasks] = useState([
    basicTask(1),
    basicTask(2, "First"),
    basicTask(3, "Next"),
  ]);
  const [sortMethod, setSortMethod] = useState("creation");

  const removeTask = (task: TaskInfo) =>
    setTasks(tasks.filter((x) => x.id !== task.id));

  const setTask = (task: TaskInfo) =>
    setTasks(tasks.map((x) => (x.id == task.id ? task : x)));

  const setSort = (newMethod: SortingMethod) => {
    setSortMethod(newMethod);

    if (newMethod === "creation")
      setTasks([...tasks].sort((a, b) => (a.id > b.id ? 1 : -1)));
    else if (newMethod === "alphabetical")
      setTasks(
        [...tasks].sort((a, b) => (a.description > b.description ? 1 : -1))
      );
  };

  return (
    <main className="flex flex-col gap-2 mx-auto max-w-lg">
      <div className="flex flex-row justify-between items-baseline mb-4 w-full">
        <span className="w-36" />
        <h1 className="text-2xl">Todo</h1>
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
    <div className="relative w-36">
      <Listbox.Button className="p-1 text-sm rounded-lg shadow transition-shadow hover:shadow-md active:shadow-none bg-button">
        Sort by: {props.value}
      </Listbox.Button>
      <Listbox.Options className="absolute z-10 mt-1 w-full rounded shadow transition ease-in-out bg-button max-h-sm">
        {["creation", "alphabetical"].map((method) => (
          <Listbox.Option key={method} value={method} as={Fragment}>
            {({ active, selected }) => (
              <li
                className={`z-20 w-full ${
                  active
                    ? "bg-active"
                    : selected
                    ? "bg-slate-500"
                    : "bg-current"
                } rounded`}
              >
                {method}
              </li>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </div>
  </Listbox>
);
