const navbarLinks = document.querySelector(".navbar_links");
const toggleButton = document.querySelector(".links_toggle-buttons")
const toggleButtonsIcon = document.querySelectorAll(".toggle_button-icon");
const introSection = document.querySelector(".intro");

/*Toggle links */
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("show-links");
    introSection.classList.toggle("show-overley");
    document.body.classList.toggle("no-scroll");

    toggleButtonsIcon.forEach(buttonIcon => {
        buttonIcon.classList.toggle("active_button-icon");
    })
})

/*Close Links */
window.addEventListener("resize", () => {
    if(window.innerWidth > 769){
        if(navbarLinks.classList.contains("show-links")){
        
            navbarLinks.classList.remove("show-links");
            introSection.classList.remove("show-overley");
            document.body.classList.toggle("no-scroll");
            toggleButtonsIcon[1].classList.remove("active_button-icon");
            toggleButtonsIcon[0].classList.add("active_button-icon");
        }        
    }
})