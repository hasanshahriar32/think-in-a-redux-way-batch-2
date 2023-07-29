// select dom elements
const counterEl = document.querySelector("#counter");
const minusBtn = document.querySelector("#decrement");
const plusBtn = document.querySelector("#increment");

// set initial state
let count = 0;

// add event listeners
minusBtn.addEventListener("click", () => {
  count--;
  counterEl.textContent = count;
});

plusBtn.addEventListener("click", () => {
  count++;
  counterEl.textContent = count;
});
