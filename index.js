
function page2GoGogh() {
    window.location.href = "page2.html";
}

const nextHouseBut = document.getElementById("nextHouseBut");

nextHouseBut.addEventListener("click", function () {
    const firstArtwork = document.getElementById("firstArtwork");
    const secondArtwork = document.getElementById("secondArtwork");

    firstArtwork.style.transform = "translateX(-100%)";
    secondArtwork.style.transform = "translateX(0%)";

    secondArtwork.addEventListener("transitionend", function () {
        firstArtwork.style.display = "none";
        secondArtwork.style.display = "block";
    });
});