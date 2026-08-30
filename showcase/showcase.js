const root = document.documentElement;
const theme = document.querySelector(".theme");

function setTheme(value) {
  root.dataset.mcmTheme = value;
  theme.querySelector("b").textContent = value === "dark" ? "Dark" : "Light";
  theme.setAttribute("aria-label", `Switch to ${value === "dark" ? "light" : "dark"} theme`);
  localStorage.setItem("mcmds-showcase-theme", value);
}

theme.addEventListener("click", () => setTheme(root.dataset.mcmTheme === "dark" ? "light" : "dark"));

document.querySelectorAll(".work button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".work button").forEach((item) => {
      item.classList.remove("is-selected");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("is-selected");
    button.setAttribute("aria-pressed", "true");
  });
});

setTheme(localStorage.getItem("mcmds-showcase-theme") || "light");
