let mouse = false;

// hover animation

function emphasize(rect) {
    const rects = document.getElementById("wrapper").children
    rect.setAttribute("state", "1");
    rect.style="z-index: 1";
    mouse = true;

    for (let i = 0; i < rects.length; i++)
        if (rects[i] != rect)
            rects[i].style="z-index: 0";
}

function reset(rect) {
    mouse = false;
    rect.setAttribute("state", "0");
    rect.style="z-index: 1";
    setTimeout(() => {
        if(!mouse) 
            rect.style="z-index: 0";
        }, 750);
}
