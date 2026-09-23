function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("active");

}


document.addEventListener("click", function(event) {

    const menu = document.getElementById("navMenu");

    const button = document.querySelector(".menu-button");

    if (!menu || !button) return;

    if (
        !menu.contains(event.target) &&
        !button.contains(event.target)
    ) {

        menu.classList.remove("active");

    }

});
