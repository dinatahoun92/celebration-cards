# How to build a greeting card maker with React Hooks & Canvas API

## Overview 

In this tutorial, we will be creating a greeting card maker. It will enable users to choose from many images and text colors. The user will be able to write a greeting phrase. The key things we will explore is how to:

- Rendering elements.
- Using Effect Hook.
- Using State Hook.
- Refs.
- Handling OnChange and OnClick events. 
- Working with Canvas API with React.js.

## Prerequisites:

- HTML.
- CSS (basic).
- JavaScript.
- ES6 ( some features only like arrow function and const )
- Have **Node.js** and **NPM** installed locally. Click [here](https://www.npmjs.com/get-npm) to install them, if you haven't already. 

## Step 1 - Create React App:
We will use [Create React App](https://github.com/facebook/create-react-app) as it needs no build configuration.

1. Open the terminal window where you like your application to be located and type:
```
npx create-react-app greeting-card
```
*This will install the latest react version. All React packages should be **16.8.0** or higher to support **React Hooks**.*

2. We Will navigate into our newly created greeting-card folder, using the following command:
```
cd greeting-card
```
3. Write the following to run the greeting-card project in development mode:

```
npm start
```
4. Open [localhost:3000](localhost:3000) to view it in the browser. 

## Step 2 - Build basic markup:
1. Go to `app.js` file. 
2. Choose any number of images to use as a background image for our greeting card. I selected 7 images from [Pexels.com](https://www.pexels.com/).I placed all of the images in anew folder called `imgs`.
3. Choose a download icon. You can use a font icon or image. I used an image from pixabay. You can download it from [here](https://pixabay.com/illustrations/download-download-now-download-icon-1915749/).
4. We will need to make a sidebar with images users can choose from, color picker so that the user can change the font color,textarea where the user can type the greeting message, download button, and canvas where we make our greeting card.

**Here is the starter code:**
```
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
  
  return (
    <div class="home">
      <a download>
        <img src={download} className="downloadIcon" />
      </a>
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
          <canvas  width={640} height={425} />
          <textarea/>
          <div className="colorPicker">
            <label>Change font color: </label>
            <input
              type="color"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
```
## Step3 - Style the app:

As we are not going to focus on styling. I will provide the CSS code. however, I encourge you to experiment and style it yourself.

**Replace styles in App.js with the following CSS code:**

```
body {
  padding: 0;
  margin: 0;
  background-color: #f2ceaf;
  font-family: "Open Sans", sans-serif;
}

h1 {
  font-family: "Yesteryear", cursive;
  font-size: 40px;
  text-align: center;
  text-transform: capitalize;
  color: #3e424e;
}
.container {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  flex-wrap: wrap;
}
.sidebar {
  width: 20%;
  text-align: center;
  background-color: #3e424e;
  height: 100%;
}
.sidebar h4 {
  text-transform: uppercase;
  color: #f2ceaf;
  letter-spacing: 1px;
}
.sidebar img {
  width: 100%;
  object-fit: contain;
  letter-spacing: 1px;
}
.main {
  width: 75%;
  display: flex;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  cursor: auto;
}
textarea {
  width: 640px;
  height: 100px;
  margin-top: 30px;
}
.colorPicker {
  margin-top: 30px;
}
.colorPicker label {
  font-weight: 600;
}
.downloadIcon {
  position: fixed;
  top: 100px;
  right: 50px;
  height: 50px;
  width: 50px;
  object-fit: contain;
  cursor: pointer;
}
```

 I'm using [Google fonts](https://fonts.google.com/) to use it I embedded it in `public/index.html` file.

 If you are going to use the styles that I provided and you will use the same fonts. Place the following line in the head tag in `public/index/html`.

 ```
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Pacifico&family=Secular+One&family=Yesteryear&display=swap&"
    rel="stylesheet"/>
```

## Step 4 - Canvas API to draw image:

1. Back in App.js file. We will creatث `Ref` in Canvas tag to access the DOM node. We will call it `canvas`.
```
const canvas = useRef(null);
```
Then we will add `ref` object.  React will set its .current property to the corresponding DOM node whenever that node changes.
   
```
<canvas ref={canvas} width={640} height={425} />
```
2. As we are manipulating DOM directly, we will need to use `useEffect()` because, You cannot perform side-effects directly in the body of the functional component.

3. The `canvas.current.getContext()` method rendes image into the element`s context.

4. Create a new image element.

```
let img = new Image();
```

5- We will use `img.onload` function to wait for our image to be loaded before the backdrop is placed in coordinate (0,0) and whose width and height are 600px and 600px.
```
img.onload = function () {
  ctx.drawImage(img, 0, 0, 600, 600);
};
```
 **Here is the whole code of drawing an image with Canvas API:**

 ```
 useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    let img = new Image();
    img.src = img0;
    img.onload = function () {
      ctx.drawImage(img, 0, 0, 600, 600);
    };
  });
  ```
## Step 5 - Canvas API to draw text :

1. We will use `fillText()` method to draw the text "Hello world," starting at the coordinates (100, 200) inside `useEffect` as we are still manipulating the DOM.
   
 ```
ctx.fillText('Hello world', 100, 200);
 ```
*You will notice that the text didn't render, that is because we are rendering the text without waiting for the image to be drawn first. To solve that we will put it inside `img.onload` function.*

2. We will style our text. 
  - We will use `ctx.font` to set font to **40px** and font family to **Yesteryear**.

```
ctx.font = "40px Yesteryear";
```

  - We will change font color to `"#f2ceaf"` using `ctx.fillStyle`.
  
```
ctx.fillStyle = "#f2ceaf";
```
   
*Note: Any styling we do we must put it before `ctx.fillText` because the text gets drawn based on it's previous styles.*

1. If you replace 'Hello world' with a long sentence, you will notice that the text is overflowing instead of wrapping. This is a problem with Canvas API. To work arround this we will make a function that takes the text to calculate its width and breaks into a new line when needed. *The following code is by Colin Wiseman answer on this StackOverflow [question](https://stackoverflow.com/questions/5026961/html5-canvas-ctx-filltext-wont-do-line-breaks/11361958#11361958).*

```
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
  ```
- `CanvasRenderingContext2D` provides the 2D rendering context for the drawing surface of a canvas element. It takes **text, x&Y coordinates, the maximum width of each sentence, and line length**.
  
- We will remove the following line:

```
ctx.fillText('Hello world', 100, 200);
```
*As it is used on the above function*

- We replace it with:
```
ctx.wrapText("Hello world", 10, 200, 500, 40);
```

## Step 6 - Update Image:

Let’s add the functionality to make user able to change the card's image when he clicks on any image from the left side images.
We will declare a **state variable** called `image`, and set it to `img0`. React will remember its current value between re-renders, and provide the most recent one to our function. If we want to update the current `image`, we can call `setImage`.
```
const [image, setImage] = useState(img0);
```
So, We will remove the static `img0` and replace it with the `image` state variable. Like the following:
```
img.src = image;
```
Then, we will add a click event listener that triggers `setImage` to change the card's image `onClick`.
```
<img src={img1} onClick={() => setImage(img1)}></img>
<img src={img2} onClick={() => setImage(img2)}></img>
<img src={img3} onClick={() => setImage(img3)}></img>
<img src={img4} onClick={() => setImage(img4)}></img>
<img src={img5} onClick={() => setImage(img5)}></img>
<img src={img6} onClick={() => setImage(img6)}></img>
```
## Step 7 - Update text:

1. Like we did in the image we will use `useState` to set `text` state variable to `"Replace this text!"`.
```
const [text, setText] = useState("Replace this text!");
```
2. We will remove static `"Hello world!"` text and replace it with `text` state variable.
```
ctx.wrapText(text, 10, 200, 500, 40);
```
3. We will call `setText` when the user types on the `textarea`. So, We will triger it `OnChange` event. We will also set the value of the `textarea` to the `text` state variable.

```
<textarea value={text} onChange={(event) => setText(event.target.value)}/>
```

## Step 8 - Update font color:

1. We will use `useState` to set `color` state variable to `"#f2ceaf"`.
  
```
const [color, setColor] = useState("#f2ceaf");
```
2. We will remove static `"#f2ceaf"` text and replace it with `color` state variable.

```
ctx.fillStyle = color;
```
   
3. We will call `setColor` when the user types on the `input`. So, We will triger it `OnChange` event.
```
<input type="color" value={color} onChange={(event) => setColor(event.target.value)}/>
```
## Step 9 - Add functionality to the download button:

We want when the user clicks on the download button, be able to save the card as an image. Let's start building that functionality. 
1.  We will grab the contents of an HTML5 canvas using the canvas `toDataURL()` function.The data returned from the toDataURL() function is a string that represents an encoded URL containing the grabbed graphical data. 
```
canvas.current.toDataURL()
```
2. We will use `useState` to set `downloadLink` state variable to `""`.

```
const [downloadLink, setDownload] = useState("");
```
3. In `img.onload` function we will set `downloadLink` state variable to `canvas.current.toDataURL()`
   
```
setDownload(canvas.current.toDataURL());

```

4. To be able to make the download button downloading the image, We will put `download` attribute and set `href` attribute value to `downloadLink` state value.
```
<a href={downloadLink} download>
```
## Finally, Your App.js code should look like the following:
```
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
  const canvas = useRef(null);
  const [image, setImage] = useState(img0);
  const [text, setText] = useState("Replace this text!");
  const [color, setColor] = useState("#f2ceaf");
  const [downloadLink, setDownload] = useState("");

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
    img.src = image;
    img.onload = function () {
      ctx.drawImage(img, 0, 0, 600, 600);
      ctx.font = "40px Yesteryear";
      ctx.fillStyle = color;
      ctx.wrapText(text, 10, 200, 500, 40);
      setDownload(canvas.current.toDataURL());

    };
   

  });
  return (
    <div className="home">
      <a href={downloadLink} download>
        <img src={download} className="downloadIcon" />
      </a>
      <div className="container">
        <div className="sidebar">
          <h4>choose an image</h4>
          <div className="imgs">
          <img src={img1} onClick={() => setImage(img1)}></img>
            <img src={img2} onClick={() => setImage(img2)}></img>
            <img src={img3} onClick={() => setImage(img3)}></img>
            <img src={img4} onClick={() => setImage(img4)}></img>
            <img src={img5} onClick={() => setImage(img5)}></img>
            <img src={img6} onClick={() => setImage(img6)}></img>
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
            <input
              type="color"
              value={color}
              onChange={(event) => setColor(event.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
```
