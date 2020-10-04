import React, { useEffect, useRef, useState } from "react";
import img0 from "./imgs/0.jpeg";
import img1 from "./imgs/1.jpg";
import img2 from "./imgs/2.jpg";
import img3 from "./imgs/3.jpg";
import img4 from "./imgs/4.jpg";
import img5 from "./imgs/5.jpeg";
import img6 from "./imgs/6.webp";
import download from "./imgs/download.png";
import "./App.css";
function App() {
  const [text, setText] = useState("استبدل هذا النص!");
  const [image, setImage] = useState(img1);
  const [color, setColor] = useState("#f2ceaf");
  const [downloadLink, setDownload] = useState("");
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
    img.src = image;
    img.onload = function () {
      ctx.drawImage(img, 0, 0, 600, 600);
      ctx.font = "40px Lalezar";
      ctx.fillStyle = color;
      ctx.textAlign = "left";
      ctx.wrapText(text, 10, 200, 640, 40);
      setDownload(canvas.current.toDataURL());
    };
  });

  return (
    <div class="home">
      <a href={downloadLink} download>
        <img src={download} className="downloadIcon" />
      </a>
      <div className="container">
        <div className="sidebar">
          <h4>أختر صورة </h4>
          <div className="imgs">
            <img src={img2} onClick={() => setImage(img2)}></img>
            <img src={img3} onClick={() => setImage(img3)}></img>
            <img src={img4} onClick={() => setImage(img4)}></img>
            <img src={img5} onClick={() => setImage(img5)}></img>
            <img src={img6} onClick={() => setImage(img6)}></img>
          </div>
        </div>
        <div className="main">
          <h1>كارت المعايدات</h1>

          <canvas ref={canvas} width={640} height={425} dir="rtl" />
          <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <div className="colorPicker">
            <input
              type="color"
              value={color}
              onChange={(event) => setColor(event.target.value)}
            />
            <label> : اختر الللون </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
