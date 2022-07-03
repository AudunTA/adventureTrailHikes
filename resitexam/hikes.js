const buttons = document.querySelectorAll("button");
const filter = document.querySelector(".remove-filter");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleButton);
}

function handleButton() {
    buttons[0].style.backgroundColor = "#81D6BB";
    buttons[0].style.color ="#272C45";
    buttons[1].style.backgroundColor = "#81D6BB";
    buttons[1].style.color ="#272C45";
    buttons[2].style.backgroundColor = "#81D6BB";
    buttons[2].style.color ="#272C45";
    this.style.backgroundColor = "#272C45";
    this.style.color = "white";
    filter.style.display="flex";
}

filter.addEventListener("click", handleFilter);

function handleFilter() {
    buttons[0].style.backgroundColor = "#81D6BB";
    buttons[0].style.color ="#272C45";
    buttons[1].style.backgroundColor = "#81D6BB";
    buttons[1].style.color ="#272C45";
    buttons[2].style.backgroundColor = "#81D6BB";
    buttons[2].style.color ="#272C45";
    filter.style.display="none";
}