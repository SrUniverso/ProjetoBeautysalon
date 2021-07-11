// DOM Document Object Model
/*Abre e fecha o menu ao clicar no icone*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*Fecha ao clicar num item do menu */
const Links = document.querySelectorAll('nav ul li a')

for (const link of Links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Quando a nav bar descer criar uma sombra sob ela adicionando a classe scroll no header */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}
// const header = document.querySelector('#header')
// const navHeight = header.offsetHeight

// window.addEventListener('scroll', function () {
//   if (window.scrollY >= navHeight) {
//     header.classList.add('scroll')
//   } else {
//     header.classList.remove('scroll')
//   }
// })

/* Testimonials slider */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* Scrollreveal */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonial,
#contact .text, #contact .links,
#footer .brand, footer .social
`,
  { interval: 100 }
)

/* Back to top show */
const backToTopButton = document.querySelector('.back-to-top')

function showButtonToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// const backToTopButton = document.querySelector('.back-to-top')
// window.addEventListener('scroll', function () {
//   if (window.scrollY >= 560) {
//     backToTopButton.classList.add('show')
//   } else {
//     backToTopButton.classList.remove('show')
//   }
// })

/* MARCADOR DO MENU CONFORME A PAGINA */

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  // Divide a tela em 8 partes horizontais e pega 1/4 para ser indicador
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight
    // encherga a linha do scan baseado na altura da pagina
    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
/* Simplificando varios eventos de scroll em um só */
//Crio funções nomeadas com os 'ifs' dos eventos e depois so declaro evento de scroll chamando eles

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  showButtonToTop()
  activateMenuAtCurrentSection()
})

/* Passo os nomes das funções dentro do evento no final, chamando todos de uma vez */
