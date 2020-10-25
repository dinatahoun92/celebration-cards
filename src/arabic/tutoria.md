<div dir="rtl">

# تعلم كيف ان تصنع كارت معايدات باستخدام React Hooks و Canvas API :

## نظرة عامة 

في هذا الدرس سنقوم بصنع كارت معايدات. هذا الكارت يمكن المستخدم من الأختيار من صور متعددة و كتابة نص و تغيير لون النص ايضاً.

## المواضيع التي سوف نتطرق اليها هي:

- Effect Hook.
- State Hook.
- Refs.
-معالجة الأحداث . 
- تطبيق Canvas API في React.js.

## يفضل قبل ان تبدأ الدرس ان يكون لديك معرفة بالمواضيع الاتية:

- HTML.
- CSS أساسيات ال.
- JavaScript.
- ES6 ( بعض الخصائص مثل arrow function و const )
- تثبيت ال **Node.js** و **NPM** على جهازك. أضغط  [هنا](https://www.npmjs.com/get-npm) لكي تعرف لكي تثبتهم . 

## الخطوة 1 - انشاء تطبيق React جديد:
سوف نستخدم بيئة [Create React App](https://github.com/facebook/create-react-app).

1.  قم بفتح نافذة تنفيذ الاوامر(terminal) و نفذ ما يلي:
<div dir="ltr">

```
npx create-react-app greeting-card
```
</div>
*بيئة العمل هذة سوف تقوم بتثبيت نسخة حديثة من react.js. 
جميع حزم ال React.js
  يجب ان تكون
  **16.8.0**
 أو أعلي لكي تدعم أستخدام ال
 **React Hooks**.*

2. سوف نذهب الي ملف 
   greeting-card 
الذي تم انشاؤة عن طريق الأمر الأتي:
<div dir="ltr">

```
cd greeting-card
```
</div>

3. قم بتنفيذ الأمر الأتي لكي تقوم بتشغيل بيئة التطوير 

<div dir="ltr">

```
npm start
```

</div>

4. قم بفتح الرابط الأتي في المتصفح [localhost:3000](localhost:3000).

## الخطوة 2 - انشاء الهيكل الاساسي:

1. أذهب الي ملف `app.js` . 
2. أختاراي مجموعة من الصور لكي نستخدمها كخلفيه لكارت المعايدات. أنا اخترت 7 صور من [Pexels.com](https://www.pexels.com/).ووضعت الصور في ملف جديد الذي سميته `imgs`.
3. أختار صورة تنزيل المرفقات  . لقد قمت بأختيار صورة من موقع pixabay. يمكنك تنزيلها من [هنا](https://pixabay.com/illustrations/download-download-now-download-icon-1915749/).
4. سوف نقوم بعمل الاتي:
    - شريط جانبي يحتوي الصور الذي سوف يختار منها المستخدم.
    - color picker 
    - textarea
    - زرار التنزيل
    - canvas

**كود البدء:**
<div dir="ltr">

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
      <a>
        <img src={download} className="downloadIcon" />
      </a>
      <div className="container">
        <div className="sidebar">
          <h4>أختر صورة </h4>
          <div className="imgs">
            <img src={img2}></img>
            <img src={img3}></img>
            <img src={img4}></img>
            <img src={img5}></img>
            <img src={img6}></img>
          </div>
        </div>
        <div className="main">
          <h1>كارت المعايدات</h1>

          <canvas width={640} height={425} />
          <textare
          />
          <div className="colorPicker">
            <input
              type="color"
            />
            <label> : اختر الللون </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

```

</div>

## خطوة 3 - التنسيق :

بما اننا في هذا الدرس لن يكون التركيز على التنسيق سأقوم بامدادكم بالأكواد. و لكني اشجعكم على  التجربه و تنسيقه بنفسكم. 


**قم باستبدال التنسيقات الموجودة في ملف App.css بالأكواد الأتية:**

<div dir="ltr">

```
body {
  padding: 0;
  margin: 0;
  background-color: #f2ceaf;
  font-family: "Lalezar", cursive !important;
  text-align: right;
}

h1 {
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
  font-size: 30px;
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
  text-align: right;
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
</div>

انا مستخدمة   [خطوط جوجل](https://fonts.google.com/) لكي يتم استدعائها  قم بوضع الكود الأتي في ملف  `public/index.html`.


<div dir="ltr">

 ```
<link href="https://fonts.googleapis.com/css2?family=Lalezar&display=swap" rel="stylesheet">
```
</div>

## خطوة 4 - أعداد Canvas API لرسم صورة :

1. نرجع لملف `App.js` . سوف نقوم بعمل`Ref` في وسم ال Canvas لكي يمكن التحكم في ال DOM. سوف نطلق عليه اسم `canvas`.
   
<div dir="ltr">

```
const canvas = useRef(null);
```
</div>

2. سوف نقوم بأضافة  `ref` .  ال React يقوم بجعل `.current` يرتبط بالمقابل اليها في عقد ال DOM و يجعلها تستجيب لأي تغيير.

<div dir="ltr">

```
<canvas ref={canvas} width={640} height={425} />
```
</div>

3. بما اننا نقوم بالتلاعب بعقد ال DOM بشكل مباشر, سنحتاج الي ان نستخدم `useEffect()` لان هذا يسبب اثار جانبية فلا يمكن ممارستها بشكل مباشر في العناصر الدالية.

4.  `canvas.current.getContext()` سيقوم برسم الصوره داخل ال `canvas` .

5. سنقوم بعمل عنصر جديد من الimg .

<div dir="ltr">

```
let img = new Image();
```
</div>
5. سنستخدم دالة `img.onload` لكي تنتظر ان تقوم الصورة بانتهاء من تنزيلها قبل ان توضع في الأحداثيات (0,0) 
و عرضها يساوي 600px و طولها يساوي أيضاً 600px.


<div dir="ltr">

```
img.onload = function () {
  ctx.drawImage(img, 0, 0, 600, 600);
};
```
</div>

 **الآتي الكود الكامل لرسم صورة عن طريق Canvas API :**

<div dir="ltr">

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

</div>

## Step 5 - Canvas API to draw text :

1. We will use `fillText()` method to draw the text "Hello world," starting at the coordinates (100, 200) inside `useEffect` as we are still manipulating the DOM.
   
 ```
ctx.fillText('Hello world', 100, 200);
 ```
*You will notice that the text didn't render, that is because we are rendering the text without waiting for the image to be drawn first. To solve that we will put it inside `img.onload` function.*

2. We will style our text. 
  - We will use `ctx.font` to set font to **40px** and font family to **Yesteryear**.
  - 
<div dir="ltr">

```
ctx.font = "40px Yesteryear";
```
</div>
  - We will change font color to `"#f2ceaf"` using `ctx.fillStyle`.

<div dir="ltr">

```
ctx.fillStyle = "#f2ceaf";
```
</div>

*Note: Any styling we do we must put it before `ctx.fillText` because the text gets drawn based on it's previous styles.*

3- If you replace 'Hello world' with long sentense, you will notice that the text is overflowing instead of wrapping. This is a problem with Canvas API. To work arround this we will make a function that takes the text calculate it's width and breaks into a new line when needed. *The following code is inspired by Colin Wiseman answer on this stackoverflow [question](https://stackoverflow.com/questions/5026961/html5-canvas-ctx-filltext-wont-do-line-breaks/11361958#11361958).*

<div dir="ltr">

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
</div>

- `CanvasRenderingContext2D` provides the 2D rendering context for the drawing surface of a canvas element. It takes **text, x&Y coordinates, maximum width of each sentence , and line length**.
  
- We will remove the following line:
  
<div dir="ltr">

```
ctx.fillText('Hello world', 100, 200);
```
</div>
*As it is used on the above function*

- We replace it with:
  
<div dir="ltr">

```
ctx.wrapText("Hello world", 10, 200, 500, 40);
```
</div>

## Step 6 - Update Image:

Let’s add the functionality to Make user able to change the card's image when he clicks on any image from the left side images.
We will declare a **state variable** called `image`, and set it to `img0`. React will remember its current value between re-renders, and provide the most recent one to our function. If we want to update the current `image`, we can call `setImage`.

<div dir="ltr">

```
const [image, setImage] = useState(img0);
```
</div>

So, We will remove the static `img0` and replace it with `image` state variable. Like the following:

<div dir="ltr">

```
img.src = image;
```
</div>

Then, we will add a click event listner that triggers `setImage` to change card's image `onClick`.

<div dir="ltr">

```
<img src={img1} onClick={() => setImage(img1)}></img>
<img src={img2} onClick={() => setImage(img2)}></img>
<img src={img3} onClick={() => setImage(img3)}></img>
<img src={img4} onClick={() => setImage(img4)}></img>
<img src={img5} onClick={() => setImage(img5)}></img>
<img src={img6} onClick={() => setImage(img6)}></img>
```
</div>

## Step 6 - Update text:

1. Like we did in the image we will use `useState` to set `text` state variable to `"Replace this text!"`.
```
const [text, setText] = useState("Replace this text!");
```
2. We will remove static `"Hello world!"` text and replace it with `text` state variable.
```
ctx.wrapText(text, 10, 200, 500, 40);
```
3. We will call `setText` when the user types on the `textarea`. So, We will triger it `OnChange` event. We will also set the value of the `textarea` to the `text` state variable.
   
<div dir="ltr">

```
<textarea value={text} onChange={(event) => setText(event.target.value)}/>
```
</div>

## Step 7 - Update font color:

1. We will use `useState` to set `color` state variable to `"#f2ceaf"`.

<div dir="ltr">
  
```
const [color, setColor] = useState("#f2ceaf");
```
</div>

2. We will remove static `"#f2ceaf"` text and replace it with `color` state variable.
   
<div dir="ltr">

```
ctx.fillStyle = color;
```
</div>
   
3. We will call `setColor` when the user types on the `input`. So, We will triger it `OnChange` event.
  
<div dir="ltr">

```
<input type="color" value={color} onChange={(event) => setColor(event.target.value)}/>
```
</div>

## Step 8 - Add functionlity to the download button:

We want when the user clicks on the download button, be able to save the card as an image. Let's start building that functionlity. 
1.  We will grab the contents of an HTML5 canvas using the canvas `toDataURL()` function.The data returned from the toDataURL() function is a string that represents an encoded URL containing the grabbed graphical data. 
<div dir="ltr">

```
canvas.current.toDataURL()
```
</div>

1. We will save it in `downloadLink` state variable with intial value of `""` as before canvas renders we don`t want to save any link.
```
const [downloadLink, setDownload] = useState("");
```
3. To be able to make the download button downloading the image, We will put `download` attribute and set `href` attribute value to `downloadLink` state value.
```
<a href={downloadLink} download>
```
## Finally, Your App.js code should look like the following:

<div dir="ltr">

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
</div>
</div>