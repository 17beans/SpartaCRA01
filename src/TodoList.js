import React, { useState, useRef } from "react";
import "./App.css";
import Todo from "./Todo";

export default function TodoList(props) {
  const wrap = {
    // display: "flex",
    marginLeft: 15,
  };
  const board = {
    border: "1px solid",
    width: 300,
    paddingBottom: 30,
    borderRadius: 30,
    marginLeft: 10,
    marginRight: 10,
  };
  const title = {
    display: "flex",
    justifyContent: "center",
  };

  const todoInputRef = useRef();

  // const [todo, setState] = useState([
  //   { _id: 0, title: "치킨먹기", active: false },
  //   { _id: 1, title: "피자먹기", active: false },
  //   { _id: 2, title: "햄버거먹기", active: false },
  // ]);

  const [todo, setState] = useState(props.desc);
  const addTodo = () => {
    const newToDoTitle = todoInputRef.current.value;
    const nextId = todo[todo.length - 1]._id + 1;
    const newToDo = {
      _id: nextId,
      title: newToDoTitle,
      active: false,
    };
    // setState([...todo, newToDo]);
    setState(todo.concat(newToDo));
    todoInputRef.current.value = "";
  };
  const inputPress = (e) => {
    if (e.key === "Enter") {
      console.log("enter press here! ");
      addTodo();
    }
  };
  const changeActive = (id) => {
    console.log("변경 해야 할 목록 : " + id);
    setState(
      todo.map((td) => (td._id === id ? { ...td, active: !td.active } : td))
    );
  };
  const deleteTodo = (id) => {
    console.log("삭제 할 목록 : " + id);
    setState(todo.filter((td) => td._id !== id));
  };

  return (
    <div style={wrap}>
      <div className="App" style={board}>
        <div style={title}>
          <h2 className="Title">{props.title}</h2>
          <h2>
            <div
              style={{ marginLeft: 10 }}
              onClick={() => {
                console.log(props.idx);
                props.deleteTodoList(props.idx);
              }}
            >
              지우기
            </div>
          </h2>
        </div>
        {todo.map((td, i) => (
          <Todo
            todo={td}
            idx={i}
            key={td._id}
            changeActive={changeActive}
            deleteTodo={deleteTodo}
          />
        ))}

        <input
          style={{
            marginTop: 20,
            borderRadius: 10,
            width: 250,
            height: 30,
            border: "1px solid",
          }}
          className="addToDoInput"
          type="text"
          name="addTodo"
          ref={todoInputRef}
          onKeyPress={inputPress}
        />
        {/* <button className="addToDoButton" onClick={addTodo}>
          {"할일 추가"}
        </button> */}
      </div>
    </div>
  );
}
