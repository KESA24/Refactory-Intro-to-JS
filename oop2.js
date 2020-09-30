var house = {
    door: "",
    roof: "",
    structure: "",
    owner: "",
    noOfRooms: "",
    color: "",
    noOfwindows: "",
    name: function() {            //A function within an object is called a method. #Methods are functions belonging to an object.
        console.log("my house"); //Any line within the function in the object is called a behavior.
}
}

house.door = "glass",
house.roof = "tiled",
house.structure = "bungalow",
house.owner = "Marieh",
house.noOfRooms = 5,
house.color = "white",
house.noOfWindows = 10,

console.log(house.door);

//Any valid object has methods and behaviors

var dog = {
    breed: "",
    color: "",
    height: "",
    eyeColor: "",
    bark: function (){
        console.log("Whoof whoof");
    }
}
    dog.breed = "German Shepherd",
    dog.color ="Brown",
    dog.height ="2.5 inch",
    dog.eyeColor ="Blue",

    console.log(dog.breed);
    dog.bark();

let table = {
    color: "BlueRed",
    type: "Wooden",
    make: " Katanga",
    height: "1.5m",
    locks: "5",
    noOfDrawers: "5",
    capapcity: function(){
        console.log("Accommodates five books");
    }
}

console.log (table.color);
table.capapcity();