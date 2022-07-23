const splashContainer = document.querySelector(".splashContainer");

window.onload = () => {
  setTimeout(() => {
    splashContainer.classList.add("animate-pulse");
  }, 2000);

  setTimeout(() => {
    splashContainer.classList.toggle("splash");
    splashContainer.classList.add("hidden");
  }, 2600);
};
