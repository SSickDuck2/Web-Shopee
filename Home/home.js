document.getElementById("menu").addEventListener( "click", function (){
    const navdrop = document.querySelector(".menudrop");
    navdrop.style.display = navdrop.style.display === "block" ? "none" : "block";
});

document.addEventListener( "click", function (event){
    const navdrop = document.querySelector(".menudrop");
    const menu = document.getElementById("menu");

    if ( navdrop.style.display === "block" && !navdrop.contains(event.target) && event.target !== menu ){
        navdrop.style.display = "none";
    }
});