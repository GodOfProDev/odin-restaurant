// Wipe the content div
export default function Wipe() {
    let content = document.querySelector("#content")

    Array.from(content.children).forEach(child => {
        child.remove();
    })
}