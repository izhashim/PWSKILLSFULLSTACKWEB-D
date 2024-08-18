let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
//Adding 'Meat' in the beginning 
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}
// Adding 'Sugar' at the end 
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}
//Removing 'Honey' if it is not allergic
let allergicToHoney = true;
if (allergicToHoney && shoppingCart.includes('Honey')) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
}
// Modifying 'Tea' to 'Green Tea'
if (shoppingCart.includes('Tea')) {
    shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
}
console.log(shoppingCart);
