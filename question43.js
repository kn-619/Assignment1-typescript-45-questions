function make_sandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("The sandwich u ordered it's ingredients are ".concat(ingredients));
}
make_sandwich("Tomato", "Mayo", "Turkey", "lettuce");
make_sandwich("Tomato", "onion", "Mayo", "Turkey", "lettuce");
make_sandwich("Tomato", "Mayo", "Turkey", "lettuce", "ketchup", "beef");
