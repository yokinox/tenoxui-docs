let darkMode = localStorage.getItem("darkMode");
const body = document.getElementById("body");
const theme = document.getElementById("theme");
const darkModeEnable = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "darkModeEnabled");
};
const darkModeDisable = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
};
if (darkMode === "darkModeEnabled") {
  darkModeEnable();
}
theme.addEventListener("click", function () {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "darkModeEnabled") {
    darkModeEnable();
  } else {
    darkModeDisable();
  }
});

