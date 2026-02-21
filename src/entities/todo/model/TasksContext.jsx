import { createContext, useMemo } from "react";
import useTasks from "./useTasks";
import useIncompleteTaskScroll from "./useIncompleteTaskScroll";

export const TasksContext = createContext({});

export const TasksProvider = (props) => {
    const {
        children
    } = props;

    const {
        tasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        addTask,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        disappearingTaskId,
        appearingTaskId
    } = useTasks();

    const {
        firstIncompleteTaskRef,
        firstIncompleteTaskId
    } = useIncompleteTaskScroll(tasks);

    const value = useMemo(() => ({
        tasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        addTask,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        disappearingTaskId,
        appearingTaskId,
        firstIncompleteTaskRef,
        firstIncompleteTaskId
    }), [
        tasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        addTask,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        disappearingTaskId,
        appearingTaskId,
        firstIncompleteTaskRef,
        firstIncompleteTaskId
    ]);

    return (
        <TasksContext.Provider
            value={value}
        >
            {children}
        </TasksContext.Provider>
    )
}