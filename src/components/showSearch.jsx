import { useState } from "react";

function ShowSearch() {
    const [newSearchTerm, setNewSearchTerm] = useState("")

    function handleSubmit(event){
        event.preventDefault()
    }
    function handleChange(event){
        setNewSearchTerm(event.target.value)
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <label htmlFor="search-input">Search: </label>
            <input
                type="text"
                id = "search-input"
                value={newSearchTerm}
                onChange = {handleChange}
            />        
            <button>Go!</button>
        </form>
    )
}

export default ShowSearch