import React, { createContext, useReducer } from "react";
export const themeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
  
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
case'CHANGE_UNDER':
return {...state,un:action.payload};
      default:
      return state;

  }
};
//
export function ContextTheme(props) {
  const [state, distpatch] = useReducer(themeReducer, {
   
    mode: "white",
un:'false'
  });


//
  const darkMode = (mode) => {
    distpatch({ type: "CHANGE_MODE", payload: mode });
  };
//
const Under=(un)=>{
    distpatch({ type: "CHANGE_UNDER", payload: un });

}










  return (
    <themeContext.Provider value={{ ...state, darkMode,Under}}>
      {props.children}
    </themeContext.Provider>
  );
}
