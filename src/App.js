import { useState, useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    getAdvice();
  }, []);

  const requset = `https://api.adviceslip.com/advice`;
  const getAdvice = async () => {
    const response = await fetch(requset);
    const data = await response.json();
    setAdvice(data.slip);
  };

  return (
    <div className="advice-component">
      <h1 className="advice">Advice #{advice.id}</h1>
      <p className="qoute">&#8220;{advice.advice}&#8221;</p>
      <div className="test">
        <span>
          <img
            className="qoute-icon"
            src="\images\pattern-divider-mobile.svg"
            alt="line"
          />
        </span>
      </div>
      <button className="btn " type="submit" onClick={getAdvice}>
        <img src="\images\icon-dice.svg" alt="roll" />
      </button>
    </div>
  );
}

export default App;
