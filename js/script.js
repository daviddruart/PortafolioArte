const boton = document.getElementById("btnInicio");
const menu = document.getElementById("menu");

boton.addEventListener("click", function(e){
    menu.classList.add("menu-activo");
    e.stopPropagation();
});

document.addEventListener("click", function(event){
    const clickDentroMenu = menu.contains(event.target);
    const clickBoton = boton.contains(event.target);

    if(!clickDentroMenu && !clickBoton){
        menu.classList.remove("menu-activo");
    }
});