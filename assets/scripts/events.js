const buttonEl = document.querySelector("button");

const formEl = document.querySelector("form");

// const buttonsEl = document.querySelectorAll("button");
// buttonsEl.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     console.log(event);
//   });
// });

// buttonEl.addEventListener("click", (event) => {
//   console.log(event);
// });

// buttonEl.onclick = (event) => {
//   console.log(event);
// };

// buttonEl.addEventListener("mouseenter", (event) => {
//   console.log(event);
// });

// buttonEl.addEventListener("mouseleave", (event) => {
//   console.log(event);
// });

// window.addEventListener("scroll", (event) => {
//   console.log(event);
// });

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

const divEl = document.querySelector("div");

buttonEl.addEventListener("click", (event) => {
  console.log(event);
  event.stopPropagation();
});

divEl.addEventListener("click", (event) => {
  console.log(event);
});

const listItemsEl = document.querySelectorAll("li");

// listItemsEl.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     console.log(event);
//     event.target.classList.toggle("highlight");
//     event.stopPropagation();
//   });
// });

const listEl = document.querySelector("ul");

listEl.addEventListener("click", (event) => {
  console.log(event);
  event.target.closest("li").classList.toggle("highlight");
  formEl.submit();
});
