const myImages = ['cat-1.jpg', 'cat-2.jpg', 'cat-3.jpg','cat-4.jpg', 'cat-5.jpg', 'cat-6.jpg', 'cat-7.jpg', 'cat-8.jpg', 'cat-9.jpg'];
const myGallery = document.getElementById('gallery');

function createGallery() {

    myImages.forEach(function(url) {
        const image = document.createElement('img');
        const article = document.createElement('article');
        const imageUrl = 'gallery/assets/images/' + url;
        image.src = imageUrl;

        image.addEventListener('click', function() {
            singleImageDisplay(url);
            myGallery.style.display = 'none';
         });

        article.appendChild(image);
        myGallery.appendChild(article);
    });
};

function singleImageDisplay(url) {
    const singleImageSection = document.getElementById('singleImage');
    const displayedImage = document.getElementById('displayedImage');
    const displayedUrl = 'gallery/assets/images/' + url;

    displayedImage.src = displayedUrl;
    singleImageSection.style.display = 'flex';

    displayedImage.addEventListener('click', function() {
        singleImageSection.style.display = 'none';
        myGallery.style.display = 'grid'
    });

};

createGallery();