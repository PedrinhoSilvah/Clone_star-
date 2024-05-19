
    // exiber e oculta o header
function ocultaElementosDoHeader(){
    const header = document.querySelector('#header');
    header.classList.add('rolagem');

    const btn = document.querySelector('#opaccy-btn');
    btn.classList.add('suith');
    
    const opac = document.querySelector('#transito');
    opac.classList.add('opac');
}

function exibeElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.remove('rolagem');

    const btn = document.querySelector('#opaccy-btn');
    btn.classList.remove('suith');
    
    const opac = document.querySelector('#transito');
    opac.classList.remove('opac');
}

const heroSection = document.querySelector('.container');
const alturaHero = heroSection.clientHeight;

window.addEventListener('scroll', function(){
    const posicaoAtual = window.scrollY;

    if ( posicaoAtual > alturaHero){
        ocultaElementosDoHeader();
    }else{
        exibeElementosDoHeader();
    }
})










// EVENTO SCROLL CLICK

function scrollTO(element){
    document.querySelector(element).scrollIntoView({behavior: "smooth" });

}

document.querySelector('#down').addEventListener('click', function(){
    event.preventDefault();

    scrollTO('#secao-planos');

})


// EVENTO ACCORDION

const accordion_item = document.querySelectorAll('.accordion_item')

accordion_item.forEach((item) => {
    const accordion_header_item = item.querySelector('.accordion_header');

    accordion_header_item.addEventListener('click', () => {

    const accordion_content_item = item.querySelector('.accordion_content');

    const content_actived = document.querySelector('.active');

    VerifyActive(item, accordion_content_item, content_actived)

    });
});


function VerifyActive(item, content, content_actived){
    const icon_item = item.querySelector(".icon");

    const icons = document.querySelectorAll('.icon');

    icons.forEach((item) => (item.innerHTML = "+"));

    if (content_actived) {
        content_actived.style.height = 0;
        content_actived.classList.remove("active");
    }

    if (content !== content_actived) {
        icon_item.innerHTML = "-"
        content.classList.add("active");
        content.style.height = content.scrollHeight + 10 + "px";
    }
}


