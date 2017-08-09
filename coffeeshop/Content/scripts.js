var shoppingCartItems = [];
var json = {
    "small coffee": { 'price': '6.00', 'name': 'Small Coffee' },
    "medium coffee": { 'price': '6.50', 'name': 'Medium Coffee' },
    "large coffee": { 'price': '7.00', 'name': 'Large Coffee' },
    "small mocha": { 'price': '6.25', 'name': 'Small Mocha' },
    "medium mocha": { 'price': '6.75', 'name': 'Medium Mocha' },
    "large mocha": { 'price': '7.25', 'name': 'Large Mocha' },
}
function addToCart(item) {
    shoppingCartItems = [];
    shoppingCartItems.push(item);
    console.log("here", json[shoppingCartItems[0]]);
    var selected = json[shoppingCartItems[0]];
    sessionStorage.setItem(json[shoppingCartItems[0]].name, [json[shoppingCartItems[0]].name, json[shoppingCartItems[0]].price]);
    window.location.href = "checkout";
}

function refreshCart() {
    var session = {};
    for (var i in json) {
        var ses = sessionStorage.getItem(json[i].name);
        if (ses) {
            session[json[i].name] = ses;
        }
    }

    for (var j in session) {
        var itemHtml = document.getElementsByClassName('item');
        var priceHtml = document.getElementsByClassName('price');
        priceHtml.innerHTML = session[j];
        $(".item").append('<div class="col-xs-12"><b>' + session[j].split(',')[0] + "</b></div>");
        $(".price").append('<div class="col-xs-12"><b>' + session[j].split(',')[1] + "</b></div>");
    }
}

function clearCart() {
    sessionStorage.clear();
    window.location.reload();
}