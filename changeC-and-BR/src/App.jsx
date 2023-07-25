import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const changeInputValue = (event) => {
    setInputValue(event.target.value);
  };
  const changeBoxStyle = () => {
    const box = document.querySelector(".box");
    box.style.backgroundColor = inputValue;
    box.style.boxShadow = "0 0 30px white";
    box.style.borderRadius = inputValue;
  };

  return (
    <div className="App">
      <div className="box"></div>
      <input
        onChange={changeInputValue}
        placeholder="Write color or border-radius size(red or 50px)"
      />
      <button onClick={changeBoxStyle}>Click</button>
      <footer>
        <a href="https://github.com/omarmovlamov" target="_blank">
          <p>&copy;github.com/omarmovlamov</p>
        </a>
      </footer>
    </div>
  );
}

export default App;
