import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState();
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();
  

  return (
    <div className="Body">
      <div id="TodoListFormContainer">
        <div id="TitleContainer">
          <span id="TodoFormTitle">TODO</span>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTodoList((prev) => [...prev, content]);
            setContent("");
            inputRef.current.value = "";
          }}
          id="InputContainer"
        >
          <input
            ref={inputRef}
            id="textInput"
            onChange={(e) => {
              setContent(e.target.value);
            }}
            type="text"
          />
          <input id="submitBtn" type="submit" placeholder="제출" />
        </form>
        <div id="contentContainer">
          {todoList.map((todo) => (
            <li>{todo}</li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;