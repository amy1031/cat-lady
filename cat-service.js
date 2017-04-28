function CatService() {
    //PRIVATE 
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
}];

//PUBLIC
    this.getCatById = function getCatById(catId){
        for (var i = 0; i < cats.length; i++){
            var cat = cats[i];
            if(cat.id == catId){
                return cat;
            }
        }
    }

    this.getCats = function getCats() {
        return cats.slice(0, cats.length); //from position 0 to the end
    }

}