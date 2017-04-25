/*var petCount = document.getElementById("petCount")
var catStatus = document.getElementById("catStatus")
var catButton = document.getElementById("catButton")
var catPic = document.getElementById("catPic")*/

/*var mrFluffy = {
    id: 247,
    name: "Mr. Fluffy",
    imgUrl: "http://www.findcatnames.com/wp-content/uploads/2017/01/tabby-cat-names.jpg",
    happyStatus: "Purrr",
    grumpyStatus: "Rawwwwwr",
    feralStatus: "Hissss",
    goneStatus: "He time traveled away",
    petCount: 0
};

var whiskers = {
    id: 1,
    name: "Whiskers",
    imgUrl: "http://www.lifewithcats.tv/wp-content/uploads/2012/10/cat-linncurrie.jpg",
    happyStatus: "Meow?",
    grumpyStatus: "Grrrr",
    feralStatus: "CLAWS!",
    goneStatus: "He packed his bags and ran off",
    petCount: 0
};*/

function hello() {

var cats = [{
    id: 1,
    name: "Whiskers",
    imgUrl: "http://www.lifewithcats.tv/wp-content/uploads/2012/10/cat-linncurrie.jpg",
    happyStatus: "Meow?",
    grumpyStatus: "Grrrr",
    feralStatus: "CLAWS!",
    goneStatus: "He packed his bags and ran off",
    petCount: 0
}, {
    id: 2,
    name: "Mr. Fluffy",
    imgUrl: "http://www.findcatnames.com/wp-content/uploads/2017/01/tabby-cat-names.jpg",
    happyStatus: "Purrr",
    grumpyStatus: "Rawwwwwr",
    feralStatus: "Hissss",
    goneStatus: "He time traveled away",
    petCount: 0
},
{
    id: 3,
    name: "Dog",
    imgUrl: "http://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg",
    happyStatus: "Mrowww",
    grumpyStatus: "Hiss Hiss",
    feralStatus: "Grr Hisk hisk",
    goneStatus: "Cat runs off and climbs a tree",
    petCount: 0
},{
    id: 4,
    name: "Tubby",
    imgUrl: "http://media.mnn.com/assets/images/2016/02/angry-cat.jpg.838x0_q80.jpg",
    happyStatus: "*Silence*",
    grumpyStatus: "*walks away*",
    feralStatus: "*plots world domination*",
    goneStatus: "Where did the cat go?",
    petCount: 0
}];


/*function CatCreator(id, name, imgUrl, status){
    this.id = id;
    this.name = name,
    this.imgUrl = imgurl,
    this.status = status,
    this.petCount = 0
}

var myCat = new CatCreator(334, "my cat", )*/

function petCat(catId) {
    var petCount = document.getElementById("petCount"+catId)
    var catStatus = document.getElementById("catStatus"+catId)
    var catButton = document.getElementById("catButton"+catId)
    var catPic = document.getElementById("catPic"+catId)

    var targetCat = getCatById(catId);


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

function getCatById(catId){
    for (var i = 0; i < cats.length; i++){
        var cat = cats[i];

        if(cat.id == catId){
            return cat;
        }
    }
}

function comeBack(catId) {
    var petCount = document.getElementById("petCount"+catId)
    var catStatus = document.getElementById("catStatus"+catId)
    var catButton = document.getElementById("catButton"+catId)
    var catPic = document.getElementById("catPic"+catId)
    var targetCat = getCatById(catId);
    targetCat.petCount = 0;
    petCount.innerHTML = targetCat.petCount;
    catButton.disabled = false;
    catStatus.innerHTML = targetCat.happyStatus;
    catPic.src = targetCat.imgUrl;
}

function drawCats(listOfCats){
    var template = "";
    for (var i = 0; i < listOfCats.length; i++){
        var cat = listOfCats[i];
        template += `
        <div>
        <img id="catPic${cat.id}" src="${cat.imgUrl}">
        <br><button type="button" id="catButton${cat.id}" onClick="petCat(${cat.id})">Pet</button>
        <button type-"button" id="comeBack${cat.id}" onClick="comeBack(${cat.id})">Come back Kitty</button>
        <h1 id="petCount${cat.id}">${cat.petCount}</h1>
        <h2 id="catStatus${cat.id}">${cat.happyStatus}</h2>
        </div>
        `
    }
document.getElementById("cat-list").innerHTML = template;
}
drawCats(cats);

}
//hello();


//var cat1 = {name: "tom"};

function Marker(userColorChoice, brand) {

    if (!userColorChoice) {
        return new Error("Sorry, you must provide a color to make markers");
    }
    if (!brand) {
        return new Error("Sorry, you must provide a brand to make markers");
    }

    this.color = userColorChoice;
    this.brand = brand;

    this.draw = function() {
        return userColorChoice; // returns what it was originlly given. Cannot change it in the browser console
    };
};

var blackMarker = new Marker("Black", "Expo");
var marksFavoriteMarker = new Marker("Purple", "Quartet");