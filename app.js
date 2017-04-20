var petCount = document.getElementById("petCount")
var catStatus = document.getElementById("catStatus")
var catButton = document.getElementById("catButton")
var catPic = document.getElementById("catPic")

var mrFluffy = {
    name: "Mr. Fluffy",
    imgUrl: "http://www.findcatnames.com/wp-content/uploads/2017/01/tabby-cat-names.jpg",
    happyStatus: "Purrr",
    grumpyStatus: "Rawwwwwr",
    feralStatus: "Hissss",
    goneStatus: "He time traveled away",
    petCount: 0
};

function petCat() {
    mrFluffy.petCount++;
    petCount.innerHTML = mrFluffy.petCount;
    if(mrFluffy.petCount > 5) {
        catStatus.innerHTML = mrFluffy.grumpyStatus;
    }
    if (mrFluffy.petCount == 9) {
        catStatus.innerHTML = mrFluffy.feralStatus;
    }
    if (mrFluffy.petCount == 10) {
        catStatus.innerHTML = mrFluffy.goneStatus;
        catButton.disabled = true;
        catPic.src = "";
        petCount.innerHTML = "";
    }
}

function comeBack() {
    mrFluffy.petCount++;
    petCount.innerHTML = mrFluffy.petCount;
    catButton.disabled = false;
    catStatus.innerHTML = mrFluffy.happyStatus;
    catPic.src = mrFluffy.imgUrl;
}