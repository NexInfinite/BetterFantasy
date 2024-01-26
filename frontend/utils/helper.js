// Set last theme variable
let lastTheme = null;

export const changeTheme = (theme) => {
  if (lastTheme != theme) {
    // Unhide
    let loadingDiv = document.getElementById("loading-screen");
    let loadingBar = document.getElementById("loading-bar");
    let mainScreen = document.getElementById("main");
    loadingDiv.hidden = false;
    loadingDiv.style.opacity = 100;
    mainScreen.hidden = true

    // Wait a bit and slowly move bar up
    setTimeout(
      function () {
        loadingBar.style.width = getRandomArbitrary(0, 15) + "%";
      },
      getRandomArbitrary(100, 300),
    );
    setTimeout(
      function () {
        loadingBar.style.width = getRandomArbitrary(20, 70) + "%";
      },
      getRandomArbitrary(300, 700),
    );
    setTimeout(
      function () {
        loadingBar.style.width = getRandomArbitrary(65, 90) + "%";
      },
      getRandomArbitrary(700, 800),
    );

    // Change theme, wait slightly longer then reveal
    setTimeout(function () {
      document.querySelector("html")?.setAttribute("data-theme", theme);
    }, 500);
    setTimeout(function () {
      loadingBar.style.width = "100%";
    }, 900);
    setTimeout(function () {
      loadingDiv.style.opacity = 0; mainScreen.hidden = false;
    }, 1000);
    setTimeout(function () {
      loadingDiv.hidden = true;
    }, 1500);
    loadingBar.style.width = "0%";

    // Change lastTheme
    lastTheme = theme;
  }
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
