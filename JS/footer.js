fetch("./footer.html")

.then(response => {

    if (!response.ok) {

        throw new Error("Could not load footer.html");

    }

    return response.text();

})

.then(data => {

    /* START OF INSERT FOOTER */
    document.getElementById(
        "footer-placeholder"
    ).innerHTML = data;
    /* END OF INSERT FOOTER */

    /* START OF HOVER MESSAGE SETTINGS */
    const FOOTER_MESSAGES = {

        mail:
        "Send me an Email!",

        linkedin:
        "Connect with me on LinkedIn!",

        resume:
        "Check out my Resume!"

    };
    /* END OF HOVER MESSAGE SETTINGS */

    /* START OF GET FOOTER ELEMENTS */
    const mailButton =
        document.getElementById(
            "footer-mail-button"
        );

    const linkedinButton =
        document.getElementById(
            "footer-linkedin-button"
        );

    const resumeButton =
        document.getElementById(
            "footer-resume-button"
        );

    const hoverMessage =
        document.getElementById(
            "footer-hover-message"
        );
    /* END OF GET FOOTER ELEMENTS */

    /* START OF HOVER MESSAGE FUNCTION */
    function showFooterMessage(message) {

        hoverMessage.textContent =
            message;

        hoverMessage.style.opacity =
            "1";

    }


    function hideFooterMessage() {

        hoverMessage.style.opacity =
            "0";

    }
    /* END OF HOVER MESSAGE FUNCTION */

    /* START OF MAIL HOVER */
    mailButton.addEventListener(
        "mouseenter",
        function() {

            showFooterMessage(
                FOOTER_MESSAGES.mail
            );

        }
    );

    mailButton.addEventListener(
        "mouseleave",
        function() {

            hideFooterMessage();

        }
    );
    /* END OF MAIL HOVER */

    /* START OF LINKEDIN HOVER */
    linkedinButton.addEventListener(
        "mouseenter",
        function() {

            showFooterMessage(
                FOOTER_MESSAGES.linkedin
            );

        }
    );

    linkedinButton.addEventListener(
        "mouseleave",
        function() {

            hideFooterMessage();

        }
    );
    /* END OF LINKEDIN HOVER */

    /* START OF RESUME HOVER */
    resumeButton.addEventListener(
        "mouseenter",
        function() {

            showFooterMessage(
                FOOTER_MESSAGES.resume
            );

        }
    );

    resumeButton.addEventListener(
        "mouseleave",
        function() {

            hideFooterMessage();

        }
    );
    /* END OF RESUME HOVER */

    /* START OF MAIL CLICK */
    mailButton.onclick = function(){

        window.location.href =
        SITE_REFERENCES.mail;

    };
    /* END OF MAIL CLICK */

    /* START OF LINKEDIN CLICK */
    linkedinButton.onclick = function(){

        window.open(
            SITE_REFERENCES.linkedin,
            "_blank"
        );

    };
    /* END OF LINKEDIN CLICK */

    /* START OF RESUME CLICK */
    resumeButton.onclick = function(){

        window.open(
            SITE_REFERENCES.resume,
            "_blank"
        );

    };
    /* END OF RESUME CLICK */

})

.catch(error => {

    console.error(error);

});