var petCount = document.getElementById("petCount")
var catStatus = document.getElementById("catStatus")
var counter = 0;
var catButton = document.getElementById("catButton")
var catPic = document.getElementById("catPic")

function petCat() {
    counter++;
    petCount.innerHTML = counter;
    if(counter > 5) {
        catStatus.innerHTML = "RAWR!!!"
    }
    if (counter == 9) {
        catStatus.innerHTML = "HISSSSSS!!!"
    }
    if (counter == 10) {
        catStatus.innerHTML = "Cat ran away!";
        catButton.disabled = true;
        catPic.src = "";
        petCount.innerHTML = "";
    }
}

function comeBack() {
    counter = 0;
    petCount.innerHTML = counter;
    catButton.disabled = false;
    catStatus.innerHTML = "Purrrr"
    catPic.src = "http://www.findcatnames.com/wp-content/uploads/2017/01/tabby-cat-names.jpg"
}