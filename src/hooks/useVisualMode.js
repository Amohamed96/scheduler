import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  console.log(history)

  function transition(value, replace = false) {
    if (replace) {
      const array = history.slice(0, history.length - 1)
      // array.pop();
      console.log(array)
      console.log(history)

      setHistory((prev) => [...prev.slice(0, prev.length - 1), value]);
      setMode(value)
      return;
    }    
    setMode(() => value);
    setHistory((prev) => [...prev, value]);
  }


  function back() {
    if (history.length > 1){
      let array = [...history];
      array.pop();
      setHistory(() => array);
      setMode(() => array[array.length - 1]);
    }
  }
  return { mode, transition, back };
}