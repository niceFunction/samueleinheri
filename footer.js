fetch("./footer.html")

.then(response => {

    if (!response.ok) {

        throw new Error("Could not load footer.html");

    }

    return response.text();

})

.then(data => {

    document.getElementById(
        "footer-placeholder"
    ).innerHTML = data;

    const footer =
    document.querySelector(".footer-background");

    function updateFooterVisibility() {

        const scrollPosition =
        window.innerHeight + window.scrollY;

        const pageHeight =
        document.documentElement.scrollHeight;

        const reachedBottom =
        scrollPosition >= pageHeight - 2;

        if (reachedBottom) {

            footer.classList.add("visible");

        }
        else {

            footer.classList.remove("visible");

        }

    }

    window.addEventListener(
        "scroll",
        updateFooterVisibility
    );

    window.addEventListener(
        "resize",
        updateFooterVisibility
    );

    updateFooterVisibility();

    /* MAIL */
    document.getElementById(
        "footer-mail-button"
    ).onclick = function(){

        window.location.href =
        SITE_REFERENCES.mail;

    };

    /* LINKEDIN */
    document.getElementById(
        "footer-linkedin-button"
    ).onclick = function(){

        window.open(

            SITE_REFERENCES.linkedin,

            "_blank"

        );

    };

    /* RESUME */
    document.getElementById(
        "footer-resume-button"
    ).onclick = function(){

        window.open(

            SITE_REFERENCES.resume,

            "_blank"

        );

    };

})

.catch(error => {

    console.error(error);

});