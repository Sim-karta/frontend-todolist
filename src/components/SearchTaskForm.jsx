import Field from "./Field";

const SearchTaskForm = (props) => {
    const {
        onSearchInput
    } = props;

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
                onInput={( {target} ) => onSearchInput(target.value)}
            />
        </form>
    )
}

export default SearchTaskForm;