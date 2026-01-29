let open_button = document.getElementById('popup_button');

let closed_button = document.getElementById('closed_button');

let popup = document.querySelector('.popup'); 


open_button.addEventListener("click", () => {
    popup.style.display = "block";
    document.body.style.backgroundColor = "#9EA9B1";
});