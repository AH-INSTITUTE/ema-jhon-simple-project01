import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    //console.log(props);
    const ecofeIcon = <FontAwesomeIcon icon={faCoffee} />
    const shopingCart = <FontAwesomeIcon icon={faShoppingCart} />
    //console.log(props.product);
    const { img, name, seller, price, stock } = props.product;
    
    return (
        <div className="products">
            <div className="prooduct-img">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>$: {price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddProduct(props.product)}>{shopingCart}Add to cart</button>
            </div>

        </div>
    );
};

export default Product;