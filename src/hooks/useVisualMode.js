import React, { useState, useEffect } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition (Value, replace = false) {
    if (replace) {
      history.pop();
      history.push(Value);
      setMode(Value);
    }else {
      history.push(Value);
      setMode(Value);
    }
    console.log(history);
  };
  function back (){
    if (history.length <= 1) {
    } else {
    history.pop();
    setMode(history[history.length - 1]);
    }
    console.log(mode);
  }

  return { mode, transition, back };
}


