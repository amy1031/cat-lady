function CatController() {
    //PRIVATE
    var catService = new CatService();

    function drawCats(){
    var listOfCats = catService.getCats();
    var template = "";
    for (var i = 0; i < listOfCats.length; i++){
        var cat = listOfCats[i];
        template += `
        <div>
        <img id="catPic${cat.id}" src="${cat.imgUrl}">
        <br><button type="button" id="catButton${cat.id}" onClick="app.controllers.catController.petCat(${cat.id})">Pet</button>
        <button type-"button" id="comeBack${cat.id}" onClick="app.controllers.catController.comeBack(${cat.id})">Come back Kitty</button>
        <h1 id="petCount${cat.id}">${cat.petCount}</h1>
        <h2 id="catStatus${cat.id}">${cat.happyStatus}</h2>
        </div>
        `
        }
    document.getElementById("cat-list").innerHTML = template;
    }

    //PUBLIC (AKA user interaction)
    this.comeBack = function comeBack(catId) {
        var petCount = document.getElementById("petCount" + catId)
        var catStatus = document.getElementById("catStatus" + catId)
        var catButton = document.getElementById("catButton" + catId)
        var catPic = document.getElementById("catPic" + catId)
        var targetCat = catService.getCatById(catId);
        targetCat.petCount = 0;
        petCount.innerHTML = targetCat.petCount;
        catButton.disabled = false;
        catStatus.innerHTML = targetCat.happyStatus;
        catPic.src = targetCat.imgUrl;
    }

    this.petCat = function petCat(catId) {
        var targetCat = catService.getCatById(catId);

        var petCount = document.getElementById("petCount"+catId)
        var catStatus = document.getElementById("catStatus"+catId)
        var catButton = document.getElementById("catButton"+catId)
        var catPic = document.getElementById("catPic"+catId)

        targetCat.petCount++;
        petCount.innerHTML = targetCat.petCount;
        if(targetCat.petCount > 4) {
            catStatus.innerHTML = targetCat.grumpyStatus;
        }
        if (targetCat.petCount == 9) {
            catStatus.innerHTML = targetCat.feralStatus;
        }
        if (targetCat.petCount == 10) {
            catStatus.innerHTML = targetCat.goneStatus;
            catButton.disabled = true;
            catPic.src = "";
            petCount.innerHTML = "";
        }
    }
drawCats();
}