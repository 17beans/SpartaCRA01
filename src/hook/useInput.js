import { useState, useCallback } from "react";

const useInput = (inputForm) => {
  const [inputState, setState] = useState(inputForm);
  //   const changeInputState = useCallback((e) => {
  //     const { name, value } = e.target;
  //     console.log("===>useInput 안");
  //     console.log(inputState);
  //     setState({
  //       ...inputState,
  //       [name]: value,
  //     });
  //   }, [inputState]);
  //
  //[문제] : useCallback depth 인자에 주시할 상태값을 넣지 않으면 제대로 값이 관리가 안된다
  //        왜그럴까?

  const changeInputState = (e) => {
    const { name, value } = e.target;
    console.log("===>useInput 안");
    console.log(inputState);
    setState({
      ...inputState,
      [name]: value,
    });
  };
  const reset = useCallback(() => setState(inputForm), [inputForm]);

  return [inputState, changeInputState, reset];
};

export default useInput;
