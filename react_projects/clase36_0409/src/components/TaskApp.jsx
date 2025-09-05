import { useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";

const TaskApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
        },
      ]);
    }
  };

  return (
    <div className="p-6 bg-indigo-50 rounded-lg text-black">
      <h2 className="text-2xl font-bold mb-4">Task App with localStorage</h2>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="New Task"
          className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"

          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && addTask()}
        />
        <button
          onClick={addTask}
          className="bg-indigo-500 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-600"
        >
          Add Task
        </button>
      </div>

      <div>
        {tasks.map((task) => (
          <div>
            <input type="checkbox" />
            <span>{task.text}</span>
            <button>🗑️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskApp;
