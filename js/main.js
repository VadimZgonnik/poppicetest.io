$(document).ready(() => {
    $('input[type="range"]').on('input', (e) => {
        const value = e.target.value;
        $(e.target).css('background', `-webkit-linear-gradient(left, #1db1ae 0%, #1db1ae ${value}%, #e4e4e4 ${value}%, #e4e4e4 100%)`)
    })

})


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {

    showSlides(slideIndex += n);
    // console.log(slideIndex);
}

function minusSlides(n) {
    showSlides(slideIndex += n);
    // console.log(slideIndex);
}

function currentSlide(n) {
    showSlides(slideIndex = n);

}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");

    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
}