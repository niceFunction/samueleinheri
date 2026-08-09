fetch("./header.html")

.then(response => {
    if (!response.ok) {
        throw new Error("Could not load header.html");
    }
    return response.text();
})

.then(data => {

    document.getElementById("header-placeholder").innerHTML = data;

    document.getElementById("header-profile").onclick = function () {
        window.location.href = SITE_REFERENCES.portfolio;
    };

    document.getElementById("header-portfolio-button").textContent =
    "PORTFOLIO";

    document.getElementById("header-prototypes-button").textContent =
    "PROTOTYPES";

    document.getElementById("header-about-button").textContent =
    "ABOUT ME";

    /* PAGE BUTTON LINKS */
    /* PORTFOLIO */
    document.getElementById("header-portfolio-button").onclick = function () {

        window.location.href = SITE_REFERENCES.portfolio;

    };

    /* PROTOTYPES */
    document.getElementById("header-prototypes-button").onclick = function () {

        window.location.href = SITE_REFERENCES.prototypes;

    };

    /* ABOUT ME */
    document.getElementById("header-about-button").onclick = function () {

        window.location.href = SITE_REFERENCES.about;

    };

    document.getElementById("header-mail-button").onclick = function(){
        window.location.href = SITE_REFERENCES.mail;
    };

    document.getElementById("header-linkedin-button").onclick = function(){
        window.open(
            SITE_REFERENCES.linkedin,
            "_blank"
        );
    };

    document.getElementById("header-resume-button").onclick = function(){
        window.open(
            SITE_REFERENCES.resume,
            "_blank"
        );
    };
})

.catch(error => {
    console.error(error);
});