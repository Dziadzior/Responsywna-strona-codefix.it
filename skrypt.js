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