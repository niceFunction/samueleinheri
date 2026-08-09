document.addEventListener("DOMContentLoaded", function(){

    const container = document.querySelector(".dynamic-container");

    const projects = Array.from(
        container.querySelectorAll(".portfolio-project")
    );


    projects.forEach(project => {

        const visible = project.dataset.visible;
        const orderID = project.dataset.orderId;


        // Visibility
        if(visible === "false"){

            project.classList.add("hidden-project");

        }


        // Order
        project.style.order = orderID;

    });

});