let btn = document.querySelector("#go-up");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        btn.style.display = "flex";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", () => {
    window.scrollTo(0, 0);
});