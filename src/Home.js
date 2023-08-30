import React, { useEffect, useState } from "react";
import "./Home.css";
import logoImg from "./logo.png"
function Home() {
  let api = "https://api.qrserver.com/v1/";
  let api2 = "create-qr-code/?size=150x150&data=";

  let [imgSrc, setImgSrc] = useState(logoImg);
  let [inputValue, setInputValue] = useState("");
  let [char, setChar] = useState(0);
  let clickEvent = (event) => {
    if (inputValue.length > 0) {
      let result = `${api}${api2}${inputValue}`;
      setImgSrc(result);
    }
  };

  let handleInputChange = (e) => {
    setInputValue(e.target.value);
    setChar(e.target.value.length);
  };
  let [animatenName, setAnimationName] = useState({
    animationName: "startingEvent",
  });
  useEffect(() => {
    setTimeout(() => {
      setAnimationName({
        border: "4px solid #0066ff",
      });
    }, 60000);
  }, []);
  return (
    <div className="App">
      <div className="show">
        <img src={imgSrc} alt="QRcode" />
      </div>
      <input
        style={animatenName}
        onKeyPress={clickEvent}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={clickEvent}>generate</button>
      <span> Characters count: {char} </span>
    </div>
  );
}

export default Home;
