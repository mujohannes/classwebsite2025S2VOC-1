
function onPageLoad() {
    // create a reference to the button
    const btn = document.querySelector(".nav-button")
    // create a reference to the menu
    const menu = document.querySelector("#categories")
    // make hte button btn listen for a click
    btn.addEventListener("click", function() {
        // console.log("clicked")
        if( menu.classList.contains("open") ) {
            menu.classList.remove("open")
        }
        else {
            menu.classList.add("open")
        }
    } )
}
// wait for all the HTML to load nad then execute onPageLoad
window.addEventListener("load", onPageLoad )