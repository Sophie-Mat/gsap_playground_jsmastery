import gsap from 'gsap';

const reactions = document.querySelectorAll('.reactions button');

reactions.forEach((reaction) => {
  reaction.addEventListener('click', () => {
    const emoji = reaction.dataset.emoji;

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.textContent = emoji;

    const rect = reaction.getBoundingClientRect();
    bubble.style.position = 'absolute';
    bubble.style.left = `${rect.left + rect.width / 2}px`; // Center of button horizontally
    bubble.style.top = `${rect.top + rect.height / 2}px`; // Center of button vertically
    bubble.style.transform = 'translate(-50%, -50%)'; // Center the bubble

    document.body.appendChild(bubble);

    gsap.fromTo(
      bubble,
      {
        y: 0,
        scale: 0.8,
        rotation: 0,
        opacity: 1,
      },
      {
        y: -150,
        scale: 1.5,
        rotation: 360,
        opacity: 0,
        duration: 1.5,
        ease: 'power1.out',
        onComplete: () => bubble.remove(),
      }
    );
  });
});
