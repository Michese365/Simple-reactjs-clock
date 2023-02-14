import React from "react";

function App() {
  let currentTime = new Date().toLocaleTimeString();

  const [time, setTime] = React.useState(currentTime);

  function getTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
