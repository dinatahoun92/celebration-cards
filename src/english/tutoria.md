# How to build a greeting card maker with React Hooks & Canvas API

## Overview 

In this tutorial we will be craeting a greeting card maker. It will enable users to choose from many images and text colors.The user will be able to write a greeting phrase.The key things we will explore is how to:

- Rendering elements.
- Using Effect Hook.
- Using State Hook.
- Refs.
- Handling OnChange event. 
- Working with Context API with React.js.

## Prerequisites:

- HTML.
- CSS (basic).
- JavaScript.
- ES6 ( some features only like arrow function and const )
- Have **Node.js** and **NPM** installed locally. Click [here](https://www.npmjs.com/get-npm) to install them, if you haven't already. 

## Step 1 - Create React App:
We will use [Create React App](https://github.com/facebook/create-react-app) as it needs no build configuration.

1. Open terminal window where you like your application to be located and type:
```
npx create-react-app greeting-card
```
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
2. Choose any number of images to use as background image for our greeting card. I selected 7 images from [Pexels.com](https://www.pexels.com/).
3. Choose a download icon. You can use font icon or image. I used an image from pixabay. You can download it from [here](https://pixabay.com/illustrations/download-download-now-download-icon-1915749/).
4. We will need to make a sidebar with images users can choose from, color picker so that the user can change font color,textarea where the user can type the greeting message,download button, and canvas where we make our greeting card.

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
