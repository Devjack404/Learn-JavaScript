let open_button = document.getElementById('popup_button');

let closed_button = document.getElementById('closed_button');

let popup = document.querySelector('.popup'); 


open_button.addEventListener("click", () => {
    popup.style.display = "block";
    document.body.style.backgroundColor = "grey";
    open_button.style.display = "none";
});

closed_button.addEventListener("click", () => {
    popup.style.display = "none"
    document.body.style.backgroundColor = "white";
    open_button.style.display = "inline"
})