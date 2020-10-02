import React, { useEffect, useRef } from "react";

function App() {
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
    window.onload = () => {
      let img = new Image();
      img.crossOrigin = "anonymous";
      img.src =
        "https://images.pexels.com/photos/5383948/pexels-photo-5383948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
      img.onload = function () {
        ctx.drawImage(img, 0, 0, 600, 600);
        ctx.font = "40px Courier";
        ctx.textAlign = "start";
        ctx.wrapText("Hello World! adasd vdsfahdsah sgdua", 10, 200, 640, 30);
      };
    };
  });

  return (
    <div>
      <canvas ref={canvas} width={640} height={425} />
      {/* <img
        ref={image}
        src="https://img.freepik.com/free-photo/jasmine-flower-greenery_34266-955.jpg?size=626&ext=jpg"
      /> */}
      <img src={canvas.current ? canvas.current.toDataURL() : ""} />
    </div>
  );
}

export default App;
