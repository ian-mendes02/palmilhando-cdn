const carousels = document.querySelectorAll("[data-component='carousel']");
for (const carousel_container of carousels) {
    let button = carousel_container.querySelectorAll("[data-carousel='buttons'] button");
    let carousel = carousel_container.querySelector("ul");
    let tiles = carousel.children;
    let middle = Math.round(tiles.length / 2 - 1);
    tiles[middle].scrollIntoView({ inline: 'center', behavior: 'smooth' });
    const gotoPrev = () => {
        carousel.insertBefore(tiles[tiles.length - 1].cloneNode(true), tiles[0]);
        updateCarousel();
        tiles[tiles.length - 1].remove();
    };
    const gotoNext = () => {
        carousel.appendChild(tiles[0].cloneNode(true));
        updateCarousel();
        tiles[0].remove();
    };
    const updateCarousel = () => {
        tiles[middle].scrollIntoView({ inline: 'center', behavior: 'smooth' });
        console.log(tiles);
    };
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", () => { i == 0 ? gotoPrev() : gotoNext(); });
    }

}