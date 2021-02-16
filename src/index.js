import load from './modules/page-load';
import loadHome from './modules/home';
import menu from './modules/menu';
import contact from './modules/contact';

init()

function addEvents(){
    const homeBtn = document.getElementById('home');
    homeBtn.addEventListener('click', loadHome);

    const menuBtn = document.getElementById('menu');
    menuBtn.addEventListener('click', menu);

    const contactBtn = document.getElementById('contact');
    contactBtn.addEventListener('click', contact)

}

function init(){
    load()
    loadHome()
    addEvents()
}