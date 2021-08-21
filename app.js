const printMyName = () => { 
    console.log("Hello, my name is Eduek Akpan-Nyah.")
}

printMyName()

const animate1 = document.querySelector(`[data-animate="1"]`);
const animate2 = document.querySelector(`[data-animate="2"]`);
const animate3 = document.querySelector(`[data-animate="3"]`);
const animate4 = document.querySelector(`[data-animate="4"]`);
const animate5 = document.querySelector(`[data-animate="5"]`);
const animate6 = document.querySelector(`[data-animate="6"]`);
const animate7 = document.querySelector(`[data-animate="7"]`);
const animate8 = document.querySelector(`[data-animate="8"]`);
const animate9 = document.querySelector(`[data-animate="9"]`);
const animate10 = document.querySelector(`[data-animate="10"]`);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(animate1, {
    opacity: 0,
    y: 70
}, {
    opacity: 1, 
    duration: 0.50, 
    y: 0, 
    padding: 0, 
    ease: "sine.out",
    scrollTrigger: {
        trigger: animate1
}})
    
gsap.fromTo(animate2, {
    opacity: 0,
    y: 70
}, {
    opacity: 1,
    duration: 0.50,
    y: 0,
    ease: "sine.out",
    scrollTrigger: {
        trigger: animate2,
        start: "top 95%"
}})

gsap.fromTo(animate3, {
    opacity: 0,
    y: 70
}, {
    opacity: 1,
    duration: 0.50,
    y: 0,
    ease: "sine.out",
    scrollTrigger: {
        trigger: animate3,
        start: "top 95%"
}})

gsap.fromTo(animate4, {
    opacity: 0,
    y: 70
}, {
    opacity: 1,
    duration: 0.50,
    y: 0,
    ease: "sine.out",
    scrollTrigger: {
        trigger: animate4,
        start: "top 95%"
}})

gsap.fromTo(animate5, {
    opacity: 0, 
    y: 70
}, {
    opacity: 1,
    duration: 0.50,
    y: 0,
    ease: "sine.out",
    scrollTrigger: {
        trigger: animate5,
        start: "top 95%"
}})

gsap.fromTo(animate6, {
    opacity: 0,
    y: 70
}, {
    opacity: 1,
    duration: 0.50,
    y: 0,
    ease: "sine.out",
    scrollTrigger: {
        trigger: animate6,
        start: "top 95%"
}})

gsap.fromTo(animate7, {
    opacity: 0,
    scale: 0.8
}, {
    opacity: 1,
    scale: 1,
    duration: 0.50,
    ease: "sine",
    scrollTrigger: {
        trigger: animate7,
        start: "top 95%"
}})

gsap.fromTo(animate8, {
    opacity: 0,
    y: 70 
}, {
    opacity: 1,
    duration: 0.5, 
    y: 0, 
    ease: "sine.out", 
    scrollTrigger: {
        trigger: animate8,
        start: "top 95%"
}})

gsap.fromTo(animate9, {
    opacity: 0,
    y: 70
}, {
    opacity: 1,
    duration: 0.50,
    y: 0,
    ease: "sine.out",
    scrollTrigger: {
        trigger: animate9,
        start: "top 95%"
}})

gsap.fromTo(animate10, {
    opacity: 0, 
    y: 70
}, {
    opacity: 1,
    duration: 0.50,
    y: 0, 
    ease: "sine.out",
    scrollTrigger: {
        trigger: animate9,
        start: "bottom 95%"
}})