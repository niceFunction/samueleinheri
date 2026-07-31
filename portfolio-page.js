const responsibilitiesContainer = document.querySelector(".responsibilities-container");

if (responsibilitiesContainer) {

    const parallaxImages = responsibilitiesContainer.querySelectorAll(
        ".responsibilities-parallax-left img, .responsibilities-parallax-right img"
    );

    function updateResponsibilitiesParallax() {

        const rect = responsibilitiesContainer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Only apply while the responsibilities section is visible.
        if (rect.bottom <= 0 || rect.top >= windowHeight) {
            return;
        }

        const movement = (windowHeight / 2 - rect.top) * 0.15;

        parallaxImages.forEach(img => {
            img.style.transform = `translate3d(0, ${movement}px, 0)`;
        });
    }

    updateResponsibilitiesParallax();

    window.addEventListener("scroll", updateResponsibilitiesParallax, {
        passive: true
    });

    window.addEventListener("resize", updateResponsibilitiesParallax);
}