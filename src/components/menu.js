export default function Menu() {
    let content = document.querySelector("#content")

    let paragraph = document.createElement("p")
    paragraph.innerHTML = `Welcome,<br><br>

            Savor the Extraordinary<br><br>

            Experience culinary artistry in the heart of Web. Our chef-driven menu
            features locally-sourced ingredients and innovative flavors that will delight
            your senses.
            <br><br><br> 
            MENU IS UNDER CONSTRUCTION
            `

    content.append(paragraph);
}