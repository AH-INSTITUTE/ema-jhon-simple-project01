import React, { useState } from 'react';
import fakeData from './../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    //console.log(first10);
    const [products, setProducs] = useState(first10);
    const [cart, serCart] = useState([]);
    const handleAddProduct = (product) => {
        console.log('cllasdj', product);
        const newCart = [...cart, product];
        serCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    products.map(p => <Product product={p} handleAddProduct={handleAddProduct}></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;