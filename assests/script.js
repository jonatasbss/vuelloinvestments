let backgroundImages = [
    'assests/images/tessa-wilson-MTSILZYVcdw-unsplash.jpg',
    'assests/images/douglas-sheppard-OI3BVhWoli0-unsplash.jpg',
    'assests/images/adam-winger-Bir1x1stKMM-unsplash.jpg',
    'assests/images/sieuwert-otterloo-aren8nutd1Q-unsplash.jpg',
    'assests/images/sidekix-media-SL6bC1IVT90-unsplash.jpg'
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    let body = document.querySelector('body.wrapper')
    body.style.backgroundImage = "url(" + backgroundImages[currentImageIndex] + ")";

    currentImageIndex++;


    if (currentImageIndex >= backgroundImages.length) {
        currentImageIndex = 0;
    }
}

changeBackgroundImage();

setInterval(changeBackgroundImage, 5000);
