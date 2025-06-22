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


/* 자세히 보기 부분 */

// [자세히 보기 버튼] - 여기 수정
const add_button = document.querySelector(".project > .inner > .game_2048 .add-button");

// [추가 정보 박스] - 여기 수정
const add_link = document.querySelector(".game2048-add-box");
const nav = document.querySelector("nav");
const exit_button = add_link.querySelector(".content > .exit-button");

/* 활성화 */
add_button.addEventListener("click", () => {
  add_link.style.display = "block";
  document.body.style.overflow = "hidden";

  nav.style.display = "none";
});

/* Esc키 눌렀을때 (비활성화) */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    add_link.style.display = "none";
    nav.style.display = "flex";
    document.body.style.overflow = "auto";
  }
});

// 자세히 보기 x 버튼 (비활성화)
exit_button.addEventListener('click',()=>{
  add_link.style.display = "none";
  nav.style.display = "flex";
  document.body.style.overflow = "auto";
});
