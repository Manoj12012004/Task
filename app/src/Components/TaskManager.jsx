import { useState } from "react";
import Dashboard from "./Dashboard";
import List from "./List";

function TaskManager() {
    const [tasks, setTasks] = useState(() => {
        return (JSON.parse(localStorage.getItem("tasks"))) || [];
    });

    const updateLocalStorage = (updatedTasks) => {
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    return (
        <div>
            <Dashboard tasks={tasks} setTasks={updateLocalStorage} />
            <List tasks={tasks} setTasks={updateLocalStorage} />
        </div>
    );
}

export default TaskManager;
