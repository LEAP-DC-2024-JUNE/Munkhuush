import { useContext } from "react";
import { MyContext } from "@/utils/context";
const Custom404 = () => {
  // const vaal = useContext(MyContext);
  const { count, setCount } = useContext(MyContext);
  return (
    <div>
      <p>404 PAGe {count}</p>
      <button onClick={() => setCount(count + 1)}>nemeh</button>
      <button onClick={() => setCount(count - 1)}>Hasah</button>
    </div>
  );
};
export default Custom404;
