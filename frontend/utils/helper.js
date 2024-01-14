export const changeTheme = (theme) => {
    // Unhide
    let loadingDiv = document.getElementById("loading-screen");
    let loadingBar = document.getElementById("loading-bar");
    loadingDiv.hidden = false;
    setTimeout(function () { loadingDiv.style.opacity = 100; }, 0);
    
    // Wait a bit and slowly move bar up
    setTimeout(function () { loadingBar.style.width = getRandomArbitrary(0, 15) + "%"; }, 200);
    setTimeout(function () { loadingBar.style.width = getRandomArbitrary(20, 35) + "%"; }, 400);
    setTimeout(function () { loadingBar.style.width = getRandomArbitrary(40, 50) + "%"; }, 500);
    setTimeout(function () { loadingBar.style.width = getRandomArbitrary(60, 70) + "%"; }, 600);
    
    // Change theme, wait slightly longer then reveal
    setTimeout(function () { document.querySelector("html")?.setAttribute("data-theme", theme); }, 500);
    setTimeout(function () { loadingBar.style.width = "100%"; }, 900);
    setTimeout(function () { loadingDiv.style.opacity = 0; }, 1000);
    setTimeout(function () { loadingDiv.hidden = true; }, 1250);
    loadingBar.style.width = "0%";
};

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}