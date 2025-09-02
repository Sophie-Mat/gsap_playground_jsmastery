import gsap from 'gsap';

gsap.to('.card', {
    boxShadow: '0px 0px 30px 5px white',
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: 'sine.inOut'
})