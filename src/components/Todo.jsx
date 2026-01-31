import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";

const Todo = () => {
    const tasks = [
        {id: 'task-1', title: 'Купити молоко', isDone: false},
        {id: 'task-2', title: 'Погладити кота', isDone: true},
    ]

    const deleteAllTasks = () => {
        console.log('delete all tasks');
    }

    const deleteTask = (taskId) => {
        console.log(`delete task: ${taskId}`);
    }

    const toggleTaskComplete = (taskId, isDone) => {
        console.log(`Task: ${taskId} ${isDone ? "done" : "not done"}`);
    }

    const filterTasks = (query) => {
        console.log(`Search: ${query}`);
    }

    const addTask = () => {
        console.log('Task add');
    }

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm addTask={addTask}/>
            <SearchTaskForm 
                onSearchInput={filterTasks}
            />
            <TodoInfo 
                total={tasks.length}
                done={tasks.filter(({isDone}) => isDone).length}
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <TodoList 
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo;