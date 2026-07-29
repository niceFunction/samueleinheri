const parallaxImages = document.querySelectorAll(
    ".responsibilities-parallax-left img, .responsibilities-parallax-right img"
);

const responsibilitiesContainer =
document.querySelector(".responsibilities-container");

window.addEventListener("scroll", () => {

    const containerPosition =
    responsibilitiesContainer.getBoundingClientRect();

    const windowHeight =
    window.innerHeight;

    const movement =
    (windowHeight / 2 - containerPosition.top) * 0.15;

    parallaxImages.forEach(image => {

        image.style.transform =
        `translateY(${movement}px)`;

    });
});