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
  font-family: "Lalezar", cursive !important;
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

لقد قمت باستخدام
[خطوط جوجل](https://fonts.google.com/) 
لكي يتم استدعائها  قم بوضع الكود الأتي في ملف  `public/index.html`.


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
6. سنستخدم دالة `img.onload` لكي تنتظر ان تقوم الصورة بانتهاء من تنزيلها قبل ان توضع في الأحداثيات (0,0) 
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

## خطوة 5 - أعداد Canvas API لرسم نص :

1. سنقوم بأستخدام دالة `fillText()` method لكي نرسم نص "أهلاٌ بالعالم" عند أحداثيات (100, 200) داخل دالة `useEffect` لأننا مازلنا نتلاعب بال DOM و نسبب آثار جانبية.

<div dir="ltr">

```
ctx.fillText(أهلاٌ بالعالم", 100, 200");
```
</div>
 ستلاحظ ان النص لايظهر, هذا بسبب ان النص يتم رسمه قبل انتظار الأنتهاء من رسم الصورة. لكي نحل هذه المشكله سنقول بوضعه داخل دالة `img.onload`.

2. تنسيق النص : 
  - سنستخدم دالة `ctx.font`  لكي تجعل
  حجم النص 
   **40px** 
   و نوعة
    **Lalezar**.
   
<div dir="ltr">

```
ctx.font = "40px Lalezar";
```
</div>

   - سوف نقوم بتغيير لون النص الي `"#f2ceaf"` بأستخدام `ctx.fillStyle`.

<div dir="ltr">

```
ctx.fillStyle = "#f2ceaf";
```
</div>

- ستلاحظ ان الكلام يبدا من اقصي اليسار و يختفي فلحل هذة المشكله سنقوم بأستخدام
`ctx.textAlign`
لجعل المحازاه تبدا من اليسار الي اليمين.

<div dir="ltr">
```
ctx.textAlign = "left";
```

</div>

*ملحوظة:يجب وضع اي تنسيق قبل `ctx.fillText` لان النص عندما يرسم يرسم بناء على التنسيقات السابقه و لا يمكن تغيرها.*

1. إذا قمت بتغير النص بنص طويل ستلاحظ ان النص يخرج من الصوره بدل ما ينزل في سطر جديد حين الحاجه لكي يبقي بداخل الصورة. هذة مشكله سائعة في Canvas API. لكي نقوم بحل هذه المشكله سنقوم بأستخدام دالة تحسب العرض المطلوب و عمل سطر جديد حين الحاجه. *لقد استخدمت الحل الذي طرحه Colin Wiseman على  [سؤال](https://stackoverflow.com/questions/5026961/html5-canvas-ctx-filltext-wont-do-line-breaks/11361958#11361958) في stackoverflow.*

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

- `CanvasRenderingContext2D`  توفر أطار ثنائي الأبعاد لرسم عناصر ال 
  canvas. تاخد 
  **النص و الأحداثيات و العرض و طول الحروف**.
  
- سوف نحذف الكود الآتي:
  
<div dir="ltr">

```
ctx.fillText("أهلاٌ بالعالم"
, 100, 200);
```
</div>
*لأنها جزء من الداله السابقة*

- سنستبتدلها بالكود الآتي:
  
<div dir="ltr">

```
ctx.wrapText(" أهلاً بالعالم"
, 10, 200, 500, 40);
```
</div>

## خطوة 6 - تحديث الصورة:

هذا الجزء سوف نقوم بجعل المستخم قادرا على تغيير صوره كارت المعايدات.
1. سنقوم بأنشاء ** متغير حالة 
(state)**
سنطلق عليه أسم 
`image`, 
و تساوي قيمته ب
`img0`.
ال
React 
سيقوم بتذكر قيمته و الأمداد باحدث قيمة. إذا اردنا انا نغير قيمة
`image`, 
سنقوم بنداء الدالة
`setImage`.

<div dir="ltr">

```
const [image, setImage] = useState(img0);
```
</div>

2. سنقوم بحذف القيمة الثابته
`img0` 
و أستبدالها بالقيمة المتغيرة
`image` :

<div dir="ltr">

```
img.src = image;
```
</div>

3.سنقوم بتحفيز معالجه حدث الضغط
`onClick`
 لتغيير الصورة باستدعاء الدالة
`setImage` .

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


## خطوة 7 - تحديث النص:
1. مثل ما عملنا في تحديث الصورة سنقوم بأستخدام 
`useState`
لكي ننشأ متغير حالة اسمه`text` 
و نساوية يالآتي 
`"استبدل هذا النص!"`.

<div dir="ltr">

```
const [text, setText] = useState("استبدل هذا النص!");

```
</div>

2. سنستبدل القيمة الثابته
"أهلاً بالعالم" بمتغير الحالة
 `text`.

<div dir="ltr">

```
ctx.wrapText(text, 10, 200, 500, 40);
```
</div>

3. سوف نقوم بأستدعاء الدالة
`setText` 
عندما يقوم المستخدم بالكتابة في
 `textarea`.
 عندها ستطلق الحالة
  `OnChange` .
عندها سنقوم بجعل قيمة 
 `textarea`
 تساوي قيمة متغير الحالة
 `text`.
   
<div dir="ltr">

```
<textarea value={text} onChange={(event) => setText(event.target.value)}/>
```
</div>

## الخطوة 8 -تحديث لون النص:

1. سنقوم بأستخدام
 `useState` 
 للنشأ متغير حالة جديد أسمه
`color` 
و نجعل قيمته تساوي
 `"#f2ceaf"`.

<div dir="ltr">
  
```
const [color, setColor] = useState("#f2ceaf");
```
</div>

2. سنقوم بأستبدال القيمة الثابته `"#f2ceaf"` 
بمتغير الحالة `color`.
   
<div dir="ltr">

```
ctx.fillStyle = color;
```
</div>
   
3. عندما يقوم المستخدم بتغيير اللون هذا سيحفز حالة 
`OnChange` 
التي بدورها هتحفز الدالة
`setColor`
.
  
<div dir="ltr">

```
<input type="color" value={color} onChange={(event) => setColor(event.target.value)}/>
```
</div>

## الخطوة 9 - تفعيل زر التنزيل:

1.  الدالة 
<span dir="ltr">
`toDataURL()` 
 </span>
تقوم بتحويل محتويات ال 
canvas
الي
encoded URL
تستطيع ان نحوله لصورة يمكن تنزيلها
 
<div dir="ltr">

```
canvas.current.toDataURL()
```
</div>

2.سنقوم بأنشاء متغير حالة اسمه  `downloadLink` 
بقيمة مبدئيه تساوي
 `""` 
 لأننا لا نريد ان يكون له قيمه قبل ما يتم رسم ال 
 Canvas.

<div dir="ltr">

```
const [downloadLink, setDownload] = useState("");
```

</div>
3. في دالة 
`img.onload`
ستغير قيمه متغير الدالة
`downloadLink`
الي
`canvas.current.toDataURL()`
بأستخدام 
`setDownload`.

<div dir="ltr">

```
setDownload(canvas.current.toDataURL());
```
</div>

 1. لكي نجعل زار التنزيل فعال سنقوم بوضع `download` attribute
و تساوي  قيمة
 `href` attribute 
 بقيمة متغير الحالة
  `downloadLink` .

<div dir="ltr">

```
<a href={downloadLink} download>
```

</div>

## أخيرا الكود في صفحة App.js يجب ان يكون مثل الآتي:

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
  const [text, setText] = useState("استبدل هذا النص!");
  const [image, setImage] = useState(img0);
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
            <img src={img1} onClick={() => setImage(img1)}></img>
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

```
</div>
</div>