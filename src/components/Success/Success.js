import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../context';

const Success = () => {
    const { clearCart } = useContext(Context);

    useEffect(() => {
        clearCart();
    }, []);

    return (
        <div className="content-center">
            <div className="order-ok box-col align-center">
                <b className="order-ok__title">Ваш заказ успешно оформлен!</b>
                <span className="order-ok__desc">
                    Менеджер свяжется с Вами в ближайшее время для уточнения вопросов по заказу.
                </span>
                <NavLink to={'/'} className="order-ok__go-bot green-button">
                    Перейти в бота
                </NavLink>
                <NavLink to={'/'} className="order-ok__go-front">
                    Перейти на главную
                </NavLink>
            </div>
        </div>
    );
};

export default Success;
