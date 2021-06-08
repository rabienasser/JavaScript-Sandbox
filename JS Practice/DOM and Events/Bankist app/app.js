'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');


const openModal = function (e) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  e.preventDefault()
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// CREATING WEBSITE EFFECTS (RE-USABLE)

// CREATE SMOOTH SCROLLING
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', (e) => {
    // const s1coords = section1.getBoundingClientRect();
    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: 'smooth'
    // })

    // Modern version
    section1.scrollIntoView({ behavior: 'smooth' })
})



// PAGE NAVIGATION
document.querySelectorAll('.nav__link').forEach
(el => el.addEventListener('click', function(e) {
    e.preventDefault()  //prevents nav links from scrolling down page to appropriate section

   const id = this.getAttribute('href')
   console.log(id)
   document.querySelector(id).scrollIntoView( { behavior: 'smooth' })
}))

// Another way of achieving this
document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();
  
    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });
  



//   BUILDING TABBED COMPONENTS
const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

// tabs.forEach(tab => tab.addEventListener('click', () => {    //Not ideal because if there are many tabs, webpage will slow down
//     console.log(2334)
// }))

tabsContainer.addEventListener('click', (e) => {
    const clicked = e.target.closest('.operations__tab')

    // Guard clause
    if(!clicked) return

    // Active tab
    tabs.forEach(tab => tab.classList.remove('operations__tab--active'))
    clicked.classList.add('operations__tab--active')

    // Active content area
    tabsContent.forEach(tab => tab.classList.remove('operations__content--active'))

    document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active')
})




// MENU FADE ANIMATION
const nav = document.querySelector('nav')

const handleHover = (e, opacity) => {
    if(e.target.classList.contains('nav__link')) {
        const target = e.target

        const siblings = target.closest('.nav')
        .querySelectorAll('.nav__link')
        const logo = target.closest('.nav')
        .querySelector('img')

        siblings.forEach(el => {
            if(el !== target) {
                el.style.opacity = opacity
                logo.style.opacity = opacity
            }
        })
    }
}

nav.addEventListener('mouseover', (e) => {
    handleHover(e, 0.3)
})

nav.addEventListener('mouseout', (e) => {
    handleHover(e, 1)
})