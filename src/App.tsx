import { useState } from "react";
import { Task, TaskInfo } from "./components/Task";
import { NewTask } from "./components/NewTask";
import { Pill } from "./components/Pill";
import { EmptyPage } from "./components/EmptyPage";

function App() {
  const [tasks, setTasks] = useState<TaskInfo[]>([]);

  const addTask = (newTask: TaskInfo) => setTasks([...tasks, newTask]);

  const removeTask = (task: TaskInfo) =>
    setTasks(tasks.filter((x) => x.id !== task.id));

  const toggleDone = (task: TaskInfo) =>
    setTasks(
      tasks.map((x) =>
        x.id === task.id ? { ...x, isChecked: !x.isChecked } : x
      )
    );

  return (
    <div className="h-screen text-grey100">
      <header className="flex items-center justify-center w-screen h-1/4 bg-grey700">
        <h1 className="text-2xl text-white">todo</h1>
      </header>
      <main className="flex flex-col gap-2 mx-auto -mt-7 max-w-lg">
        <NewTask createTask={addTask} />
        <section
          id="allTasks"
          className="flex flex-col gap-3 justify-between mt-16"
        >
          <div className="flex flex-row gap-2 items-center mb-4">
            <h2 className="font-bold text-blue">All Tasks</h2>
            <Pill hidden value={String(tasks.length)} />
            <div className="flex-1" />
            <span className="font-bold text-purple">Completed</span>
            <Pill
              value={`${tasks.filter((x) => x.isChecked).length} of ${
                tasks.length
              }`}
            />
          </div>
          {tasks.length === 0 && (
            <>
              <hr className="mb-12 text-grey400" />
              <EmptyPage />
            </>
          )}
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
        </section>
      </main>
    </div>
  );
}

export default App;
