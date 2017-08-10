var shoppingCartItems = [];
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