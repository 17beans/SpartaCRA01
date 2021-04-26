import React, { useRef, useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

export default function Main(props) {
  const wrap = {
    textAlign: "center",
  };
  const header = {
    height: 80,
    background: "green",
    textAlign: "right",
    color: "white",
    width: "100%",
    marginTop: 0,
    marginBottom: 20,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  };
  const profile = {
    fontSize: 30,
    display: "flex",
  };
  const headerText = {
    // marginTop: 18,
    fontSize: 30,
    background: "Transparent",
    color: "purple",
    border: 0,
    marginLeft: 20,
    textDecoration: "underline",
  };
  const btnNewBoard = {
    borderRadius: 50,
    background: "skyblue",
    width: 200,
    height: 40,
    fontWeight: "bold",
    fontSize: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const inputContainer = {
    display: "flex",
    marginLeft: 40,
    marginBottom: 50,
  };
  const itemContainer = {
    display: "flex",
    marginLeft: 50,
  };

  const [todoList, setTodoList] = useState([
    {
      _id: 0,
      title: "오늘의 식단",
      desc: [
        { _id: 0, title: "치킨먹기", active: false },
        { _id: 1, title: "피자먹기", active: false },
        { _id: 2, title: "햄버거먹기", active: false },
      ],
    },
    {
      _id: 1,
      title: "내일의 식단",
      desc: [
        { _id: 0, title: "참치김밥", active: false },
        { _id: 1, title: "참치김밥", active: false },
        { _id: 2, title: "참치김밥", active: false },
      ],
    },
    {
      _id: 2,
      title: "내일의 식단",
      desc: [],
    },
    {
      _id: 3,
      title: "내일의 식단",
      desc: [],
    },
    {
      _id: 4,
      title: "내일의 식단",
      desc: [],
    },
  ]);
  const addTodoList = () => {
    const newTodoList = todoListInputRef.current.value;
    const nextId = todoList[todoList.length - 1]._id + 1;
    const newToDos = {
      _id: nextId,
      title: newTodoList,
      desc: [],
    };
    // setState([...todo, newToDo]);
    setTodoList(todoList.concat(newToDos));
    todoListInputRef.current.value = "";
  };
  const _logout = () => {
    console.log("로그아웃 시도");
    props.setLogin(false);
  };
  const inputPress = (e) => {
    if (e.key === "Enter") {
      console.log("enter press here! ");
      addTodoList();
    }
  };
  const deleteTodoList = (idx) => {
    console.log("board 삭제");
    console.log("idx");
    console.log(idx);
    console.log("todoList: ");
    console.log(todoList);
    console.log("todoList.filer");
    console.log(todoList.filter((td) => td._id !== idx));

    setTodoList(todoList.filter((td) => td._id !== idx));
  };

  const todoListInputRef = useRef();

  return (
    <div style={wrap}>
      <div style={header}>
        <div style={profile}>
          {props.id}
          <a style={headerText} onClick={_logout} href="true">
            로그아웃
          </a>
        </div>
      </div>
      <div style={inputContainer}>
        <div style={btnNewBoard}>New Board</div>
        <input
          style={{
            marginLeft: 20,
            border: 0,
            borderBottom: "3px solid",
            borderColor: "#444",
            width: 300,
            fontSize: 20,
          }}
          type="text"
          name="addTodoList"
          ref={todoListInputRef}
          placeholder="보드 제목을 입력하세요"
          onKeyPress={inputPress}
        ></input>
      </div>
      <div style={itemContainer}>
        {todoList.map((td, i) => {
          return (
            <TodoList
              title={td.title}
              desc={td.desc}
              setTodoList={setTodoList}
              deleteTodoList={deleteTodoList}
              key={td._id}
              idx={td._id}
            />
          );
        })}
      </div>
    </div>
  );
}
