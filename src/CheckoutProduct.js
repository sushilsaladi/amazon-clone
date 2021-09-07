import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket} , dispatch] = useStateValue();
    const removeFrombasket = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    //console.log(id,title,rating,price)
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}></img>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_)=>(
                            <p>&#9733;</p>
                        ))
                    }
                </p>
                <button onClick={removeFrombasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
