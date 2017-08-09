var shoppingCartItems = [];
var quantity = 1;
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
    var selected = json[shoppingCartItems[0]];
    
    if (sessionStorage.getItem(json[shoppingCartItems[0]].name)) {
        var quan = parseInt(sessionStorage.getItem(json[shoppingCartItems[0]].name).split(',')[2]);
        quan++;
        sessionStorage.setItem(json[shoppingCartItems[0]].name, [json[shoppingCartItems[0]].name, json[shoppingCartItems[0]].price, quan]);
    } else {
        
        sessionStorage.setItem(json[shoppingCartItems[0]].name, [json[shoppingCartItems[0]].name, json[shoppingCartItems[0]].price, 1]);
    }
    
}
$(document).ready(function () {
    refreshCart();
});
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
        $(".item").append('<div class="col-xs-12"><b>Item: ' + session[j].split(',')[0] + '</b></div><div class="col-xs-12"><b>Each: ' + session[j].split(',')[1] + '</div></b>' + '</b></div><div class="col-xs-12"><b>Quantity: ' + session[j].split(',')[2] + '</div></b>');
    }
}

function clearCart() {
    sessionStorage.clear();
    window.location.reload();
}