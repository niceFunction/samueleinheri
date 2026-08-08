fetch("../footer.html")

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