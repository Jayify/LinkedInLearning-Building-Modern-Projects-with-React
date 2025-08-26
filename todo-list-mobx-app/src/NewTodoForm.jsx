import { useState } from "react";
import todosStore from "./mobxTodos";

export default function NewTodoForm() {
    const [inputText, setInputText] = useState('');
    return (
        <div>
            <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} />
            <button 
                onClick={() => {
                    todosStore.createTodo(inputText);
                    setInputText('');
                }}
            >Create Todo</button>
        </div>
    )
}