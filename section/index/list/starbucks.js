const starbucks = document.querySelector(".project > .inner > .starbucks");
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

/* 자세히 보기 부분 */

// [자세히 보기 버튼]
const add_button = document.querySelector(".project > .inner > .starbucks .add-button");

// [추가 정보 박스]
const add_link = document.querySelector(".add-box");
const nav = document.querySelector("nav");
const exit_button = add_link.querySelector(".content > .exit-button");

/* 활성화 */
add_button.addEventListener("click", () => {
  add_link.style.display = "block";
  document.body.style.overflow = "hidden";

  // 상단으로 부터 얼마나 떨어질껀지 정하는 값
  const topOffset  = window.scrollY + (parseInt(getComputedStyle(add_link).height) / 3);
  add_link.style.top = `${topOffset}px`;

  const width = document.documentElement.clientWidth / 2;
  add_link.style.left = `${
    width - parseInt(getComputedStyle(add_link).width) / 2
  }px`;

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
