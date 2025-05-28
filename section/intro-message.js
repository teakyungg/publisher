{
  const intro = document.querySelector(".intro-message");
  const title = intro.querySelector(".intro-title");

  const slogan_txt_01 = intro.querySelector(".slogan-txt:nth-child(1)");
  const slogan_txt_02 = intro.querySelector(".slogan-txt:nth-child(2)");
  const slogan_txt_03 = intro.querySelector(".slogan-txt:nth-child(3)");

  let delay = false;

  window.addEventListener("load", () => {
    gsap.to(intro, {
      scrollTrigger: {
        trigger: intro,
        start: "top 50%",
        // marks: true,

        onEnter: () => {
          sloganAni();
        },

        onLeaveBack: () => {
          sloganAni();
        },
      },
    });
  });

  // 슬로건 애니메이션
  function sloganAni() {
    // 딜레이 세팅
    if (delay) return;
    setDelay();

    // 목표
    title.classList.toggle("animate__animated");
    title.classList.toggle("animate__rubberBand");

    // Trying
    slogan_txt_01.classList.toggle("animate__animated");
    slogan_txt_01.classList.toggle("animate__bounce");

    // Learning
    setTimeout(() => {
      slogan_txt_02.classList.toggle("animate__animated");
      slogan_txt_02.classList.toggle("animate__bounce");
    }, 500);

    // Growing
    setTimeout(() => {
      slogan_txt_03.classList.toggle("animate__animated");
      slogan_txt_03.classList.toggle("animate__bounce");
    }, 1000);
  }

  // 딜레이 컨트롤
  function setDelay() {
    setTimeout(() => {
      delay = false;
    }, 1500);
  }
}
