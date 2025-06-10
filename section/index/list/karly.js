const starbucks = document.querySelector(".project > .inner > .karly");
const link = starbucks.querySelector(".link");

link.classList.add("animate__animated");
link.style.display = "none";

// 스크롤시 애니메이션 실행
window.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: starbucks,
    start: "top 50%",
    onEnter: () => {
      aniStart();
    },

    onLeaveBack: () => {
      aniEnd();
    },
  });
});

function aniStart() {
  link.style.display = "flex";
  link.classList.remove("animate__backOutLeft");
  link.classList.add("animate__backInRight");
}

function aniEnd() {
  link.classList.remove("animate__backInRight");
  link.classList.add("animate__backOutLeft");
}
