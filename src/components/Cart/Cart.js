import { useContext, useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Context } from '../../context';
import BtnGoBack from '../Btns/BtnGoBack/BtnGoBack';

const Cart = () => {
    const history = useHistory();

    const { cartProducts, removeProductCart, incrementCountProduct, decrementCountProduct } = useContext(Context);
    const [countProducts, setCountProducts] = useState(0);
    const [isTabletView, setisTabletView] = useState(false);
    const [isPhoneView, setisisPhoneView] = useState(false);

    const showTabletView = () => {
        window.matchMedia('(max-width: 1159px)').matches ? setisTabletView(true) : setisTabletView(false);
    };

    const showPhoneView = () => {
        window.matchMedia('(max-width: 767px)').matches ? setisisPhoneView(true) : setisisPhoneView(false);
    };

    useEffect(() => {
        showTabletView();
        showPhoneView();

        window.addEventListener('resize', () => {
            showTabletView();
            showPhoneView();
        });
    });

    // Товары в корзине
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(cartProducts);
    }, [cartProducts]);
    // Общая сумма заказа
    const [totalSum, setTotalSum] = useState(0);
    // Стоимость товаров
    const [productSum, setProductSum] = useState(0);
    // Имя
    const [firstName, setFirstName] = useState('');
    const changeFirstName = (e) => {
        setFirstName(e.target.value);
    };
    // Номер телефона
    const [phone, setPhone] = useState('');
    const changePhone = (e) => {
        setPhone(e.target.value);
    };
    // Объект для отправки на сервер
    // const [dataSendForm, setDataSendForm] = useState({});
    /**
     * Расчет стоимости товаров и общей стоимости
     */
    useEffect(() => {
        setCountProducts(cartProducts.length);
    }, [cartProducts]);
    useEffect(() => {
        if (cartProducts.length) {
            let tempProductSum = 0;
            cartProducts.forEach((product) => {
                tempProductSum += product.dataProd.price;
            });
            setTotalSum(tempProductSum);
            setProductSum(tempProductSum);
        }
    }, [cartProducts]);
    const [privacyPolicy, setPrivacyPolicy] = useState(true);
    const changePrivacyPolicy = (bol) => {
        setPrivacyPolicy(bol);
    };
    const [validate, setValidate] = useState(false);
    useEffect(() => {
        if (firstName.length && phone.length && privacyPolicy) {
            setValidate(true);
        } else {
            setValidate(false);
        }
    }, [firstName, phone, privacyPolicy]);
    /**
     * Формируем объект для отправки
     */
    // useEffect(() => {
    //     setDataSendForm({
    //         totalSum,
    //         productSum,
    //         firstName,
    //         phone
    //     });
    // }, [totalSum, productSum, firstName, phone]);

    const routeChange = () => {
        if (!validate) return;
        const path = `success`;
        history.push(path);
    };

    return (
        <div className="content-center">
            {products && products.length ? (
                <section className="product-section">
                    <div className="product-top box-row align-center">
                        <BtnGoBack text={'Назад'} />
                    </div>
                    <div className="cart-content box-row space-between">
                        <div className="cart-content__main">
                            <div className="orders">
                                <h1 className="orders__title">Заказ </h1>
                                <ul className="orders__list">
                                    {products.map((product, index) => (
                                        <li key={index} className="orders__item box-row">
                                            <div className="orders__item-phoneTop box-row flex-full">
                                                <NavLink
                                                    className="orders__item-img box-row align-middle"
                                                    to={'/product/?id=' + product.dataProd.id}
                                                >
                                                    <img src={product.dataProd.images[0]} />
                                                </NavLink>
                                                <div className="orders__item-content box-col space-between">
                                                    <div className="orders__item-top box-row align-center space-between">
                                                        <div className="box-row align-center">
                                                            {!isTabletView && (
                                                                <div className="orders__item-style">
                                                                    {product.dataProd.style}
                                                                </div>
                                                            )}
                                                            <div className="orders__item-code">
                                                                <span>Артикул: </span>
                                                                {product.dataProd.article}
                                                            </div>
                                                        </div>
                                                        {!isPhoneView && (
                                                            <button
                                                                onClick={() => removeProductCart(product.hash)}
                                                                className="orders__item-delete"
                                                            >
                                                                <svg
                                                                    fill="none"
                                                                    height="16"
                                                                    viewBox="0 0 18 16"
                                                                    width="18"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <rect
                                                                        fill="#EB5757"
                                                                        height="20.5225"
                                                                        rx="1.05244"
                                                                        transform="rotate(45 15.7793 0.000244141)"
                                                                        width="2.10488"
                                                                        x="15.7793"
                                                                        y="0.000244141"
                                                                    />
                                                                    <rect
                                                                        fill="#EB5757"
                                                                        height="20.5225"
                                                                        rx="1.05244"
                                                                        transform="rotate(135 16.8958 14.5117)"
                                                                        width="2.10488"
                                                                        x="16.8958"
                                                                        y="14.5117"
                                                                    />
                                                                </svg>
                                                                Удалить
                                                            </button>
                                                        )}
                                                    </div>
                                                    <b className="orders__item-title">
                                                        <NavLink to={'/product/?id=' + product.dataProd.id}>
                                                            {product.dataProd.name}
                                                        </NavLink>
                                                    </b>
                                                    {isTabletView && (
                                                        <div className="orders__item-style">
                                                            {product.dataProd.style}
                                                        </div>
                                                    )}
                                                    {!isPhoneView && (
                                                        <div className="orders__item-type box-row">
                                                            <label className="orders__item-type-field box-row align-center">
                                                                <input type="checkbox" />
                                                                <span className="orders__item-type-checkbox box-row align-middle">
                                                                    <svg
                                                                        width="14"
                                                                        height="10"
                                                                        viewBox="0 0 14 10"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <line
                                                                            x1="1.91421"
                                                                            y1="5"
                                                                            x2="5.375"
                                                                            y2="8.46079"
                                                                            stroke="white"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                        />
                                                                        <line
                                                                            x1="5.375"
                                                                            y1="8.46079"
                                                                            x2="12.0858"
                                                                            y2="1.75"
                                                                            stroke="white"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                Здесь (в стакане)
                                                            </label>
                                                            <label className="orders__item-type-field box-row align-center">
                                                                <input type="checkbox" />
                                                                <span className="orders__item-type-checkbox box-row align-middle">
                                                                    <svg
                                                                        width="14"
                                                                        height="10"
                                                                        viewBox="0 0 14 10"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <line
                                                                            x1="1.91421"
                                                                            y1="5"
                                                                            x2="5.375"
                                                                            y2="8.46079"
                                                                            stroke="white"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                        />
                                                                        <line
                                                                            x1="5.375"
                                                                            y1="8.46079"
                                                                            x2="12.0858"
                                                                            y2="1.75"
                                                                            stroke="white"
                                                                            strokeWidth="2"
                                                                            strokeLinecap="round"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                С собой (в бутылке)
                                                            </label>
                                                        </div>
                                                    )}

                                                    <div className="orders__item-actions box-row align-center space-between">
                                                        <div className="orders__item-options box-row">
                                                            <span className="orders__item-option">
                                                                {product.dataProp.title}
                                                            </span>
                                                        </div>
                                                        <div className="orders__item-buttons box-row align-center">
                                                            {!isPhoneView && (
                                                                <div className="orders__item-counts box-row align-center">
                                                                    <b className="orders__item-counts-count">
                                                                        {product.count}
                                                                    </b>
                                                                    <button
                                                                        onClick={() =>
                                                                            decrementCountProduct(product.hash)
                                                                        }
                                                                        className="orders__item-counts-button minus"
                                                                    >
                                                                        <svg
                                                                            height="3"
                                                                            viewBox="0 0 8 3"
                                                                            width="8"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M1.04219 2.098C0.915523 2.098 0.807856 2.06 0.71919 1.984C0.64319 1.89533 0.60519 1.78767 0.60519 1.661V0.939C0.60519 0.812333 0.64319 0.711 0.71919 0.635C0.807856 0.546333 0.915523 0.502 1.04219 0.502H6.74219C6.86886 0.502 6.97019 0.546333 7.04619 0.635C7.13486 0.711 7.17919 0.812333 7.17919 0.939V1.661C7.17919 1.78767 7.13486 1.89533 7.04619 1.984C6.97019 2.06 6.86886 2.098 6.74219 2.098H1.04219Z" />
                                                                        </svg>
                                                                    </button>
                                                                    <button
                                                                        onClick={() =>
                                                                            incrementCountProduct(product.hash)
                                                                        }
                                                                        className="orders__item-counts-button plus"
                                                                    >
                                                                        <svg
                                                                            height="11"
                                                                            viewBox="0 0 12 11"
                                                                            width="12"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M5.55308 10.373C5.42642 10.373 5.31875 10.335 5.23008 10.259C5.15408 10.1703 5.11608 10.0627 5.11608 9.936V5.984H1.22108C1.09442 5.984 0.986751 5.946 0.898084 5.87C0.822084 5.78133 0.784084 5.67367 0.784084 5.547V4.939C0.784084 4.81233 0.822084 4.711 0.898084 4.635C0.986751 4.54633 1.09442 4.502 1.22108 4.502H5.11608V0.663999C5.11608 0.537333 5.15408 0.436 5.23008 0.36C5.31875 0.271333 5.42642 0.226999 5.55308 0.226999H6.21808C6.34475 0.226999 6.44608 0.271333 6.52208 0.36C6.61075 0.436 6.65508 0.537333 6.65508 0.663999V4.502H10.5691C10.6958 4.502 10.7971 4.54633 10.8731 4.635C10.9618 4.711 11.0061 4.81233 11.0061 4.939V5.547C11.0061 5.67367 10.9618 5.78133 10.8731 5.87C10.7971 5.946 10.6958 5.984 10.5691 5.984H6.65508V9.936C6.65508 10.0627 6.61075 10.1703 6.52208 10.259C6.44608 10.335 6.34475 10.373 6.21808 10.373H5.55308Z" />
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            )}

                                                            <div className="orders__item-price box-col">
                                                                <span className="orders__item-price-new">
                                                                    {product.dataProd.price.toLocaleString('ru-RU')} ₽
                                                                </span>
                                                                <span className="orders__item-price-old">200 ₽</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {isPhoneView && (
                                                <>
                                                    <div className="box-row align-center space-between">
                                                        <div className="orders__item-counts box-row align-center">
                                                            <b className="orders__item-counts-count">{product.count}</b>
                                                            <button
                                                                onClick={() => decrementCountProduct(product.hash)}
                                                                className="orders__item-counts-button minus"
                                                            >
                                                                <svg
                                                                    height="3"
                                                                    viewBox="0 0 8 3"
                                                                    width="8"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M1.04219 2.098C0.915523 2.098 0.807856 2.06 0.71919 1.984C0.64319 1.89533 0.60519 1.78767 0.60519 1.661V0.939C0.60519 0.812333 0.64319 0.711 0.71919 0.635C0.807856 0.546333 0.915523 0.502 1.04219 0.502H6.74219C6.86886 0.502 6.97019 0.546333 7.04619 0.635C7.13486 0.711 7.17919 0.812333 7.17919 0.939V1.661C7.17919 1.78767 7.13486 1.89533 7.04619 1.984C6.97019 2.06 6.86886 2.098 6.74219 2.098H1.04219Z" />
                                                                </svg>
                                                            </button>
                                                            <button
                                                                onClick={() => incrementCountProduct(product.hash)}
                                                                className="orders__item-counts-button plus"
                                                            >
                                                                <svg
                                                                    height="11"
                                                                    viewBox="0 0 12 11"
                                                                    width="12"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M5.55308 10.373C5.42642 10.373 5.31875 10.335 5.23008 10.259C5.15408 10.1703 5.11608 10.0627 5.11608 9.936V5.984H1.22108C1.09442 5.984 0.986751 5.946 0.898084 5.87C0.822084 5.78133 0.784084 5.67367 0.784084 5.547V4.939C0.784084 4.81233 0.822084 4.711 0.898084 4.635C0.986751 4.54633 1.09442 4.502 1.22108 4.502H5.11608V0.663999C5.11608 0.537333 5.15408 0.436 5.23008 0.36C5.31875 0.271333 5.42642 0.226999 5.55308 0.226999H6.21808C6.34475 0.226999 6.44608 0.271333 6.52208 0.36C6.61075 0.436 6.65508 0.537333 6.65508 0.663999V4.502H10.5691C10.6958 4.502 10.7971 4.54633 10.8731 4.635C10.9618 4.711 11.0061 4.81233 11.0061 4.939V5.547C11.0061 5.67367 10.9618 5.78133 10.8731 5.87C10.7971 5.946 10.6958 5.984 10.5691 5.984H6.65508V9.936C6.65508 10.0627 6.61075 10.1703 6.52208 10.259C6.44608 10.335 6.34475 10.373 6.21808 10.373H5.55308Z" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <button
                                                            onClick={() => removeProductCart(product.hash)}
                                                            className="orders__item-delete"
                                                        >
                                                            <svg
                                                                fill="none"
                                                                height="16"
                                                                viewBox="0 0 18 16"
                                                                width="18"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <rect
                                                                    fill="#EB5757"
                                                                    height="20.5225"
                                                                    rx="1.05244"
                                                                    transform="rotate(45 15.7793 0.000244141)"
                                                                    width="2.10488"
                                                                    x="15.7793"
                                                                    y="0.000244141"
                                                                />
                                                                <rect
                                                                    fill="#EB5757"
                                                                    height="20.5225"
                                                                    rx="1.05244"
                                                                    transform="rotate(135 16.8958 14.5117)"
                                                                    width="2.10488"
                                                                    x="16.8958"
                                                                    y="14.5117"
                                                                />
                                                            </svg>
                                                            Удалить
                                                        </button>
                                                    </div>
                                                    <div className="orders__item-type">
                                                        <label className="orders__item-type-field box-row align-center">
                                                            <input type="checkbox" />
                                                            <span className="orders__item-type-checkbox box-row align-middle">
                                                                <svg
                                                                    width="14"
                                                                    height="10"
                                                                    viewBox="0 0 14 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <line
                                                                        x1="1.91421"
                                                                        y1="5"
                                                                        x2="5.375"
                                                                        y2="8.46079"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                    />
                                                                    <line
                                                                        x1="5.375"
                                                                        y1="8.46079"
                                                                        x2="12.0858"
                                                                        y2="1.75"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            Здесь (в стакане)
                                                        </label>
                                                        <label className="orders__item-type-field box-row align-center">
                                                            <input type="checkbox" />
                                                            <span className="orders__item-type-checkbox box-row align-middle">
                                                                <svg
                                                                    width="14"
                                                                    height="10"
                                                                    viewBox="0 0 14 10"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <line
                                                                        x1="1.91421"
                                                                        y1="5"
                                                                        x2="5.375"
                                                                        y2="8.46079"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                    />
                                                                    <line
                                                                        x1="5.375"
                                                                        y1="8.46079"
                                                                        x2="12.0858"
                                                                        y2="1.75"
                                                                        stroke="white"
                                                                        strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            С собой (в бутылке)
                                                        </label>
                                                    </div>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="user-data">
                                <h3 className="user-data__title">Ваши данные </h3>
                                <div className="user-data__fields box-row box-wrap space-between">
                                    <div className="user-data__field box-col">
                                        <label className="user-data__field-label">Имя* </label>
                                        <input
                                            className={
                                                'user-data__field-text form-text ' +
                                                (!validate && !firstName.length ? 'error' : '')
                                            }
                                            onChange={changeFirstName}
                                            type="text"
                                        />
                                        <span className="user-data__field-error">Поле не должно быть пустым</span>
                                    </div>
                                    <div className="user-data__field box-col">
                                        <label className="user-data__field-label">Контактный телефон* </label>
                                        <input
                                            className={
                                                'user-data__field-text form-text ' +
                                                (!validate && !phone.length ? 'error' : '')
                                            }
                                            onChange={changePhone}
                                            type="text"
                                        />
                                        <span className="user-data__field-error">Поле не должно быть пустым</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="orders-result box-col self-start">
                            {!isTabletView ? (
                                <div className="orders-result__info">
                                    <div className="orders-result__full box-row space-between align-end">
                                        <b className="orders-result__full-label">Итого</b>
                                        <span className="orders-result__full-price">
                                            {totalSum.toLocaleString('ru-RU')} ₽
                                        </span>
                                    </div>
                                    <div className="orders-result__products box-row space-between">
                                        <span className="orders-result__products-label">
                                            Товары, {countProducts} шт.
                                        </span>
                                        <span className="orders-result__products-price">
                                            {productSum.toLocaleString('ru-RU')} ₽
                                        </span>
                                    </div>
                                    <div className="orders-result__products box-row space-between">
                                        <span className="orders-result__products-label">Скидка</span>
                                        <span className="orders-result__products-price">----</span>
                                    </div>
                                    <div className="orders-result__actions box-col">
                                        <button
                                            onClick={() => routeChange()}
                                            className={
                                                'orders-result__pay green-button ' + (!validate ? 'disabled' : '')
                                            }
                                        >
                                            Заказать
                                        </button>
                                        <div className="orders-result__bottom box-col">
                                            <input
                                                type="checkbox"
                                                className={
                                                    'orders-result__input visually-hidden ' +
                                                    (!validate && !privacyPolicy ? 'error' : '')
                                                }
                                                id="agree"
                                                name="agree"
                                                defaultChecked={privacyPolicy}
                                                onChange={() => changePrivacyPolicy(!privacyPolicy)}
                                            />
                                            <label className="orders-result__bottom-text" htmlFor="agree">
                                                Принимаю&nbsp;
                                                <a
                                                    href="https://myname.fm/oil/policy.html"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Условия политики конфиденциальности
                                                </a>
                                            </label>
                                            <span className="orders-result__bottom-text-error">
                                                Условия использования не принятым
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="orders-result__columns box-row">
                                        <div className="orders-result__column">
                                            <div className="orders-result__full box-row space-between align-end">
                                                <b className="orders-result__full-label">Итого</b>
                                                <span className="orders-result__full-price">
                                                    {totalSum.toLocaleString('ru-RU')} ₽
                                                </span>
                                            </div>
                                            <div className="orders-result__products box-row space-between">
                                                <span className="orders-result__products-label">
                                                    Товары, {countProducts} шт.
                                                </span>
                                                <span className="orders-result__products-price">
                                                    {productSum.toLocaleString('ru-RU')} ₽
                                                </span>
                                            </div>
                                            <div className="orders-result__products box-row space-between">
                                                <span className="orders-result__products-label">Скидка</span>
                                                <span className="orders-result__products-price">----</span>
                                            </div>
                                        </div>
                                        <div className="orders-result__column">
                                            <input
                                                type="checkbox"
                                                className={
                                                    'orders-result__input visually-hidden ' +
                                                    (!validate && !privacyPolicy ? 'error' : '')
                                                }
                                                id="agree"
                                                name="agree"
                                                defaultChecked={privacyPolicy}
                                                onChange={() => changePrivacyPolicy(!privacyPolicy)}
                                            />
                                            <label className="orders-result__bottom-text" htmlFor="agree">
                                                Принимаю&nbsp;
                                                <a
                                                    href="https://myname.fm/oil/policy.html"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Условия политики конфиденциальности
                                                </a>
                                            </label>
                                            <span className="orders-result__bottom-text-error">
                                                Условия использования не принятым
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => routeChange()}
                                        className={'orders-result__pay green-button ' + (!validate ? 'disabled' : '')}
                                    >
                                        Заказать
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            ) : (
                <div className="order-ok box-col align-center">
                    <b className="order-ok__title">В вашей корзине пока ничего нет</b>
                    <span className="order-ok__desc">Корзина ждет, что ее наполнят. Желаем приятных покупок!</span>
                    <NavLink to={'/'} className="order-ok__go-bot green-button">
                        Перейти на главную
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default Cart;
