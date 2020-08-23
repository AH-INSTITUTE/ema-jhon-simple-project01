import React from 'react';
import Product from '../Product/Product';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    //const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price;
    }
    let shipping = 0;
    if (totalPrice > 35) {
        shipping = 0;
    }
    else if (totalPrice > 15) {
        shipping = 4.99;
    } else if (totalPrice > 0) {
        shipping = 12.99
    } else if (totalPrice > 0) {
        shipping = 12.99
    }
    const tax = (totalPrice / 10).toFixed(2);
    const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const prec = num.toFixed(2);
        return Number(prec);
    }
    return (
        <div>

            <h3>This is cart</h3>
            <p>Item Ordered: {cart.length}</p>
            <p>Total Proce: {formatNumber(totalPrice)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + Vat : {tax}</small></p>
            <p><small>Total Price :{grandTotal}</small></p>
        </div>
    );
};

export default Cart;