const box = document.getElementById("main-box");

console.log(box.getBoundingClientRect())


console.log(box.offsetTop)
console.log(box.offsetLeft)
// Seen from the screen top and left means the distance to the box

console.log(box.clientTop)
console.log(box.clientLeft)
// To the content from top and left / if there is no border then it is 0

console.log(box.offsetWidth)
console.log(box.offsetHeight)
// The dimensions from the box, including borders

console.log(box.clientWidth)
console.log(box.clientHeight)
// The dimensions from the box, excluding borders
// Scrollbars also excluded

console.log(box.scrollHeight)
// Scroll including not visible part
console.log(box.scrollTop)
// Thze distance to the top scroll, (0)

console.log(window.innerWidth)
console.log(window.innerHeight)
// Including scrollbars

console.log(documemnt.documentElement.clientWidth)
console.log(documemnt.documentElement.clientHeight)
// Exluding scrollbars


console.log(box.scrollTo(0,200));
// Scrolls to the given position
console.log(box.scrollBy(0,50));
// Scrolls 50 more then the actually position