//imports all the modules into the home page and adds event listeners to the the navigations 
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

//loads the home page when the page is opened 

function init(){
    load()
    loadHome()
    addEvents()
}