import React, { useState } from "react";
import "./QrcodeStyle.css";
import QRCode from "qrcode.react";

function QrcodeStyle() {
  const [inputValue, setInputValue] = useState("Dev:Hamdy");
  const [selectQRCodeColor, setSelectQrCodeColor] = useState("white");
  const [selectTxtQRCodeColor, setSelectTxtQrCodeColor] = useState("blue");
  const [selectImg, setSelectImg] = useState(null);

  const TakeValue = (event) => {
    setInputValue(event.target.value);
  };

  const SelectNewQRcodeColor = (event) => {
    setSelectQrCodeColor(event.target.value);
  };

  const selectNewQRcodeColorWords = (event) => {
    setSelectTxtQrCodeColor(event.target.value);
  };

  const SelectImg = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      setSelectImg(URL.createObjectURL(selectedImage));
    }
  };

  return (
    <section className="sec-1">
      <div className="qrcode">
        <QRCode
          value={inputValue}
          size={170}
          fgColor={selectTxtQRCodeColor}
          bgColor={selectQRCodeColor}
          renderAs="canvas"
          level="H"
          imageSettings={{
            src: selectImg,
            excavate: true,
            height: 60,
            width: 60,
          }}
        />
      </div>
      <input onChange={TakeValue} type="text" placeholder="Enter Value" />

      <input onChange={SelectImg} type="file" />

      <div className="inputs_parent">
        <input onChange={SelectNewQRcodeColor} type="color" />
        <input onChange={selectNewQRcodeColorWords} type="color" />
      </div>
    </section>
  );
}

export default QrcodeStyle;
