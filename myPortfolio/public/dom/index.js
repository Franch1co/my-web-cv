const navbar = document.querySelector('nav');

document.addEventListener('scroll', (e) => {
    
    if (document.documentElement.scrollTop > 50) {
        navbar.setAttribute('id', 'navscroll');
        navbar.style.backgroundColor = '#bbb5ae';
    } else {
        navbar.removeAttribute('id', 'navscroll');
        navbar.style.backgroundColor = 'transparent';
    }
})

const nav = document.querySelector('.navbar-toggler');
nav.addEventListener('click', (e) => {
    const navbarNav = document.querySelector('#navbarNav');
    navbarNav.style.backgroundColor = '#bbb5ae';
})

const textDisplay = document.querySelector('#textDisplay');

var typewriter = new Typewriter(textDisplay, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString("Hi, I'm Francisco and I'm a programmer.")
  .pauseFor(300)
  .deleteChars(17)
  .typeString('I love to develop new things!')
  .pauseFor(300)
  .deleteChars(51)
  .typeString('I love new challenges!')
  .pauseFor(400)
  .deleteChars(15)
  .typeString('to learn new technologies!')
  .pauseFor(1000)
  .start();

const cursor = document.querySelector('.Typewriter__cursor');
cursor.classList.remove('Typewriter__cursor');


