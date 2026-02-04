import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";
import Field from "./Field";

const SearchTaskForm = () => {
    const {
        searchQuery,
        setSearchQuery
    } = useContext(TasksContext);

    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form 
            className="todo__form"
            onSubmit={onSubmit}
        >
            <Field 
                className="todo__field"
                label="Search task"
                id="search-task"
                type="search"
                value={searchQuery}
                onInput={( {target} ) => setSearchQuery(target.value)}
            />
        </form>
    )
}

export default SearchTaskForm;