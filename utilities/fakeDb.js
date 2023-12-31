// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
// const addToDb = (id) => {
//     let shoppingCart = getShoppingCart();
  
//     // Add quantity or initialize it to 1
//     const quantity = shoppingCart[id]||0;
//     shoppingCart[id] = quantity + 1;
  
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//   };

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}





// practice
// const addToDb=(id)={
//     let shoppingCart=getShoppingCart();
//     const quantity=shoppingCart[id];
//     if(!quantity){
//      shoppingCart[id]=1;
//     }
//     else{
//         const newQuantity=quantity+1;
//         shoppingCart[id]=newQuantity;
//     }
//     localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
// }
// const getShoppingCart=()=>{
//     let shoppingCart={};
//     const storedData=localStorage.getItem('shopping-cart');
//     if(storedData){
//         shoppingCart=JSON.parse(storedData);
//     }
//     return shoppingCart;
// }
// const deleteShoppingCart=()=>{
//     localStorage.removeItem('shopping-cart');
// }

// const removeFromDb=(id)=>{
//     const shoppingCart=getShoppingCart();
//     if(id in shoppingCart){
//         delete shoppingCart[id];
//         localStorage.setItem('shopping-cart',Json.stringify(shoppingCart));
//     }
// }









export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart
}
