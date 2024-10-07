import { useState, useEffect } from "react";

export default function UseEff() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        You clicked {count} times
      </button>
    </div>
  );
}
