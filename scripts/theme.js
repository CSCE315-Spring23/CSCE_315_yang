const cloud = "styles/cloud.css"
const block = "styles/block.css"


function switchTheme() {
    var css = document.getElementById("mainCSS")
    var index = document.getElementById("indexCSS")
    var theme
    if (css.getAttribute("href") == block) 
        theme = cloud
    else
        theme = block
    css.setAttribute("href", theme)
    if (index)
        index.setAttribute("href", theme.replace(".css", "-index.css"))

    const checkbox = document.querySelector('#theme-switch-toggle');
    setTimeout(() => {checkbox.checked = false;}, 1000);
    localStorage.setItem("style", css.getAttribute("href"))
}


window.onload = function () {
    const checkbox = document.getElementById('theme-switch-toggle')

    var theme = localStorage.getItem("style")
    if (!theme)
        theme = block
    var css = document.getElementById("mainCSS")
    css.setAttribute("href", theme)
    var index = document.getElementById("indexCSS")
    if (index)
        index.setAttribute("href", theme.replace(".css", "-index.css"))
}