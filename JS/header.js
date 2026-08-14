fetch("./header.html")

.then(response => {

    if (!response.ok) {

        throw new Error("Could not load header.html");

    }

    return response.text();

})

.then(data => {

    /* START: INSERT HEADER HTML */
    document.getElementById("header-placeholder").innerHTML = data;
    /* END: INSERT HEADER HTML */

    /* START: HEADER PROFILE BUTTON */
    document.getElementById("header-profile").onclick = function () {

        window.location.href =
        SITE_REFERENCES.portfolio;

    };
    /* END: HEADER PROFILE BUTTON */

    /* START: HEADER TEXT */
    document.getElementById("header-portfolio-button").textContent =
    "PORTFOLIO";

    document.getElementById("header-prototypes-button").textContent =
    "PROTOTYPES";

    document.getElementById("header-about-button").textContent =
    "ABOUT ME";
    /* END: HEADER TEXT */

    /* START: HEADER PAGE BUTTON LINKS */
    /* PORTFOLIO */
    document.getElementById("header-portfolio-button").onclick = function () {

        window.location.href =
        SITE_REFERENCES.portfolio;

    };

    /* PROTOTYPES */
    document.getElementById("header-prototypes-button").onclick = function () {

        window.location.href =
        SITE_REFERENCES.prototypes;

    };

    /* ABOUT ME */
    document.getElementById("header-about-button").onclick = function () {

        window.location.href =
        SITE_REFERENCES.about;

    };
    /* END: HEADER PAGE BUTTON LINKS */

    /* START: HEADER ICON BUTTONS */
    /* MAIL */
    document.getElementById("header-mail-button").onclick = function(){

        window.location.href =
        SITE_REFERENCES.mail;

    };

    /* LINKEDIN */
    document.getElementById("header-linkedin-button").onclick = function(){

        window.open(
            SITE_REFERENCES.linkedin,
            "_blank"
        );

    };

    /* RESUME */
    document.getElementById("header-resume-button").onclick = function(){

        window.open(
            SITE_REFERENCES.resume,
            "_blank"
        );

    };
    /* END: HEADER ICON BUTTONS */

    /* START: SHOW HEADER */
    document
        .getElementById("header-placeholder")
        .classList.add("header-loaded");
    /* END: SHOW HEADER */

})

.catch(error => {

    console.error(error);

    document
        .getElementById("header-placeholder")
        .classList.add("header-error");

});