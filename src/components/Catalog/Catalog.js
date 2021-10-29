import { useState, useEffect, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Select from 'react-select';
import { Context } from '../../context';
import MiniCart from '../MiniCart/MiniCart';
import BtnGoUrl from '../Btns/BtnGoUrl/BtnGoUrl';
import Sidebar from '../Sidebar/Sidebar';

const optionsType = [
    { value: 'type', label: 'Фасовка' },
    { value: 'type1', label: '0,3 л' },
    { value: 'type2', label: '0,5 л' },
    { value: 'type3', label: '1 л' }
];

const optionsStyle = [
    { value: 'style', label: 'Стиль' },
    { value: 'style1', label: 'Американский ИПА' },
    { value: 'style2', label: 'Американский Светлый Эль' },
    { value: 'style3', label: 'Сидр яблоко полусухой' },
    { value: 'style4', label: 'Английский эль / Английский стаут' },
    { value: 'style5', label: 'Фландрийский вишневый эль' },
    { value: 'style6', label: 'Бельгийский фруктовый эль' },
    { value: 'style7', label: 'Яблочный газированный полусухой' },
    { value: 'style8', label: 'Немецкий лагер' },
    { value: 'style9', label: 'Гёзе' }
];

const optionsCountry = [
    { value: 'country', label: 'Страна' },
    { value: 'country1', label: 'Россия' },
    { value: 'country2', label: 'США' },
    { value: 'country3', label: 'Бельгия' }
];

const optionsFabric = [
    { value: 'fabric', label: 'Завод производитель' },
    { value: 'fabric1', label: 'Завод производитель 1' },
    { value: 'fabric2', label: 'Завод производитель 2' },
    { value: 'fabric3', label: 'Завод производитель 3' }
];

const Catalog = ({ catalog }) => {
    const { addProductCart, addModifiedProduct, openFilters } = useContext(Context);
    const [currentProducts, setCurrentProducts] = useState([]);
    const search = useLocation().search;
    const currentCategoryId = new URLSearchParams(search).get('category');
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

    useEffect(() => {
        if (catalog.products && currentCategoryId) {
            setCurrentProducts(catalog.products.filter((item) => item.categoryId === +currentCategoryId));
        } else {
            setCurrentProducts(catalog.products);
        }
    }, [catalog, currentCategoryId]);

    return (
        <div className="content-center">
            {!isPhoneView && (
                <div className="catalog-top catalog-top__button box-row align-center space-between">
                    {!isTabletView ? (
                        <BtnGoUrl text={'Вернуться в чат-бота'} url={'/'} />
                    ) : (
                        <>
                            <div className="box-row align-center">
                                <BtnGoUrl text={'Вернуться в чат-бота'} url={'/'} />
                                <span className="catalog-top__counts">
                                    {currentProducts ? currentProducts.length : 0} товаров
                                </span>
                            </div>
                            <MiniCart />
                        </>
                    )}
                </div>
            )}
            <div className="catalog-top box-row align-center">
                {!isTabletView && (
                    <div className="catalog-top__brands box-row align-center">
                        <h1 className="catalog-top__title">Товары</h1>
                        <span className="catalog-top__counts">
                            {currentProducts ? currentProducts.length : 0} товаров
                        </span>
                    </div>
                )}
                <div className="catalog-top__content box-row space-between flex-full">
                    {!isPhoneView ? (
                        <div className="catalog-top__filters box-row">
                            <Select
                                isSearchable={false}
                                className="selectFilter selectType"
                                classNamePrefix="selectFilter"
                                options={optionsType}
                                defaultValue={optionsType[0]}
                            />
                            <Select
                                isSearchable={false}
                                className="selectFilter selectStyle"
                                classNamePrefix="selectFilter"
                                options={optionsStyle}
                                defaultValue={optionsStyle[0]}
                            />
                            <Select
                                isSearchable={false}
                                className="selectFilter selectCountry"
                                classNamePrefix="selectFilter"
                                options={optionsCountry}
                                defaultValue={optionsCountry[0]}
                            />
                            <Select
                                isSearchable={false}
                                className="selectFilter selectFabric"
                                classNamePrefix="selectFilter"
                                options={optionsFabric}
                                defaultValue={optionsFabric[0]}
                            />
                        </div>
                    ) : (
                        <>
                            <div className="catalog-top__content-activeOptions box-row flex-full">
                                <div className="filterChip box-row align-center">
                                    Эль
                                    <span className="filterChip__closed">
                                        <svg
                                            width="11"
                                            height="11"
                                            viewBox="0 0 11 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.4584 1.5405L9.45967 0.541748L5.50008 4.50133L1.5405 0.541748L0.541748 1.5405L4.50133 5.50008L0.541748 9.45966L1.5405 10.4584L5.50008 6.49883L9.45967 10.4584L10.4584 9.45966L6.49883 5.50008L10.4584 1.5405Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className="filterChip box-row align-center">
                                    1 литр
                                    <span className="filterChip__closed">
                                        <svg
                                            width="11"
                                            height="11"
                                            viewBox="0 0 11 11"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.4584 1.5405L9.45967 0.541748L5.50008 4.50133L1.5405 0.541748L0.541748 1.5405L4.50133 5.50008L0.541748 9.45966L1.5405 10.4584L5.50008 6.49883L9.45967 10.4584L10.4584 9.45966L6.49883 5.50008L10.4584 1.5405Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <button className="openFiltersButton" onClick={() => openFilters()}>
                                <svg
                                    width="16"
                                    height="12"
                                    viewBox="0 0 16 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.25 9V0.75C7.25 0.551088 7.32902 0.360322 7.46967 0.21967C7.61032 0.0790178 7.80109 0 8 0C8.19891 0 8.38968 0.0790178 8.53033 0.21967C8.67098 0.360322 8.75 0.551088 8.75 0.75V9H9.5C9.69891 9 9.88968 9.07902 10.0303 9.21967C10.171 9.36032 10.25 9.55109 10.25 9.75C10.25 9.94891 10.171 10.1397 10.0303 10.2803C9.88968 10.421 9.69891 10.5 9.5 10.5H8.75V11.25C8.75 11.4489 8.67098 11.6397 8.53033 11.7803C8.38968 11.921 8.19891 12 8 12C7.80109 12 7.61032 11.921 7.46967 11.7803C7.32902 11.6397 7.25 11.4489 7.25 11.25V10.5H6.5C6.30109 10.5 6.11032 10.421 5.96967 10.2803C5.82902 10.1397 5.75 9.94891 5.75 9.75C5.75 9.55109 5.82902 9.36032 5.96967 9.21967C6.11032 9.07902 6.30109 9 6.5 9H7.25ZM12.5 1.5V0.75C12.5 0.551088 12.579 0.360322 12.7197 0.21967C12.8603 0.0790178 13.0511 0 13.25 0C13.4489 0 13.6397 0.0790178 13.7803 0.21967C13.921 0.360322 14 0.551088 14 0.75V1.5H14.75C14.9489 1.5 15.1397 1.57902 15.2803 1.71967C15.421 1.86032 15.5 2.05109 15.5 2.25C15.5 2.44891 15.421 2.63968 15.2803 2.78033C15.1397 2.92098 14.9489 3 14.75 3H14V11.25C14 11.4489 13.921 11.6397 13.7803 11.7803C13.6397 11.921 13.4489 12 13.25 12C13.0511 12 12.8603 11.921 12.7197 11.7803C12.579 11.6397 12.5 11.4489 12.5 11.25V3H11.75C11.5511 3 11.3603 2.92098 11.2197 2.78033C11.079 2.63968 11 2.44891 11 2.25C11 2.05109 11.079 1.86032 11.2197 1.71967C11.3603 1.57902 11.5511 1.5 11.75 1.5H12.5ZM3.5 3.75H4.25C4.44891 3.75 4.63968 3.82902 4.78033 3.96967C4.92098 4.11032 5 4.30109 5 4.5C5 4.69891 4.92098 4.88968 4.78033 5.03033C4.63968 5.17098 4.44891 5.25 4.25 5.25H3.5V11.25C3.5 11.4489 3.42098 11.6397 3.28033 11.7803C3.13968 11.921 2.94891 12 2.75 12C2.55109 12 2.36032 11.921 2.21967 11.7803C2.07902 11.6397 2 11.4489 2 11.25V5.25H1.25C1.05109 5.25 0.860322 5.17098 0.71967 5.03033C0.579018 4.88968 0.5 4.69891 0.5 4.5C0.5 4.30109 0.579018 4.11032 0.71967 3.96967C0.860322 3.82902 1.05109 3.75 1.25 3.75H2V0.75C2 0.551088 2.07902 0.360322 2.21967 0.21967C2.36032 0.0790178 2.55109 0 2.75 0C2.94891 0 3.13968 0.0790178 3.28033 0.21967C3.42098 0.360322 3.5 0.551088 3.5 0.75V3.75Z"
                                        fill="#4F4F4F"
                                    />
                                </svg>
                                Фильтры
                            </button>
                        </>
                    )}
                    {!isTabletView && <MiniCart />}
                </div>
            </div>
            <section className="catalog-section box-row">
                {!isTabletView && <Sidebar />}
                <ul className="catalog-list box-row box-wrap">
                    {currentProducts
                        ? currentProducts.map((product, prod_index) => (
                              <li key={product.id + '_' + prod_index} className="catalog-list__item box-col">
                                  <NavLink
                                      to={'/product/?id=' + product.id}
                                      className="catalog-list__product-img relative box-row align-middle"
                                  >
                                      <img src={product.images[0]} />
                                  </NavLink>
                                  <b className="catalog-list__product-name">{product.name}</b>
                                  <span className="catalog-list__product-style">{product.style}</span>
                                  {!isPhoneView &&
                                      product.modifications.map((modification, mod_index) => (
                                          <div
                                              key={modification.id + '_' + mod_index}
                                              className="catalog-list__product-size box-col"
                                          >
                                              <div className="box-row">
                                                  {modification.props.map((prop, prop_index) => (
                                                      <label
                                                          key={prop.id + '_' + prop_index}
                                                          className="catalog-list__product-size-field"
                                                      >
                                                          <input
                                                              type={modification.type}
                                                              name={modification.code + '-' + product.id}
                                                              defaultChecked={prop_index === 0}
                                                              onChange={() =>
                                                                  addModifiedProduct(product, modification, prop)
                                                              }
                                                          />
                                                          <span className="catalog-list__product-size-text box-row align-middle">
                                                              {prop.title}
                                                          </span>
                                                      </label>
                                                  ))}
                                              </div>
                                          </div>
                                      ))}
                                  <div className="catalog-list__product-price box-row space-end">{product.price} ₽</div>
                                  {!isPhoneView ? (
                                      <>
                                          <button
                                              onClick={() => addProductCart(product)}
                                              className="catalog-list__product-add green-button"
                                          >
                                              Добавить в корзину
                                          </button>
                                          <NavLink
                                              className="catalog-list__product-open greenLight-button"
                                              to={'/product/?id=' + product.id}
                                          >
                                              Подробнее
                                          </NavLink>
                                      </>
                                  ) : (
                                      <button
                                          className="catalog-list__product-phoneAdd"
                                          onClick={() => addProductCart(product)}
                                      >
                                          <svg
                                              width="15"
                                              height="15"
                                              viewBox="0 0 15 15"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                          >
                                              <path
                                                  d="M14.9375 2.62498C14.875 2.56249 14.8125 2.49997 14.6875 2.49997H2.8125L2.49999 0.87499C2.49999 0.74998 2.31249 0.625 2.18748 0.625H0.31248C0.12501 0.624971 0 0.74998 0 0.93748C0 1.12498 0.12501 1.24999 0.31251 1.24999H1.93752L3.43752 8.875C3.62502 9.87499 4.56252 10.625 5.56251 10.625H12.75C12.9375 10.625 13.0625 10.5 13.0625 10.3125C13.0625 10.125 12.9375 9.99997 12.75 9.99997H5.625C5.12499 9.99997 4.62501 9.74998 4.37499 9.31246L13.5 8.06248C13.625 8.06248 13.75 7.93747 13.75 7.81249L15 2.81248C15 2.81248 15 2.68747 14.9375 2.62498ZM13.1875 7.49998L4.06248 8.68747L2.93748 3.06247H14.25L13.1875 7.49998Z"
                                                  fill="white"
                                              />
                                              <path d="M14.5 3H2.5L4 9L13.5 7.5L14.5 3Z" fill="white" />
                                              <path
                                                  d="M5.31249 11.25C4.43751 11.25 3.75 11.9375 3.75 12.8125C3.75 13.6875 4.43751 14.375 5.31249 14.375C6.1875 14.375 6.87498 13.6875 6.87498 12.8125C6.87501 11.9375 6.1875 11.25 5.31249 11.25ZM5.31249 13.75C4.81248 13.75 4.37499 13.3125 4.37499 12.8125C4.37499 12.3125 4.81248 11.875 5.31249 11.875C5.8125 11.875 6.24999 12.3125 6.24999 12.8125C6.24999 13.3125 5.8125 13.75 5.31249 13.75Z"
                                                  fill="white"
                                              />
                                              <path
                                                  d="M11.5625 11.25C10.6875 11.25 10 11.9375 10 12.8125C10 13.6875 10.6875 14.375 11.5625 14.375C12.4375 14.375 13.125 13.6875 13.125 12.8125C13.125 11.9375 12.4375 11.25 11.5625 11.25ZM11.5625 13.75C11.0625 13.75 10.625 13.3125 10.625 12.8125C10.625 12.3125 11.0625 11.875 11.5625 11.875C12.0625 11.875 12.5 12.3125 12.5 12.8125C12.5 13.3125 12.0625 13.75 11.5625 13.75Z"
                                                  fill="white"
                                              />
                                          </svg>
                                      </button>
                                  )}
                              </li>
                          ))
                        : ''}
                </ul>
            </section>
        </div>
    );
};
export default Catalog;
