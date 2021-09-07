import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import "./Checkout.css"

function Checkout() {
    const [{ basket }] = useStateValue();
    //console.log("basket",basket)
    return (
        <div className="checkout">
            {basket?.length === 0 ? (
                <div>
                    <h2> Your Shopping Basket is empty </h2>
                    <p>
                        You have no items in your basket. To buy one or more click on 'Add to basket' next to the item.
                    </p>
                </div>
                
            ) : (
                <div>
                    <h2> Your Shopping basket</h2>
                    {
                        basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            ></CheckoutProduct>
                        ))
                    }
                </div>
            )}

            {
                basket.length > 0 && (
                    <div className="checkout__right">
                        {<Subtotal/>}
                    </div>

                )
            }
            
        </div>
    )
}

export default Checkout
