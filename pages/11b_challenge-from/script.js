import gsap from "gsap";

gsap.from(".card-inner", {
    y: 500,
    rotationY: -360,
    transformOrigin: "center center",
    scale: 0.1,
    duration: 1,
    ease: "power1.out",
    })

const card = document.querySelector("#card");
const inner = card.querySelector(".card-inner");

card.addEventListener("mouseenter", () => {
  gsap.to(inner, {
    rotationY: 180,
    transformOrigin: "center center",
    duration: 0.5,
    ease: "power1.inOut"
  });
});

card.addEventListener("mouseleave", () => {
  gsap.to(inner, {
    rotationY: 0,
    transformOrigin: "center center",
    duration: 0.5,
    ease: "power1.inOut"
  });
});
