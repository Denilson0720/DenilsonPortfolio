function toggleMenu(){
    // targetting the .menu links class
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    //add or remove open class
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}