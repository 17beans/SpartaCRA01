//eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import List from "./List";
import useInput from "./hook/useInput";

const Book = () => {
  const date = new Date();
  const [bookState, setBookState] = useState([
    {
      _id: date.getTime(),
      name: "김건희",
      phone: "01080775647",
    },
  ]);
  //   const [inputState, setInputState] = useState({
  //     name: "",
  //     phone: "",
  //   });

  const [inputState, changeInputState, reset] = useInput({
    name: "",
    phone: "",
  });

  console.log(inputState);

  useEffect(() => {
    //console.log("부모 컴포넌트가 화면에 나타남");
    //console.log(bookState);
    return () => {
      //console.log("부모 컴포넌트가 화면에서 사라짐");
    };
  }, [bookState]);

  const changeInput = (e) => changeInputState(e);

  const addPhone = async () => {
    const newPhone = {
      _id: date.getTime(),
      name: inputState.name,
      phone: inputState.phone,
    };
    await setBookState(bookState.concat(newPhone));
    await reset({
      name: "",
      phone: "",
    });
  };
  const deletePhone = (_id) => {
    //console.log(_id);
    setBookState(bookState.filter((p) => p._id !== _id));
  };
  const phoneList = bookState;
  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          value={inputState.name}
          onChange={changeInput}
        />
        <input
          type="text"
          name="phone"
          value={inputState.phone}
          onChange={changeInput}
        />
        <button onClick={addPhone}>번호 등록</button>
      </div>

      <List phone={phoneList} deletePhone={deletePhone} />
    </div>
  );
};

export default Book;
