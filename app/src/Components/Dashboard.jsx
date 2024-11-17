import { useState } from "react";

function Dashboard({ tasks, setTasks }) {
    const [taskInput, setTaskInput] = useState("");
    const [queue,setQueue]=useState("");
    const addTask = (e) => {
        if (!taskInput.trim()) {
            alert("Task title cannot be empty.");
            return;
        }
        const priority = parseInt(queue, 10);
        if (isNaN(priority) || priority < 0) {
            alert("Priority must be a positive number.");
            return;
        }
        e.preventDefault();
        setTasks([
            ...tasks,
            {
                task_id: Date.now(),
                task_title: taskInput.trim(),
                queue: priority,
                completed: false,
            },
        ]);
        setTaskInput("");
        setQueue("");
    };
    

    return (
        <div className="container">
            <div className="title d-flex justify-content-center"><h1>Task Management</h1></div>
            <form className="form d-flex justify-content-center" onSubmit={addTask}>
                <div className="form-group">
                    <input
                        type="text"
                        name="task-title"
                        id="task-title"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                        placeholder="Enter a task"
                    />
                </div>
                <div className="form-group">
                    <input type="number" placeholder="Priority" value={queue} onChange={(e)=>setQueue(Number(e.target.value))}/>
                </div>
                <div className="form-group">
                <button type="submit" className="btn btn-add btn-primary">
                    ADD
                </button>
                </div>
            </form>
        </div>
    );
}

export default Dashboard;
