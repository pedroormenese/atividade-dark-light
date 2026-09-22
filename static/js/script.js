const input_theme = document.getElementById("theme");
const html = document.getElementById("html");

input_theme.addEventListener('click', () => {
    html.classList.toggle("dark"); //Tira ou coloca essa classe

    if (html.classList.contains("dark")) {
        input_theme.value = "Light Mode";
    } else {
        input_theme.value = "Dark Mode";
    }
}
)