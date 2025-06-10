const starbucks = document.querySelector(".project > .inner > .game_2048");
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
  link.classList.remove("animate__backOutRight");
  link.classList.add("animate__backInLeft");
}

function aniEnd() {
  link.classList.remove("animate__backInLeft");
  link.classList.add("animate__backOutRight");
}
