
function page2GoGogh() {
    window.location.href = "page2.html";
}

function enlargePicture() {
    const bigPic = document.querySelector('.big-picture');
    const smallPic = document.querySelector('.small-picture');

    bigPic.style.transform = 'scaleX(0)';
    smallPic.style.transform = 'scaleX(0)';

    smallPic.addEventListener("transitionend", function () {
        bigPic.src = './GoghVerk/blommor.jpg';
        bigPic.style.transform = 'scaleY(1)';
    })
}