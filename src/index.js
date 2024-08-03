import './styles/modern-normalize.css'
import './styles/style.css'
import './styles/header.css'
import './styles/content.css'
import './styles/utils.css'
import Home from './components/home'
import Menu from './components/menu'
import About from './components/about'
import Wipe from "./utils/wipe";

Home();

document.querySelector("#home-btn").addEventListener("click", () => {
    Wipe();
    Home();
})

document.querySelector("#menu-btn").addEventListener("click", () => {
    Wipe();
    Menu();
})

document.querySelector("#about-btn").addEventListener("click", () => {
    Wipe();
    About();
})