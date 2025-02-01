// const buttons = document.querySelectorAll("button");

// const buttonClickHandler = event => {
//     // event.target.disabled = true;
//     console.log(event);
// };

// buttons.forEach((button)=>{
//     button.addEventListener("mouseenter", buttonClickHandler);
// })

// window.addEventListener('scroll', ()=>{
//     console.log(scrollY);
// })

// const anotherClickHandler = () => {
//   console.log("Another click handler");
// };

// const boundFn = buttonClickHandler.bind(this);

// button.addEventListener("click", buttonClickHandler);

// button.addEventListener('click', boundFn);
// setTimeout(() => {
//   button.removeEventListener("click", boundFn);
// }, 2000);

// button.addEventListener("click", buttonClickHandler);
// // button.addEventListener("click", buttonClickHandler.bind(this));
// // Second is not the same

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);
// // setTimeout(() => {
// //     button.removeEventListener("click", buttonClickHandler.bind(this));
// //   }, 2000);
// // Second is not the same

const button = document.querySelector("div button:first-of-type");
const form = document.querySelector("form");
const div = document.querySelector("div");

form.addEventListener("submit", (e) => {
     e.preventDefault();
//   e.stopPropagation();
  console.log(e);
  console.log("Hello form");
});

div.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e);
  console.log("Hello div");
});
/* true */

button.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  // Stop propagation on the same button
  console.log(e);
  console.log("Hello button");
});

button.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  console.log(e);
  console.log("Hello button 2");
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach(item=>{
//     item.addEventListener('click', e=>{
//         e.target.classList.toggle('highlight');
//     })
// })

list.addEventListener("click", (e) => {
//   console.log(e.currentTarget);
  e.target.closest('li').classList.toggle("highlight");
//  form.submit();
//   form.click();
});
