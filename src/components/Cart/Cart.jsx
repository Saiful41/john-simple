import './Cart.css'

const Cart = (cart) => {
    return (
        <div className='cart'>
            <h4>Order summery</h4>
                <p>Selected items: {cart.length}</p>
                <p>Total price: </p>
                <p>Total shipping: </p>
                <p>tax</p>
                <h6>Grand Total: </h6>
        </div>
    );
};

export default Cart;