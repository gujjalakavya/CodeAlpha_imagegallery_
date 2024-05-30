const galleryItems = document.querySelectorAll('.gallery-item');
const popupCard = document.querySelector('.popup-card');
const closeButton = document.querySelector('.close-button');
const imageTitle = document.getElementById('image-title');
const popupImage = document.getElementById('popup-image');
const imageInfo = document.getElementById('image-info');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const image = item.querySelector('img');
        const altText = image.alt;
        const src = image.src;
        const dimensions = ${image.width} x ${image.height};

        imageTitle.textContent = altText;
        popupImage.src = src;
        imageInfo.textContent = Dimensions: ${dimensions};

        popupCard.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
    popupCard.style.display = 'none';
});
