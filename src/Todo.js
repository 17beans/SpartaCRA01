import React from "react";
import "./Todo.css";

const Todo = ({ todo, idx, changeActive, deleteTodo }) => {
  const wrap = {
    display: "flex",
    height: 50,
    // border: "1px solid",
    justifyContent: "center",
  };
  const list = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px, solid black",
  };
  const del = {
    color: "orange",
    border: "1px solid orange",
    width: 20,
    height: 20,
    marginTop: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginLeft: 5,
  };

  return (
    <div style={wrap}>
      <div
        style={list}
        onClick={() => {
          changeActive(todo._id);
        }}
      >
        <h3 style={todo.active ? { textDecoration: "line-through" } : {}}>
          {/* {idx + 1}
          {":  "} */}
          {todo.title}
          {"   "}
          {/* {todo.active === false ? (
            <span className={"active"}>{"안함"}</span>
          ) : (
            <span className={"inactive"}>{"함"}</span>
          )} */}
        </h3>
      </div>
      <div
        style={del}
        className={"activeButton"}
        onClick={() => deleteTodo(todo._id)}
      >
        X
      </div>
    </div>
  );
};

export default Todo;
