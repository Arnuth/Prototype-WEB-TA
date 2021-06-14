
export const ADD_TO_CART = 'ADD_TO_CART'
export const CLEAR_ALL_CART = 'CLEAR_ALL_CART'

export const addToCart = (product = {}, cart = []) => {

    let exists = false // เช็คสินค้านั้นถูกเพิ่มไปหรือยัง?

    if (cart.length > 0) {
        for (const c of cart) {
            if (c.id === product.id) {
                c.qty++;
                exists = true;
            }

        }
    }

    if (!exists) {
        cart.push(product)
    }

    const total = cart.reduce((totalQty, product) => totalQty + product.qty, 0) //reduce หาผลรวม

    return {
        type: ADD_TO_CART,
        payload: {
            cart: cart,
            total: total
        }
    }
}

//clear cart
export const clearAllCart = () => {
    const cart = []
    const total = 0

    return {
        type: CLEAR_ALL_CART,
        payload: {
            cart: cart,
            total: total
        },
    }
}