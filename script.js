//navigation
document.addEventListener('scroll', onscroll);

function onscroll(event) {
    const curPos = window.scrollY;
    const sect = document.querySelectorAll('section');
    const links = document.querySelectorAll('#header-menu a');

    sect.forEach((el) => {
        if(el.offsetTop <= curPos+95 && (el.offsetTop + el.offsetHeight) > curPos) {
            links.forEach((a) => {
                a.classList.remove('active');
                if(el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            })
        }
    });

}

// portfolio bordered img
gallery.addEventListener('click', event => {
    let target = event.target;
    if (target.tagName == 'IMG') {
        gallery.querySelectorAll('img').forEach(item => {
            item.style.boxShadow = "none";
        });
        event.target.style.boxShadow = "0px 0px 0px 5px #ffffff";
    }

})

//portfolio random
const images = document.querySelectorAll('.gallery-img');
let randomSrc = [];

images.forEach(element => {
    randomSrc.push(element.src);
});

const randomImages = () => {
    randomSrc.sort(() => Math.random() - 0.5);
    images.forEach((element, index) => {
        element.src = randomSrc[index];
    });
    console.log(randomSrc);
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
let slideIndex = 0;
let counter = 0;

showSlides(0);

function nextSlide(n) {
    return showSlides(n);
};

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    slides.forEach(element => {
        element.style.display = "none"
    });
    slideIndex += n;
    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    slides[slideIndex].style.display = "block";
    let slider = document.querySelector(".slider");
    let slide2 = document.querySelector(".slide2");
    if (slide2.style.display === "block") {
        slider.classList.add("slider_blue");
    } else {
        slider.classList.remove("slider_blue");
    }
}

document.getElementById('pr-btn').addEventListener('click', (event) => {
    nextSlide(-1);
});

document.getElementById('nx-btn').addEventListener('click', (event) => {
    nextSlide(1);
});



// black screen on/off
const vertPhone = document.querySelector("#ph-vert");
const scrVert = document.querySelector("#scr-vert");

const horPhone = document.querySelector("#ph-hor");
const scrHor = document.querySelector("#scr-hor");

vertPhone.addEventListener('click', (event) => {
    if (scrVert.classList.contains("screen-off")) {
        scrVert.classList.remove('screen-off');
    } else {
        scrVert.classList.add('screen-off');
    }
});

scrVert.addEventListener('click', (event) => {
    event.target.classList.add('screen-off');
});


horPhone.addEventListener('click', (event) => {
    if (scrHor.classList.contains("screen-off")) {
        scrHor.classList.remove('screen-off');
    } else {
        scrHor.classList.add('screen-off');
    }
});

scrHor.addEventListener('click', (event) => {
    event.target.classList.add('screen-off');
});




