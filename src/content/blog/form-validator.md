---
author: Javlon Kubayev
date: 08/10/2023
image: ./images/project.png
title: Form Validator | HTML CSS JS
---

Bilamizki, barcha web ilovalarda ro'yxatdan o'tish va login sahifalari mavjud. Bugungi blogimizda HTML, CSS va JS orqali form validator *(login va parolni tasdiqlagich)* yasashni o'rganamiz.

1. Avvalo ishni `index.html` faylini yaratib, unga quyidagilarni kiritib olamiz:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Ro'yxatdan o'tish</title>
    </head>
<body>
<div class="container">
<h1>Ro'yxatdan o'tish</h1>
<form action="" id="form" class="form">
<div class="input">
<label for="username">Foydalanuvchi nomi</label>
<input
type="text"
name="username"
id="username"
placeholder="Foydalanuvchi nomi"
autocomplete="off"
/>
<small>Xatolik xabari</small>
</div>
<div class="input">
<label for="email">Email</label>
<input
type="text"
name="email"
id="email"
placeholder="Email"
autocomplete="off"
/>
<small>Xatolik xabari</small>
</div>
<div class="input">
<label for="password">Parol</label>
<input
type="password"
name="password"
id="password"
placeholder="Parol"
/>
<small>Xatolik xabari</small>
</div>
<div class="input">
<label for="c-password">Parolni tasdiqlash</label>
<input
type="password"
name="c-password"
id="c-password"
placeholder="Parolni tasdiqlang"
/>
<small>Xatolik xabari</small>
</div>
<button>Yuborish</button>
</form>
</div>
</body>
</html>
```
Quyida HTML orqali qilingan ishimizning natijasi bilan tanishishingiz mumkin

![HTML result](/img/blog/code-1.PNG)

2. Endi `style.css` faylini yaratamiz.

```css
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
* {
margin: 0;
padding: 0;
box-sizing: border-box;
outline: none;
}
body {
background-color: #f9fafb;
font-family: "Open Sans", sans-serif;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
}
.container {
background-color: #fff;
border-radius: 5px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
width: 400px;
padding: 30px 40px;
}
.container h1 {
text-align: center;
margin: 0 0 20px;
font-size: 24px;
}
.input {
margin-bottom: 20px;
position: relative;
}
.input label {
display: block;
margin-bottom: 10px;
}
.input input {
width: 100%;
height: 40px;
padding: 0 15px;
background-color: transparent;
border: 2px solid #f0f0f0;
border-radius: 5px;
}
.input small {
display: block;
color: #e74c3c;
font-weight: bold;
font-size: 11px;
padding-top: 3px;
visibility: hidden;
}
.input.success input {
border: 2px solid #2ecc71;
}
.input.error input {
border: 2px solid #e74c3c;
}
.input.error small {
visibility: visible;
}
button {
width: 100%;
height: 40px;
line-height: 40px;
background-color: #3498db;
border: 1px solid #3498db;
border-radius: 5px;
cursor: pointer;
color: #fff;
display: block;
font-size: 16px;
}
```

3.  `style.css` ni `index.html` ning `<head></head>` tegi o'rtasiga `link` orqali ulaymiz:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Ro'yxatdan o'tish</title>
        <link rel="stylesheet" type="text/css"  href="style.css">
    </head>
<body>
 //Qolgan kodlar bu yerda .....   
```

#### CSS berilgach, hosil bo'lgan natija:

![HTML result](/img/blog/code-2.PNG)

4. Endigi navbat `index.js` faylini yaratish va validator uchun barcha amalarni yozib olmiz

> **Javascript kodimiz `html` elementlarini `const` o'zgaruvchilarga biriktirish va ular ustida ish olib borishdan, shuningdek, `if else` shart operatoridan iborat.**

```js
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("c-password");
//Show Error Message
function showError(input, message) {
const formControl = input.parentElement;
formControl.className = "input error";
const small = formControl.querySelector("small");
small.innerText = message;
}
//Show Success message
function showSuccess(input) {
const formControl = input.parentElement;
formControl.classList.add("success");
}
//Check Required fields
function checkRequired(inputArr) {
inputArr.forEach(function (input) {
if (input.value.trim() === "") {
showError(input, `${getFieldName(input)} talab qilinadi`);
} else {
showSuccess(input);
}
});
}
// Get Field Name
function getFieldName(input) {
return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Check Input Lenght
function checkLenghth(input, min, max) {
if (input.value.length < min) {
showError(
input,
`${getFieldName(input)} belgilari kamida ${min} belgidan iborat b'lishi kerak `
);
} else if (input.value.length > max) {
showError(
input,
`${getFieldName(input)} belgilari ${max} dan kam bo'lmasligi kerak `
);
} else {
showSuccess(input);
}
}
// Check E-mail Is Valid
function checkEmail(input) {
const re = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
if (re.test(input.value.trim())) {
showSuccess(input);
} else {
showError(input, "E-mail xato");
}
}
// Check Password Match
function checkPasswordMatch(input1, input2) {
if (input1.value !== input2.value) {
showError(input2, "Parol mos kelmadi");
}
}
form.addEventListener("submit", (e) => {
e.preventDefault();
checkRequired([username, email, password, cPassword]);
checkLenghth(username, 3, 15);
checkLenghth(password, 8, 25);
checkEmail(email);
checkPasswordMatch(password, cPassword);
});
```

#### Natija:

![HTML result](/img/blog/code-3.PNG)