let button = document.querySelectorAll("nav > .inner > li");
const scrollPostion = [800, 1400, 3500, 0];

button = Array.from(button);
button.map((item, index) => {
  item.addEventListener("click", () => {
    window.scrollTo({ left: 0, top: scrollPostion[index], behavior: "smooth" });
  });
});
