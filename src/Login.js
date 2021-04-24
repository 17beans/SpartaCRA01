/* eslint-disable */
import React from "react";
import Form from "./Form";

export default function Login() {
  const handleButtonClick = () => {
    console.log("로그인 시도");
  };

  const wrap = {
    textAlign: "center",
  };
  const item = {
    border: 0,
    width: 200,
    borderBottom: "3px solid red",
  };
  const btn = {
    width: 200,
    height: 40,
    background: "white",
    borderColor: "green",
    border: "3px solid green",
    marginTop: 20,
  };
  const header = {
    height: 80,
    background: "green",
    textAlign: "right",
    color: "white",
    display: "inline-block",
    width: "100%",
    // marginTop: 0,
    marginBottom: 100,
  };
  const headerText = {
    fontSize: 30,
    paddingTop: 18,
  };

  return (
    <div style={wrap}>
      <div style={header}>
        <div style={headerText}>로그인</div>
      </div>
      <h1>로그인</h1>
      <Form>
        <h1>ID</h1>
        <input
          style={item}
          type={"text"}
          onChange={() => console.log("사용자 아이디 입력 중")}
        ></input>

        <h1>PW</h1>
        <input
          style={item}
          type={"password"}
          onChange={() => console.log("사용자 비밀번호 입력 중")}
        ></input>
        <button style={btn} type={"submit"} onClick={handleButtonClick}>
          로그인하기
        </button>
      </Form>
    </div>
  );
}
