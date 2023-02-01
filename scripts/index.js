function emphasize(rect) {
    const rects = document.getElementById("wrapper").children
    rect.setAttribute("state", "1");
    rect.style="z-index: 1";

    for (let i = 0; i < rects.length; i++)
        if (rects[i] != rect)
            rects[i].style="z-index: 0";
}

function reset(rect) {
    const rects = document.getElementById("wrapper").children

    rect.setAttribute("state", "0");
    rect.style="z-index: 1";
    setTimeout(() => {rect.style="z-index: 0";}, 750);
}
