function makeContact(name, data){
    const section = document.createElement('section');
    section.classList.add('contact');

    const title = document.createElement('h2');
    title.classList.add('section-title');
    title.textContent = name;
    section.appendChild(title);

    data.forEach((d) => {
        const p = document.createElement('p');
        p.classList.add('section-description');
        p.textContent = d;
        section.appendChild(p);
    });

    return section
}

function contact(){
    const content = document.getElementById('tab-info');
    content.classList.add('flex-lay');
    content.textContent = '';
    // setActiveBtn('contact');

    const phone = makeContact('phones', [
        '123-456-7890'
    ]);
    content.appendChild(phone)

    const address = makeContact('address', ['Japan'])
    content.appendChild(address)
}

export default contact;

