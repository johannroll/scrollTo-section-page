const btnTop = document.querySelector('.btnToTop')
const container4 = document.querySelector('container4');
const contain4Btn = document.querySelector('li:last-child');
const menuIcon = document.querySelector('.center');
const mobileMenu = document.querySelector('.nav-mobile');
const mobileItems = document.querySelector('.mobile-items')

function scrollToStart(e) {
    e.preventDefault();
    const block = document.querySelector('.block');
    
    block.scrollTo({top:0, behavior: 'smooth'}); 
}

const block = document.querySelector('.block');
block.addEventListener('scroll', function (){
    let scrollPosition =  block.scrollTop;
    if (scrollPosition > 40) {
        btnTop.style.cssText = 'transition: ease-in 0.3s; display:block';
    } else if (scrollPosition < 30) {
        btnTop.style.display = 'none';
    }
    if (window.innerWidth < 900) {
        btnTop.style.display = 'none';
    } 

});

menuIcon.addEventListener('click', function () {
    if (menuIcon.classList.contains('center-hover')) {
        menuIcon.classList.remove('center-hover');
        mobileMenu.style.height = '0px';
        mobileMenu.style.transition = ' 0.5s';
        
    } else {
        menuIcon.classList.add('center-hover');
        mobileMenu.style.height = '155px';
        mobileMenu.style.transition = '0.5s';
    }
    
}); 
   
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const heading = entry.target.querySelector('.heading');
    if (entry.isIntersecting) {
      heading.classList.add('h1-container');
      return;
    }

    heading.classList.remove('h1-container');
  });
});

observer.observe(document.querySelector('.container'));
console.log(observer);

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const heading2 = entry.target.querySelector('.heading2');
    if (entry.isIntersecting) {
      heading2.classList.add('h1-container');
      return;
    }

    heading2.classList.remove('h1-container');
  });
});

observer2.observe(document.querySelector('.container2'));
const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const heading3 = entry.target.querySelector('.heading3');
    if (entry.isIntersecting) {
      heading3.classList.add('h1-container');
      return;
    }

    heading3.classList.remove('h1-container');
  });
});

observer3.observe(document.querySelector('.container3'));
const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const heading4 = entry.target.querySelector('.heading4');
    if (entry.isIntersecting) {
      heading4.classList.add('h1-container');
      return;
    }

    heading4.classList.remove('h1-container');
  });
});

observer4.observe(document.querySelector('.container4'));

btnTop.addEventListener('click', scrollToStart);

