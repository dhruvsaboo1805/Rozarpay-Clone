document.getElementById("mobile-menu-btn").addEventListener("click", function () {
    const mobileMenu = document.getElementById("navbar-links");
    if (mobileMenu.classList.contains("mobile-view")) {
        console.log("hi");
        mobileMenu.classList.remove("mobile-view");
    } else {
        console.log("bye");
        mobileMenu.classList.add("mobile-view");
    }


});

   

