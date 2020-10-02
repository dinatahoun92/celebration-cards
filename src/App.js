import React, { useEffect, useRef, useState } from "react";

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
      ctx.wrapText(text, 10, 200, 640, 30);
    };
  });

  return (
    <div>
      <canvas ref={canvas} width={640} height={425} />
      <textarea
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  );
}

export default App;
