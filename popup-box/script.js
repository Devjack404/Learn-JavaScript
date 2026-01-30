let open_button = document.getElementById('popup_button');
let closed_button = document.getElementById('closed_button');
let popup = document.querySelector('.popup');
let overlay = document.querySelector(".overlay") 


//button ketika aktif
open_button.addEventListener("click", () => {
    popup.classList.add("active");
    overlay.classList.add("active")
    document.body.classList.add("dim");
    open_button.style.display = "none";
});

//butoon ketika off
closed_button.addEventListener("click", () => {
    popup.classList.remove("active"); 
    overlay.classList.remove("active")
    document.body.classList.remove("dim");
    open_button.style.display = "inline";
})