import { useState } from "react";
import { useRecoilState } from "recoil";
import { todos as todosAtom } from "./atoms";

export default function NewTodoForm() {
    const [ todos, setTodos ] = useRecoilState(todosAtom)
    const [inputText, setInputText] = useState('');
    return (
        <div>
            <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} />
            <button 
                onClick={() => {
                    setTodos([todos, {text: inputText, isCompleted: false}]);
                    setInputText('');
                }}
            >Create Todo</button>
        </div>
    )
}