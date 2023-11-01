import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../product/Product';

const Shop = () => {
    const [Products,setProducts] = useState([]);
    const[cart,setCart] = useState([])

    useEffect( ()=>{
            fetch('products.json')
            .then(res =>res.json())
            .then(data => setProducts(data))
    }, []);

    const handelAddToCart = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart)
    
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    Products.map(product => 
                    <Product 
                    key={product.id}
                    product={product}
                    handelAddToCart={handelAddToCart}>   
                    </Product>)

                }
            </div>
            <div className="cart-container">
                <h4>Order summery</h4>
                <p>Selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;