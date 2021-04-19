/* eslint-disable */
import React, { Component } from "react";
import Form from "./Form";

class App extends Component {
  handleButtonClick = () => {
    console.log("로그인 시도");
  };

  render() {
    const wrap = {
      margin: "auto",
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

    return (
      <div style={wrap}>
        <h2>로그인</h2>
        <Form>
          <h2>ID:</h2>
          <input
            style={item}
            type={"text"}
            onChange={() => console.log("사용자 아이디 입력 중")}
          ></input>

          <h2>PW:</h2>
          <input
            style={item}
            type={"password"}
            onChange={() => console.log("사용자 비밀번호 입력 중")}
          ></input>
          <button style={btn} type={"submit"} onClick={this.handleButtonClick}>
            로그인하기
          </button>
        </Form>
      </div>
    );
  }
}

export default App;
