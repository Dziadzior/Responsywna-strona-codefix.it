let slowa = document.querySelectorAll(".slowo");
slowa.forEach((slowo) => {
    let letters = slowo.textContent.split("");
    slowo.textContent="";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        slowo.append(span);
    });
});

let obecneSlowoIndex = 0;
let maxSlowoIndex = slowa.length -1;
slowa[obecneSlowoIndex].style.opacity = "1";

let zmienTekst = () => {
    let obecneSlowo = slowa[obecneSlowoIndex];
    let nastSlowo = obecneSlowoIndex === maxSlowoIndex ? slowa[0] : slowa[obecneSlowoIndex + 1];

    Array.from(obecneSlowo.children).forEach((letter,i) => {
        setTimeout(() => {
            letter.className = "letter out";
        },i * 80);
    });
    nastSlowo.style.opacity="1";
    Array.from(nastSlowo.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";        
        },340 + i * 80);
    });
    obecneSlowoIndex = obecneSlowoIndex === maxSlowoIndex ? 0 : obecneSlowoIndex + 1;
};

zmienTekst();
setInterval(zmienTekst,3000);

// Kolo umiejętności
const kola = document.querySelectorAll('.kolo');
kola.forEach(element=>{
    var kropki = element.getAttribute("data-dots");
    var wyrazny = element.getAttribute("data-percent");
    var procent = Math.floor(kropki*wyrazny/100);
    var punkty = "";
    var obrot = 360 / kropki;

    for(let i = 0; i<kropki; i++) {
        punkty += `<div class="punkty" style="--i:${i}; --obr:${obrot}deg"></div>`;
    }
    element.innerHTML = punkty;

    const wyraznePunkty = element.querySelectorAll('.punkty');
    for(let i = 0; i<procent; i++) {
        wyraznePunkty[i].classList.add('wyrazny');
    }
})

// MixItUp portfolio sekcja
var mixer = mixitup('.galeria-portfolio');

// Aktywne menu
let menuLista = document.querySelectorAll('header ul li a');
let sekcja = document.querySelectorAll('section');

function aktywneMenu() {
    let dlugosc = sekcja.length;
    while (--dlugosc && window.scrollY + 97 < sekcja[dlugosc].offsetTop){}
    menuLista.forEach(sec => sec.classList.remove("aktywny"));
    menuLista[dlugosc].classList.add("aktywny");
};

aktywneMenu();
window.addEventListener("scroll", aktywneMenu);

// Zablokowany navbar
const header = document.querySelector("header");
window.addEventListener('scroll', function() {
    header.classList.toggle('sticky', window.scrollY > 50);
})

// Aktywowanie hamburgera
let menuIkona = document.querySelector('#hamburger');
let nawLista = document.querySelector('.nawigacja-lista');

menuIkona.onclick = () => {
    menuIkona.classList.toggle("fa-x");
    nawLista.classList.toggle("otworz");
}

window.onscroll = () => {
    menuIkona.classList.remove("fa-x");
    nawLista.classList.remove("otworz");
}

// Scroll do góry
let obliczProgresScrola = () => {
    let skrolProgres = document.getElementById('progres');
    let wartoscProgres = document.getElementById('wartosc-progres');
    let pos = document.documentElement.scrollTop;
    let obliczWysokosc = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let wartoscSkrol = Math.round((pos * 100) / obliczWysokosc);
    
    if (pos > 100) {
        skrolProgres.style.display = "grid";
    } else {
        skrolProgres.style.display = "none";
    }
    skrolProgres.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    })
    skrolProgres.style.background = `conic-gradient(#ff3232 ${wartoscSkrol}%, #ffffff ${wartoscSkrol}%)`;
}

window.onscroll = obliczProgresScrola;
window.onload = obliczProgresScrola;