function createAbout(){
    const about = document.createElement('section');
    about.classList.add('section');

    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = 'About us'

    about.appendChild(title);

    const para = document.createElement('p');
    para.classList.add('section-description');
    para.textContent = 'Serving the finest ramen in all of Konoha. Come eat at the Hokages favorite spot!'
    about.appendChild(para);

    return about;
}

function setActiveBtn(id) {
    const activeBtn = document.querySelector('.activeTab');
    if (activeBtn) activeBtn.classList.remove('active')

    const homeBtn = document.getElementById('id');
    // homeBtn.classList.add('active')
}


function loadHome(){
    const content = document.getElementById('tab-info');
    content.classList.add('grid-lay');

    content.textContent = '';
    const aboutSect = createAbout();

    //setActiveBtn('home');
    
    content.appendChild(aboutSect)
}

export default loadHome;