const navbar = document.querySelector('nav');

document.addEventListener('scroll', (e) => {
    
    if (document.documentElement.scrollTop > 50) {
        navbar.setAttribute('id', 'navscroll');
        navbar.style.backgroundColor = '#bbb5ae';
        navbar.style.width = '100%';
    } else {
        navbar.removeAttribute('id', 'navscroll');
        navbar.style.backgroundColor = 'transparent';
        navbar.style.width = '80%';
    }
})

const nav = document.querySelector('.navbar-toggler');
nav.addEventListener('click', (e) => {
    const navbarNav = document.querySelector('#navbarNav');
    navbarNav.style.backgroundColor = '#bbb5ae';
})

const writerDisplay = () => {

  const textDisplay = document.querySelector('#textDisplay');

  let typewriter = new Typewriter(textDisplay, {
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

  // const cursor = document.querySelector('.Typewriter__cursor');
  // cursor.classList.remove('Typewriter__cursor');

}

writerDisplay();

const ENs = document.querySelectorAll('#en');
const PTs = document.querySelectorAll('#pt');
const EN = document.querySelector('#enMyText');

function changePortuguese() {

  EN.innertext = '';

  const textDisplay = document.querySelector('#textDisplay');

  let typewriter = new Typewriter(textDisplay, {
    loop: true,
    delay: 75,
  });

  typewriter
    .pauseFor(2500)
    .typeString("Olá, sou o Francisco e sou um programador.")
    .pauseFor(300)
    .deleteChars(19)
    .typeString('adoro desenvolver novas coisas!')
    .pauseFor(300)
    .deleteChars(54)
    .typeString('Eu adoro novos desafios!')
    .pauseFor(400)
    .deleteChars(15)
    .typeString('aprender novas tecnologias!')
    .pauseFor(1000)
    .start();

  for (let EN of ENs){
    EN.classList.add('visually-hidden');
  }
  for (let PT of PTs){
    PT.classList.remove('visually-hidden');
  }
}

function changeEnglish() {

  writerDisplay();

  for (let PT of PTs){
    PT.classList.add('visually-hidden');
  }

  for (let EN of ENs){
    EN.classList.remove('visually-hidden');
  }  
}




