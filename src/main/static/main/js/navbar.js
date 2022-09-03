// (c) Dynamic
// Here we manage the menu under the profile pic

function menu() {
    const MENU = document.getElementById("navbar-dropdown-menu");
    if (MENU.classList.contains("show"))
        MENU.classList.remove("show");
    else
        MENU.classList.add("show");
}

try{
    const PROFILE_PIC = document.getElementById("profile");
    
    PROFILE_PIC.addEventListener("click", menu);
}catch {/* Fail quietly */}
