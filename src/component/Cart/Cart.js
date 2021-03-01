import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const totalCost = cart.reduce((total, plyers) => total + plyers.salary, 0);
    return (
        <div>
            <h4>Summery</h4>
            <br/>
            <h3>Selected Player: {cart.length}</h3>
            <br/>
            {
                cart.map(cart => <div key={cart.id}><li>name:{cart.name}<br/>Salary:$ {cart.salary}M</li></div>)
            }
            <br/>
            <h3>Total Cost:$ {(totalCost.toFixed(2))}M</h3>
        </div>
    );
};

export default Cart;