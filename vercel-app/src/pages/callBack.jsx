export default function Call() {
  const handleClick = (callback, param2) => {
    console.log("button daragdlaa");
    callback();
    console.log(param2);
  };
  const logHelloWorld = () => {
    console.log("hello World");
  };

  return (
    <div>
      <button onClick={() => handleClick(logHelloWorld)}> Click me</button>
      <button
        onClick={() =>
          handleClick(() => {
            console.log("callback ajilla");
          }, "Leap")
        }
      >
        Click me 2
      </button>
    </div>
  );
}
