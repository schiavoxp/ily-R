const overlay = document.querySelector(".overlay");
const heart = document.querySelector(".heart");


function show_text(){
    if (overlay.classList.contains("hidden")){
        overlay.classList.remove("hidden");
    }
}

heart.addEventListener("click", show_text);