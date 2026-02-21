import { memo, useContext, useMemo } from "react";
import { TasksContext, TodoItem } from "@/entities/todo";

const TodoList = (props) => {
    const { styles } = props;

    const {
        tasks,
        searchQuery
    } = useContext(TasksContext);

    const filteredTasks = useMemo(() => {
        const clearSearchQuery = searchQuery.trim().toLowerCase();

        return clearSearchQuery.length > 0 
            ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery))
            : null
    }, [searchQuery, tasks]);

    const hasTasks = tasks.length > 0;
    const isEmptyFilteredTasks = filteredTasks?.length === 0;

    if(!hasTasks) {
        return (
            <div className={styles.emptyMessage}>There are no tasks yet</div>
        )
    }

    if(hasTasks && isEmptyFilteredTasks) {
        return (
            <div className={styles.emptyMessage}>Tasks not found</div>
        )
    }

    return (
        <ul className={styles.list}>
            {(filteredTasks ?? tasks).map((task) => (
                <TodoItem 
                    className={styles.item}
                    key={task.id}
                    {...task}
                />
            ))}
        </ul>
    )

    
}

export default memo(TodoList);