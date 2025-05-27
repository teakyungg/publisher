{
  const intro = document.querySelector(".intro-message");
  const title = intro.querySelector(".intro-title");

  window.addEventListener("load", () => {
    gsap.to(intro, {
      scrollTrigger: {
        trigger: intro,
        start: "top 60%",

        onEnter: () => {
          title.classList.toggle("animate__animated");
          title.classList.toggle("animate__rubberBand");
        },

        onLeaveBack: () => {
          title.classList.toggle("animate__animated");
          title.classList.toggle("animate__rubberBand");
        },
      },
    });
  });
}
