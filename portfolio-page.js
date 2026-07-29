const parallaxImages = document.querySelectorAll(
    ".responsibilities-parallax-left img, .responsibilities-parallax-right img"
);


window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;


    parallaxImages.forEach(image => {

        image.style.transform =
            `translateY(${scrollPosition * 0.15}px)`;

    });

});