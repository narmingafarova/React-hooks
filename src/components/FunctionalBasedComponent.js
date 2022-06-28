import React, { useEffect, useState, useContext, useReducer, useRef} from "react";
import { Context } from "../App";

//for useReducer
const initialstate = {
  flag: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_BUTTON":
      console.log(state, action);
      return {
        ...state,
        flag: !state.flag,
      };

    default:
      return state;
  }
};

function FunctionalBasedComponent() {
  const [count, setCount] = useState(0); //initial state
  const [flag, setFlag] = useState(false); //initial state
  console.log(count);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("effect is called only once on page loading");
  }, []); //componentDidMount in class component

  useEffect(() => {
    if (count === 5) {
      setFlag(true);
    }
  }, [count]); //componentDidUpdate

  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  }); //componentWillUnmount

  // return (
  //   <div>
  //     <button onClick={handleClick}>Click</button>
  //     {count}
  //     {flag && <p>count is 5</p>}
  //   </div>
  // );




  //context and useContext hook

  const getValueFromContext = useContext(Context);
  console.log(getValueFromContext);

  // return (
  //     <div>
  //         <button style={{backgroundColor: getValueFromContext}}>Click</button>
  //     </div>
  // );




  //useReducer hook

  const [state, dispatch] = useReducer(reducer, initialstate);
  console.log(state);
  // return (
  //   <div>
  //     <button onClick={() => dispatch({ type: "TOGGLE_BUTTON" })}>
  //       Toggle
  //     </button>
  //   </div>
  // );




  
  //   useRef hook

  const inputRef = useRef(null);
  console.log(inputRef);

  //   const handleFocus = () => {
  //     inputRef.current.focus();
  //   };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div>
      <input ref={inputRef} name="name" placeholder="Name" type={"text"} />
      {/* <button onClick={handleFocus}>Click</button> */}
    </div>
  );
}

export default FunctionalBasedComponent;
