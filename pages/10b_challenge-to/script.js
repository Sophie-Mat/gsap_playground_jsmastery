import gsap from 'gsap';

const showToast1 = () => {
    gsap.to('.toast.one', {
        y: -120,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power4.out',
        onComplete: () => {
            gsap.to('.toast.one', {
                delay: 1.5,
                y: 0,
                opacity: 0,
                scale: 0.95,
                duration: 0.7,
                ease: 'power2.in',
                onComplete: () => {
                    setTimeout(showToast2, 1000)
                }

            })
        }
    })
}

const showToast2 = () => {
    gsap.to('.toast.two', {
        y: -120,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power4.out',
        onComplete: () => {
            gsap.to('.toast.two', {
                delay: 1.5,
                y: 0,
                opacity: 0,
                scale: 0.95,
                duration: 0.7,
                ease: 'power2.in',
                onComplete: () => {
                    setTimeout(showToast1, 1000)
                }

            })
        }
    })
}

showToast1();