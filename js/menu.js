$(document).ready(function(){
    menu();
    footer();
});

function menu(){
    const items = ["about", "contact", "misc"]
    const element = document.getElementById("nav")

    for(let item in items) {
        const line = document.createElement("li")
        const link = document.createElement("a")

        link.href = `${items[item]}.html`
        link.innerHTML = items[item]
        
        line.appendChild(link)
        element.children[0].appendChild(line)
    }   
}

function footer(){
    const text = document.getElementsByTagName("footer")[0];
    const line = document.createElement("p");
    const email = document.createElement("a");

    line.innerHTML = "2025 &copy; トナリアウ NARIEL ARTHUR ⋆.˚★ ";
    email.href = "mailto:tonariau@tuta.io";
    email.innerHTML = "tonariau@tuta.io";

    line.appendChild(email);
    text.children[0].appendChild(line);
}