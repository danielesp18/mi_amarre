const d = document,
  firstMsg = d.querySelector(".first-msg"),
  secondMsg = d.querySelector(".second-msg"),
  threeMsg = d.querySelector(".three-msg"),
  fourthMsg = d.querySelector(".fourth-msg"),
  fifthMsg = d.querySelector(".fifth-msg"),
  sixthMsg = d.querySelector(".sixth-msg"),
  divButtonNo = d.querySelector(".container-btn-no"),
  btnNo = d.getElementById("no"),
  btnYes = d.getElementById("yes"),
  h2Important = d.querySelector(".h2-important");

const calcPositionDiv = () => {
  let btnWidth = btnNo.getBoundingClientRect().width;
  let btnHeight = btnNo.getBoundingClientRect().height;
  divButtonNo.style.width = btnWidth + "px";
  divButtonNo.style.height = btnHeight + "px";
};

const moverPosicionRandom = () => {
  btnNo.style.position = "absolute";
  btnNo.style.top =
    Math.random() * (window.innerHeight - btnNo.offsetHeight) + "px";
  btnNo.style.left =
    Math.random() * (window.innerWidth - btnNo.offsetWidth) + "px";
};

d.addEventListener("DOMContentLoaded", (e) => {
  calcPositionDiv();

  setTimeout(() => {
    firstMsg.classList.add("animate__fadeIn");
  }, 500);

  setTimeout(() => {
    firstMsg.classList.add("animate__fadeOut");
  }, 2000);

  setTimeout(() => {
    firstMsg.classList.add("deactivated");
  }, 2800);

  /* ------------------ */

  setTimeout(() => {
    secondMsg.classList.add("animate__fadeIn");
  }, 2900);

  setTimeout(() => {
    secondMsg.classList.add("animate__fadeOut");
  }, 4400);

  setTimeout(() => {
    secondMsg.classList.add("deactivated");
  }, 5200);

  /* ------------------ */

  setTimeout(() => {
    threeMsg.classList.add("animate__fadeIn");
  }, 5300);

  setTimeout(() => {
    threeMsg.classList.add("animate__fadeOut");
  }, 6800);

  setTimeout(() => {
    threeMsg.classList.add("deactivated");
  }, 7600);

  /* ------------------ */

  setTimeout(() => {
    fourthMsg.classList.add("animate__fadeIn");
  }, 7700);

  setTimeout(() => {
    fourthMsg.classList.add("animate__fadeOut");
  }, 9200);

  setTimeout(() => {
    fourthMsg.classList.add("deactivated");
  }, 10000);

  /* ------------------ */
  setTimeout(() => {
    fifthMsg.classList.add("animate__fadeIn");
  }, 10100);
});

btnNo.addEventListener("mouseenter", (e) => {
  moverPosicionRandom(btnNo);
});

btnYes.addEventListener("click", (e) => {
  fifthMsg.classList.add("animate__fadeOut");

  setInterval(() => {
    fifthMsg.classList.add("deactivated");
  }, 800);

  setInterval(() => {
    sixthMsg.classList.add("animate__fadeIn");
  }, 900);

  setInterval(() => {
    h2Important.classList.add("animated-machine-h2");
  }, 1000);

  setInterval(() => {
    h2Important.classList.add("animated-pointer-h2");
  }, 5000);
});
