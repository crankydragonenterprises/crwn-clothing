export const AddItemToCart = (cartItems, cartItemToAdd) => {
    //look through the existing cart items
    //if it finds a cart item in the existing cart with the same id as the new cart item, 
    //return that item to the new const
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    //if it found a matching cart item
    if(existingCartItem){
        return cartItems.map(cartItem => //return a new array of cart items
            cartItem.id === cartItemToAdd.id 
                // check if the current item is the same as the added item 
                ? {...cartItem, quantity: cartItem.quantity + 1} // increase the quantity
                : cartItem // else return the original cart item
            )
    }

    //if there wasn't a matching item, make a new array with the new item at a base quantity of 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    //find the cart item in the cart
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    //check if the quantity is 1, if so, filter out the cart item
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(
        cartItem => 
        //decrease the quantity of the selected item
        cartItem.id === cartItemToRemove.id ? 
        {
            ...cartItem, quantity: cartItem.quantity - 1,
        } 
        // do nothing if the ids don't match
        : cartItem
    )
}