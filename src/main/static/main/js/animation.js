
window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('div.card');
    for (let i = 0; i < reveals.length; i++) {
        var window_height = window.innerHeight;
        var reveal_top = reveals[i].getBoundingClientRect().top;
        var reveal_point = 150;

        if (reveal_top < window_height - reveal_point) {
            reveals[i].classList.add("fade-in-anim");
        }else{
            reveals[i].classList.remove("fade-in-anim");
        }
    }
}
