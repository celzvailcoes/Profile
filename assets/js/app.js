$(document).ready(function () {
    // data aos
    AOS.init();
    // cursor
    var left = $(document).outerWidth() - $(window).width();
    $("body, html").scrollLeft(left);

    let innerCursor = document.querySelector(".inner-cursor");
    let outerCursor = document.querySelector(".outer-cursor");

    document.addEventListener("mousemove", moveCursor);

    function moveCursor(e) {
        let x = e.clientX;
        let y = e.clientY;

        innerCursor.style.left = `${x}px`;
        innerCursor.style.top = `${y}px`;
        outerCursor.style.left = `${x}px`;
        outerCursor.style.top = `${y}px`;
    }

    let mouses = Array.from(document.querySelectorAll("a"));

    mouses.forEach((mouse) => {
        mouse.addEventListener("mouseover", () => {
            innerCursor.classList.add("grow");
        });
        mouse.addEventListener("mouseleave", () => {
            innerCursor.classList.remove("grow");
        });
    });
    // parallax
    var imageParallax = document.getElementsByClassName("img-parallax");
    new simpleParallax(imageParallax, {
        overflow: true,
        scale: "2.0",
    });
    var sectionParallax = document.getElementsByClassName("section-parallax");
    new simpleParallax(sectionParallax, {
        overflow: true,
        scale: "1.5",
    });
});
