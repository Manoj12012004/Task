import { useState } from "react";

function List({ tasks, setTasks }) {
    const [search,setSearch]=useState("");
    const deleteItem = (index) => {
        const updatedTasks = tasks.filter((task) => task.task_id !== index);
        setTasks(updatedTasks);
    };
    const toggle=(task_id)=>{
        const updateTask=tasks.map((task)=>task.task_id===task_id?{...task,completed:!task.completed}:task)
        setTasks(updateTask)
    }
    
    const filterd=tasks.filter((task)=>task.task_title.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className="container-fluid">
            <table className="container">
                <tr className="row">
                    <th className="col d-flex justify-content-center">Title</th>
                    <th className="col d-flex justify-content-center">Priority</th>
                    <th className="col d-flex justify-content-center"><div className="d-flex justify-content-center">
                    <input type="text" placeholder="Search"name="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    </div></th>
                </tr>
                {filterd.map((task) => (
                    <tr key={task.task_id} className="row d-flex justify-content-center">
                        <td className="col row d-flex justify-content-center">
                        <div className="col d-flex justify-content-center">{task.task_title}</div>
                        </td>
                        <td className="col d-flex justify-content-center">
                            {task.queue}  
                        </td>    
                        <td className="col d-flex justify-content-center">
                        <button
                        className="btn btn-primary d-flex justify-content-center"
                        onClick={() => deleteItem(task.task_id)}>
                        DELETE
                        </button>
                        {task.completed===false ? (<><label htmlFor={`complete-${task.task_id}`}>Complete:</label><input type="checkbox" name="complete" id={`complete-${task.task_id}`} checked={task.completed} onChange={()=>toggle(task.task_id)}/></>):("Completed")}
                        </td> 
                    </tr>
                ))}
            </table>
            

            
        </div>
    );
}

export default List;
