import { useEffect, useState } from "react";
import Header from "../components/Header";
// import reactLogo from "./assets/react.svg"; then I would use { reactLogo }

function App() {
  const [index, setIndex] = useState(0);

  function myFunction() {
    setIndex(index + 1);
  }

  useEffect(() => {
    console.log("this is a pretty wild language");
  }, [index]);

  return (
    <div className="flex h-full w-full flex-col items-center">
      <Header></Header>
      <button className="text-blue-400 bg-black h-10 w-10" onClick={myFunction}>
        {index}
      </button>
    </div>
  );
}

export default App;
