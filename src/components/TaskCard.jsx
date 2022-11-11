import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext);

    const confirmDelete = () => {
        if (confirm("Are you sure you want delete " + task.id)) {
            deleteTask(task.id);
        }
    };

    return (
        <div className="bg-gray-800 text-white p-4 rounded-md">
            <h1 className="text-xl font-bold capitalize">{task.title}</h1>
            <h2 className="text-gray-400">{task.description}</h2>
            <button className="bg-red-500 px-2 py-1 mt-4 rounded-md hover:bg-red-300" onClick={confirmDelete}>Remove</button>
        </div>
    );
}

export default TaskCard;
