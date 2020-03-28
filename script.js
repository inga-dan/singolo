//navigation
document.addEventListener('scroll', onscroll);

function onscroll(event) {
    const curPos = window.scrollY;
    const sect = document.querySelectorAll('section');
    const links = document.querySelectorAll('#header-menu a');

    sect.forEach((el) => {
        if(el.offsetTop-100 <= curPos && (el.offsetTop + el.offsetHeight-100) > curPos) {
            links.forEach((a) => {
                a.classList.remove('active');
                if(el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            })
        }
    });

}



document.querySelector('#toggle-menu').addEventListener('click', function(){
    document.querySelector('#toggle-menu').classList.toggle('rotate');
})



// portfolio bordered img
pictures = document.getElementById('gallery');

pictures.addEventListener('click', event=>{
    if (event.target.tagName==='img'.toUpperCase()){
        pictures.querySelectorAll('img').forEach(item =>{item.classList.remove('bordered');});
        event.target.classList.add('bordered');
    }
});


//sort portfolio img
const imageSort = document.querySelector("#gallery")

const buttonSort = document.querySelectorAll('.portfolio-button')
buttonSort.forEach(i => i.addEventListener('click', e => shuffle(imageSort)))
function shuffle(ul) {
  for (let i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
  }
}



//menu portfolio active
document.getElementById('menu-portfolio').addEventListener('click', (event) => {
    document.getElementById('menu-portfolio').querySelectorAll('button.portfolio-button').forEach(element => {
        element.classList.remove('active');
        event.target.classList.add('active');
    });
    randomImages();
});



//slider

function changeSlide (direction) {
    if(!isEnabled) return;
    isEnabled = false;

    let activeSlide = document.querySelector('.slide.active');
    let nextSlide = null;
    let activeSlideX = activeSlide.offsetLeft;
    let nextSlideX = activeSlide.offsetWidth;
    let slideSpeed = 34;

    if (direction === 'right') {
        nextSlide = activeSlide.nextElementSibling || activeSlide.parentElement.firstElementChild;
        nextSlide.style.left = `${activeSlide.clientWidth}px`;
        activeSlideX = activeSlide.offsetLeft;
        nextSlideX = activeSlide.offsetWidth;
        slideSpeed *= -1;
    } else if (direction === 'left'){
        nextSlide = activeSlide.previousElementSibling || activeSlide.parentElement.lastElementChild;
        nextSlide.style.right = `-${activeSlide.clientWidth}px`;
        activeSlideX = activeSlide.offsetLeft;
        nextSlideX = -activeSlide.offsetWidth;
    }
            
    let moveSlides = setInterval( () => {
        activeSlideX += slideSpeed;
        nextSlideX += slideSpeed;
        activeSlide.style.left = `${activeSlideX}px`;
        nextSlide.style.left = `${nextSlideX}px`;

        if (Math.abs(nextSlide.offsetLeft) < Math.abs(slideSpeed)) {
            activeSlide.style.left = `${activeSlideX - nextSlide.offsetLeft}px`;
            nextSlide.style.left = `${nextSlideX - nextSlide.offsetLeft}px`;
            clearInterval(moveSlides);
            isEnabled = true;
        }
    }, 1000/60);

    nextSlide.classList.add('active');
    activeSlide.classList.remove('active');
}



let isEnabled = true;
document.querySelector('.prev-button').addEventListener('click', () => changeSlide('left'));
document.querySelector('.next-button').addEventListener('click', () => changeSlide('right'));




// black screen on/off
const vertPhone = document.querySelector('#ph-vert');
const scrVert = document.querySelector('#scr-vert');

const horPhone = document.querySelector('#ph-hor');
const scrHor = document.querySelector('#scr-hor');

vertPhone.addEventListener('click', (event) => {
    if (scrVert.classList.contains('screen-off')) {
        scrVert.classList.remove('screen-off');
    } else {
        scrVert.classList.add('screen-off');
    }
});

scrVert.addEventListener('click', (event) => {
    event.target.classList.add('screen-off');
});


horPhone.addEventListener('click', (event) => {
    if (scrHor.classList.contains('screen-off')) {
        scrHor.classList.remove('screen-off');
    } else {
        scrHor.classList.add('screen-off');
    }
});

scrHor.addEventListener('click', (event) => {
    event.target.classList.add('screen-off');
});



//form

let form = document.querySelector('#form');

form.addEventListener('submit',  event => {
    let subject = document.querySelector('#form-subject').value;
    let describe = document.querySelector('#form-describe').value;
    let them = document.querySelector('#subject-message');
    let description = document.querySelector('#describe-message');
    event.preventDefault();
    if (form.checkValidity()) {
        if (subject){
            them.innerHTML ='<i class="message-title">Subject:</i> '+subject;
        }
        else {
            them.innerHTML='<i class="message-title">No subject</i>';
        }
        if (describe){
            description.innerHTML ='<i class="message-title">Description:</i> '+describe;
        }
        else {
            description.innerHTML='<i class="message-title">No description</i>'; 
        }
        document.getElementById('message-block').classList.remove('hidden');
    }
});

document.querySelector('#button-close').addEventListener('click', event=> {
    document.querySelector('#message-block').classList.add('hidden');
    form.reset();
});
