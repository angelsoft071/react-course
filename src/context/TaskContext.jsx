import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
    }, []);

    function createTask(task) {
        setTasks([
            ...tasks,
            {
                id: task.le,
                title: task.title,
                description: task.description,
            },
        ]);
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter((task) => task.id !== taskId));
    }

    return (
        <TaskContext.Provider
            value={{
                tasks: tasks,
                createTask: createTask,
                deleteTask: deleteTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}
