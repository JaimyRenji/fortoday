import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
const CustomForm=({addTask})=>{
    const [task,setTask]=useState("");
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        addTask({
            name:task,
            checked:false,
            id:Date.now()
        })
        setTask("")
    }
    return(
        <form 
        className="todo"
        onSubmit={handleFormSubmit}>
            <div className="wrapper">
                <input
                type="text"
                id="task"
                className="input"
                value={task}
                onInput={(e)=>setTask(e.target.value)}
                required 
                autoFocusmaxLength
                placeholder="Add New Task..."/>
                <label htmlFor="task"
                className="label"
                ></label>
                <button 
            className="btn"
            aria-label="Add Task"
            type="submit"
            >
            <FontAwesomeIcon className="plus" icon={faPlus} />

            </button>
            </div>
        </form>
    )
}
export default CustomForm