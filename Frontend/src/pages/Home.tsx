import { useEffect, useState } from "react";
import Header from "../components/Header";
// import reactLogo from "./assets/react.svg"; then I would use { reactLogo }

function App() {

  const [index, setIndex] = useState(0)

  function myFunction() {
    setIndex(index + 1)
  }

  const handleMessage = () => {
    const message = encodeURIComponent("Hello, let's chat on iMessage!");
    const url = `sms:&body=${message}`;
    window.open(url);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Share Example',
        text: 'Check out this cool content!',
        url: 'https://example.com',
      })
        .then(() => console.log('Shared successfully.'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      console.log('Web Share API not supported.');
    }
  };



  useEffect(() => {
    console.log('this is a pretty wild language')
  }, [index])

  return (
    <div className="flex h-full w-full flex-col items-center">
      <Header></Header>
      <button className="text-blue-400 bg-black h-10 w-10" onClick={myFunction}>
        {index}
      </button>
      <button onClick={handleMessage} className="bg-red-400">Send iMessage</button>
      <button onClick={handleShare} className="bg-purple-400">Share</button>

    </div>
  );
}

export default App;
