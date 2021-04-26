/* eslint-disable */
import React, { useState } from "react";
import Form from "./Form";
import Main from "./Main";

export default function Login() {
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

  const [userData, setUserData] = useState({});
  const { id, pw } = userData;
  const [login, setLogin] = useState(false);

  const _change = (e) => {
    console.log("값 변경");
    const { value, name } = e.target;
    console.log(value, name);
    setUserData({
      ...userData,
      [name]: value,
    });
    console.log("userData: ");
    console.log(userData);
  };

  const handleButtonClick = () => {
    console.log("로그인 시도");
    if (id === "17kbeans" && pw === "qwer") {
      setLogin(true);
    } else {
      console.log("id: " + id);
      console.log("pw: " + pw);
    }
  };

  return login ? (
    <Main setLogin={setLogin} id={userData.id} />
  ) : (
    <div style={wrap}>
      <div style={header}>
        <div style={headerText}>로그인</div>
      </div>
      <h1>로그인</h1>
      <Form>
        <h1>ID</h1>
        <input style={item} type={"text"} name="id" onChange={_change}></input>

        <h1>PW</h1>
        <input
          style={item}
          type={"password"}
          name="pw"
          onChange={_change}
        ></input>
        <button style={btn} type={"submit"} onClick={handleButtonClick}>
          로그인하기
        </button>
      </Form>
    </div>
  );
}
