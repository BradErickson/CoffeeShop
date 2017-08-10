﻿var shoppingCartItems = [];
var quantity = 1;
var session;
var json = {
    "small coffee": { 'price': '6.00', 'name': 'Small Coffee' },
    "medium coffee": { 'price': '6.50', 'name': 'Medium Coffee' },
    "large coffee": { 'price': '7.00', 'name': 'Large Coffee' },
    "small mocha": { 'price': '6.25', 'name': 'Small Mocha' },
    "medium mocha": { 'price': '6.75', 'name': 'Medium Mocha' },
    "large mocha": { 'price': '7.25', 'name': 'Large Mocha' },
}
function addToCart(item) {
    
    $('#myModal').modal();
    $(".itemAdded").remove();
    $('.modal-body').append('<p class="itemAdded" style="text-align:center"> A ' + item + " has been successfully added to your shopping cart</p>");
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
    getItemsFromSession();
});
function getItemsFromSession() {
    var session = {};
    
    for (var i in json) {
        var ses = sessionStorage.getItem(json[i].name);
        if (ses) {
            session[json[i].name] = ses;
        }
    }
    this.session = session;
    refreshCart();
}
function refreshCart() {
   var items = this.session
    for (var j in session) {
        $(".shoppingCartItem").append('<div class="col-xs-12"><b>Item: ' + items[j].split(',')[0] + '</b></div><div class="col-xs-12"><b>Each: ' + items[j].split(',')[1] + '</div></b>' + '</b></div><div class="col-xs-12"><b>Quantity: ' + items[j].split(',')[2] + '</div></b><hr>');
    }
    var checkoutTotal = getTotals().toFixed(2);
    $("#checkoutTotal").html('<p>Order Total: ' + checkoutTotal + "</p>");
}

function getTotals(){
    var items = this.session;
    var totals = [];
    for (var j in items) {
        var price = parseFloat(items[j].split(',')[1]);
        var amount = parseFloat(items[j].split(',')[2]);
        totals.push(price * amount);
    }
    return totals.reduce(function (a, b) {
        return a + b;
    });
}
function clearCart() {
    sessionStorage.clear();
    window.location.reload();
}