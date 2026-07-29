const root = document.querySelector(".showcase");
const modeButtons = document.querySelectorAll("[data-review-mode]");
const storedMode = localStorage.getItem("mcmds-review-mode");
const validModes = new Set(["light", "dark", "split"]);

function setReviewMode(mode) {
  const nextMode = validModes.has(mode) ? mode : "split";
  root.dataset.reviewMode = nextMode;
  modeButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.reviewMode === nextMode));
  });
  localStorage.setItem("mcmds-review-mode", nextMode);
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => setReviewMode(button.dataset.reviewMode));
});

document.querySelectorAll("[data-dialog-target]").forEach((button) => {
  const dialog = document.getElementById(button.dataset.dialogTarget);
  if (!dialog) return;
  button.addEventListener("click", () => dialog.showModal());
});

document.querySelectorAll(".mcm-dialog [data-dialog-close]").forEach((button) => {
  button.addEventListener("click", () => button.closest("dialog").close());
});

setReviewMode(storedMode || "split");
