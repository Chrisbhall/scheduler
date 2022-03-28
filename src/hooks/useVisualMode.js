import { useState} from "react";

export default function useVisualMode(initial) {
  /*
manages transitions of the display from errors/shows/empty....
  */
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState(initial);
  const [history2] = useState(initial);

  function transition (Value, replace) {
    if (replace) {
      setMode(Value);
    } else {
      setHistory(mode);
      setMode(Value);
    }
  };
  function back (){
    if (history === mode){
      setMode(history2);
    }else{
    setMode(history);
    }
  }

  return { mode, transition, back };
}


