$('.header-mobile__whatsapp-link').off();

let links = JSON.parse($('.header-mobile__whatsapp-link')[0].dataset.phones).map(x=>x.link);

[...document.getElementById("wpp-content-0").firstElementChild.children].map((li, index) =>li.firstElementChild.setAttribute('href', links[index]));