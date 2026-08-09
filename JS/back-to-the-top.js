const backToTopButton =
document.getElementById("back-to-top-button");

if(backToTopButton){

    backToTopButton.onclick = function(){

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    };

}