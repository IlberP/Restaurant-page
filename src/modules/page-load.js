//load imports here for the home, menu and contact

function makeHeader(id, text) {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    return header
}

function makeBtn(id, text){
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    const span = document.createElement('span');
    span.textContent = text;
    btn.appendChild(span);
    btn.classList.add('tab');
    return btn
}

function makeNav(id){
    const nav = document.createElement('nav');
    nav.setAttribute('id', id);

    const homeTab = makeBtn('home', 'home');
    nav.appendChild(homeTab);

    const aboutTab = makeBtn('about', 'about');
    nav.appendChild(aboutTab);

    const contactTab = makeBtn('contact', 'contact');
    nav.appendChild(contactTab);

    return nav;
}

function makeMain(id){
    const main = document.createElement('main');
    main.setAttribute('id', id);
    return main
}

function makeFooter(id, text){
    const footer = document.createElement('footer');
    footer.setAttribute('id', id);
    const h3 = document.createElement('h3');
    h3.textContent = text;
    footer.appendChild(h3);
    return footer
}

function load(){
    const content = document.getElementById('content');
    const header = makeHeader('header', 'Ichiraku Ramen');
    content.appendChild(header)

    const nav = makeNav('nav');
    content.appendChild(nav);

    const info = makeMain('tab-info');
    content.appendChild(info);

    const footer = makeFooter('footer', 'Pride of the Hidden Leaf Village');
    content.appendChild(footer);

}

export default load