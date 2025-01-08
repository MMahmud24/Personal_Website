window.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    
    const body = document.body;
    
    if (scrollPosition > 100) {
        body.classList.add("scrolled");
    } else {
        body.classList.remove("scrolled");
    }
});


