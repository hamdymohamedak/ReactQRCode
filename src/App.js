import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  let api = "https://api.qrserver.com/v1/";
  let api2 = "create-qr-code/?size=150x150&data=";

  let [imgSrc, setImgSrc] = useState(
    "https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/355901257_831418771840516_1340836723565280874_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEvu3VTnyKgv3X7RZIZHg6t_5hx8ZOrKSH_mHHxk6spISr4aZVBpM5alrk7e1cP-hEtjcaj_MWTfiI1u1QwO1yD&_nc_ohc=t7fSbkkkX8cAX96ebj0&_nc_ht=scontent.fcai19-8.fna&oh=00_AfARnehmYyQKRJv5lrKbbrbyr4EQP4b4yfiCbIN-Wgu2BA&oe=64E6E4A5"
  );
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

export default App;
