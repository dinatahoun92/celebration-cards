import React, { useEffect, useRef, useState } from "react";
import img1 from "./imgs/1.jpg";
import img2 from "./imgs/2.jpg";
import img3 from "./imgs/3.jpg";
import img4 from "./imgs/4.jpg";
import img5 from "./imgs/5.jpeg";
import img6 from "./imgs/6.webp";
import download from "./imgs/download.png";
import "./App.css";
function App() {
  const [text, setText] = useState("test");
  const canvas = useRef(null);
  CanvasRenderingContext2D.prototype.wrapText = function (
    text,
    x,
    y,
    maxWidth,
    lineHeight
  ) {
    var lines = text.split("\n");

    for (var i = 0; i < lines.length; i++) {
      var words = lines[i].split(" ");
      var line = "";

      for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + " ";
        var metrics = this.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          this.fillText(line, x, y);
          line = words[n] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }

      this.fillText(line, x, y);
      y += lineHeight;
    }
  };
  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    let img = new Image();
    img.crossOrigin = "anonymous";
    img.src =
      "https://images.pexels.com/photos/5383948/pexels-photo-5383948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    img.onload = function () {
      ctx.drawImage(img, 0, 0, 600, 600);
      ctx.font = "40px Courier";
      ctx.textAlign = "start";
      ctx.wrapText(text, 10, 200, 500, 30);
    };
  });

  return (
    <div class="home">
      <img src={download} className="downloadIcon" />
      <div className="container">
        <div className="sidebar">
          <h4>choose an image</h4>
          <div className="imgs">
            <img src={img1}></img>
            <img src={img2}></img>
            <img src={img3}></img>
            <img src={img4}></img>
            <img src={img5}></img>
            <img src={img6}></img>
          </div>
        </div>
        <div className="main">
          <h1>greeting card maker</h1>

          <canvas ref={canvas} width={640} height={425} />
          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <div className="colorPicker">
            <label>Change font color: </label>
            <input type="color" id="favcolor" name="favcolor" value="#ff0000" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
