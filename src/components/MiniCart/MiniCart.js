import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../context';

const MiniCart = () => {
    const { cartProducts } = useContext(Context);
    const [countProducts, setCountProducts] = useState(0);
    useEffect(() => {
        setCountProducts(cartProducts.length);
    }, [cartProducts]);
    return (
        <NavLink className="product-top__cart box-row align-center" to="/cart">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M23.9 4.19997C23.8 4.09998 23.7 3.99995 23.5 3.99995H4.5L3.99998 1.39998C3.99998 1.19997 3.69998 1 3.49997 1H0.499969C0.200016 0.999953 0 1.19997 0 1.49997C0 1.79997 0.200016 1.99998 0.500016 1.99998H3.10003L5.50003 14.2C5.80003 15.8 7.30003 17 8.90002 17H20.4C20.7 17 20.9 16.8 20.9 16.5C20.9 16.2 20.7 16 20.4 16H9C8.19998 16 7.40002 15.6 6.99998 14.8999L21.6 12.9C21.8 12.9 22 12.7 22 12.5L24 4.49997C24 4.49997 24 4.29995 23.9 4.19997ZM21.1 12L6.49997 13.9L4.69997 4.89995H22.8L21.1 12Z"
                    fill="#414141"
                />
                <path
                    d="M8.49998 18C7.10002 18 6 19.1 6 20.5C6 21.9 7.10002 23 8.49998 23C9.9 23 11 21.9 11 20.5C11 19.1 9.9 18 8.49998 18ZM8.49998 22C7.69997 22 6.99998 21.3 6.99998 20.5C6.99998 19.7 7.69997 19 8.49998 19C9.3 19 9.99998 19.7 9.99998 20.5C9.99998 21.3 9.3 22 8.49998 22Z"
                    fill="#414141"
                />
                <path
                    d="M18.5 18C17.1 18 16 19.1 16 20.5C16 21.9 17.1001 23 18.5 23C19.9 23 21 21.9 21 20.5C21 19.1 19.9 18 18.5 18ZM18.5 22C17.7 22 17 21.3 17 20.5C17 19.7 17.7 19 18.5 19C19.3 19 20 19.7 20 20.5C20 21.3 19.3 22 18.5 22Z"
                    fill="#414141"
                />
            </svg>
            <span className="product-top__cart-text">{countProducts > 0 ? `${countProducts} товар` : 'Корзина'}</span>
        </NavLink>
    );
};
export default MiniCart;
