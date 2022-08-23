const button = document.querySelector(".collapsible__button");
const content = document.querySelector(".collapsible__content");
const hidenText = document.querySelector(".collapsible__action--hidden");

hidenText.style.display = "none";

button.addEventListener("click", (event) => {  
  button.animate(keyframes, 400);
  event.target.style.display = "none";
  if (event.target.nextElementSibling) {
    event.target.nextElementSibling.style.display = "block";

    setTimeout(() => {
      content.style.display = "none";
    }, 400);
  }
  if (event.target.previousElementSibling) {
    event.target.previousElementSibling.style.display = "block";

    setTimeout(() => {
      content.style.display = "block";
    }, 400);
  }
});

let keyframes = [
  { transform: "scale(1.1)", backgroundColor: "#ea6262" },
  { transform: "scale(1)", backgroundColor: "#f89422", color: "#000000" },
];
