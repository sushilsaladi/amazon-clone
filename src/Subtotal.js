import { Button } from '@material-ui/core';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import "./Subtotal.css";

function Subtotal() {
    const [{ basket } , dispatch] = useStateValue();
    return (
        <div className="subtotal">
            {
            <h4>Subtotal ({basket.length} item) <strong>${getBasketTotal(basket)}</strong></h4>
            
            /* <CurrencyFormat
            renderText={ value => (
                        <p>
                            Subtotal ({basket.length} items): <strong>{
                            value }</strong>
                        </p>
                    )
            }
            decimalScale={2}
            value={getBasketTotal(basket)}
            thousandSeparator={true}
            prefix={"$"}
            /> */}
            <Button className=""> Proceed to Checkout</Button>
        </div>
    )
}

export default Subtotal
