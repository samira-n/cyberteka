// Открытие попапа для всех кнопок с классом openPopUpBtn
document.querySelectorAll(".openPopUpBtn").forEach(button => {
    button.addEventListener("click", function() {
        document.getElementById("popUp").classList.add("open");
    });
});

// Закрытие попапа при нажатии на клавишу Escape
window.addEventListener("keydown", (e) => {
    if(e.key === "Escape") {
        document.getElementById("popUp").classList.remove("open");
    }
})

// Предотвращение закрытия при клике внутри попапа
document.querySelector(".popUpBox").addEventListener("click", (event) => {
    event.stopPropagation();
});

// Закрытие попапа при клике снаружи
document.getElementById("popUp").addEventListener("click", (event) => {
    if (event.target === document.getElementById("popUp")) {
        event.currentTarget.classList.remove("open");
    }
});


document.getElementById("reserve").addEventListener("click", function(){
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll("input", "textarea");
    let isFormValid = true;

    inputs.forEach(input => {
        if(!input.value.trim()){
            isFormValid = false;
        }
    });

    if(isFormValid){
        document.getElementById("popUp").classList.remove("open");
    }
});



document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
        loop: true,  // Это позволяет слайдеру зацикливаться
    });
});
