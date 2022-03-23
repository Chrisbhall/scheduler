import { useState} from "react";

export default function useVisualMode(initial) {
  /*
manages transitions of the display from errors/shows/empty....
  */
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition (Value, replace = false) {
    if (replace) {
      setHistory(Value);
      setMode(Value);
    } else {
      setMode(Value);
    }
    /*if (replace) {
      history.pop();
      history.push(Value);
      setMode(Value);
    }else {
      history.push(Value);
      setMode(Value);
    }*/
  };
  function back (){
    /*if (history.length <= 1) {
    } else {*/
    //history.pop();
    setMode(history[history.length - 1]);
    //}
  }

  return { mode, transition, back };
}


