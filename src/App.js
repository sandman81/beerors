import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Context } from './context';
import Cart from './components/Cart/Cart';
import Product from './components/Product/Product';
import Catalog from './components/Catalog/Catalog';
import Success from './components/Success/Success';
import Header from './components/Header/Header';
import PhoneFilters from './components/PhoneFilters/PhoneFilters';

const App = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const [isPhoneFilters, setisPhoneFilters] = useState(false);
    const [modifiedProduct, setModifiedProduct] = useState({
        hash: '',
        dataProd: {
            id: null
        },
        dataMod: null,
        dataProp: null
    });
    const addModifiedProduct = (dataProd, dataMod, dataProp) => {
        setModifiedProduct({
            hash: `${dataProd.id}_${dataMod.id}_${dataProp.id}`,
            dataProd,
            dataMod,
            dataProp
        });
    };
    const addProductCart = (product) => {
        let tempModifiedProduct = {};
        if (modifiedProduct.dataProd.id !== product.id) {
            addModifiedProduct(product, product.modifications[0], product.modifications[0].props[0]);
            tempModifiedProduct = {
                hash: `${product.id}_${product.modifications[0].id}_${product.modifications[0].props[0].id}`,
                dataProd: product,
                dataMod: product.modifications[0],
                dataProp: product.modifications[0].props[0]
            };
        } else {
            tempModifiedProduct = modifiedProduct;
        }

        const searchProd = cartProducts.findIndex((prod) => {
            return prod.hash === tempModifiedProduct.hash;
        });
        if (searchProd !== -1) {
            cartProducts[searchProd].count += 1;
        } else {
            cartProducts.push({
                count: 1,
                ...tempModifiedProduct
            });
        }
        setCartProducts([...cartProducts]);
    };
    const removeProductCart = (hash) => {
        setCartProducts(cartProducts.filter((prod) => prod.hash !== hash));
    };
    const clearCart = () => {
        setCartProducts([]);
    };

    const openFilters = () => {
        setisPhoneFilters(true);
    };

    const incrementCountProduct = (hash) => {
        setCartProducts(
            cartProducts.map((prod) => {
                if (prod.hash === hash) {
                    prod.count += 1;
                }
                return prod;
            })
        );
    };
    const decrementCountProduct = (hash) => {
        setCartProducts(
            cartProducts.map((prod) => {
                if (prod.hash === hash && prod.count > 1) {
                    prod.count -= 1;
                }
                return prod;
            })
        );
    };
    const [catalog, setCatalog] = useState({});
    useEffect(() => {
        setCatalog({
            categories: [
                {
                    id: 1,
                    name: 'Для коммерческого транспорта'
                },
                {
                    id: 2,
                    name: 'Для коммерческого транспорта'
                },
                {
                    id: 3,
                    name: 'Для спецтехники'
                },
                {
                    id: 4,
                    name: 'Автохимия и автокосметика'
                }
            ],
            products: [
                {
                    id: 1,
                    categoryId: 1,
                    article: 'testArticle',
                    images: ['/uploads/product.png'],
                    brand: 'testBrand1',
                    style: 'Американский ИПА',
                    name: 'BrewDog, "Jack Hammer"',
                    price: 170,
                    modifications: [
                        {
                            id: 1,
                            code: 'size',
                            title: 'Объем',
                            type: 'radio',
                            props: [
                                {
                                    id: 1,
                                    title: '0,3 л'
                                },
                                {
                                    id: 2,
                                    title: '0,5 л'
                                },
                                {
                                    id: 3,
                                    title: '1 л'
                                }
                            ]
                        }
                    ],
                    description: 'testDescription',
                    shortDescription: 'testShortDescription',
                    dopFields: [
                        {
                            id: 1,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 2,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 3,
                            title: 'testTitle',
                            value: 'testValue'
                        }
                    ]
                },
                {
                    id: 2,
                    categoryId: 2,
                    article: 'testArticle',
                    images: ['/uploads/product.png'],
                    brand: 'testBrand1',
                    style: 'Американский Светлый Эль',
                    name: 'BrewDog, "Jack Hammer"',
                    price: 170,
                    modifications: [
                        {
                            id: 1,
                            code: 'size',
                            title: 'Объем',
                            type: 'radio',
                            props: [
                                {
                                    id: 1,
                                    title: '0,3 л'
                                }
                            ]
                        }
                    ],
                    description: 'testDescription',
                    shortDescription: 'testShortDescription',
                    dopFields: [
                        {
                            id: 1,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 2,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 3,
                            title: 'testTitle',
                            value: 'testValue'
                        }
                    ]
                },
                {
                    id: 3,
                    categoryId: 3,
                    article: 'testArticle',
                    images: ['/uploads/product.png'],
                    brand: 'testBrand1',
                    name: 'BrewDog, "Jack Hammer"',
                    style: 'Сидр яблоко полусухой',
                    price: 170,
                    modifications: [
                        {
                            id: 1,
                            code: 'size',
                            title: 'Объем',
                            type: 'radio',
                            props: [
                                {
                                    id: 1,
                                    title: '0,3 л'
                                },
                                {
                                    id: 2,
                                    title: '0,5 л'
                                }
                            ]
                        }
                    ],
                    description: 'testDescription',
                    shortDescription: 'testShortDescription',
                    dopFields: [
                        {
                            id: 1,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 2,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 3,
                            title: 'testTitle',
                            value: 'testValue'
                        }
                    ]
                },
                {
                    id: 4,
                    categoryId: 4,
                    article: 'testArticle',
                    images: ['/uploads/product.png'],
                    brand: 'testBrand1',
                    name: 'BrewDog, "Jack Hammer"',
                    style: 'Английский эль / Английский стаут',
                    price: 170,
                    modifications: [
                        {
                            id: 1,
                            code: 'size',
                            title: 'Объем',
                            type: 'radio',
                            props: [
                                {
                                    id: 1,
                                    title: '0,3 л'
                                },
                                {
                                    id: 2,
                                    title: '0,5 л'
                                },
                                {
                                    id: 3,
                                    title: '1 л'
                                }
                            ]
                        }
                    ],
                    description: 'testDescription',
                    shortDescription: 'testShortDescription',
                    dopFields: [
                        {
                            id: 1,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 2,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 3,
                            title: 'testTitle',
                            value: 'testValue'
                        }
                    ]
                },
                {
                    id: 5,
                    categoryId: 1,
                    article: 'testArticle',
                    images: ['/uploads/product.png'],
                    brand: 'testBrand1',
                    name: 'BrewDog, "Jack Hammer"',
                    style: 'Фландрийский вишневый эль',
                    price: 170,
                    modifications: [
                        {
                            id: 1,
                            code: 'size',
                            title: 'Объем',
                            type: 'radio',
                            props: [
                                {
                                    id: 1,
                                    title: '0,3 л'
                                }
                            ]
                        }
                    ],
                    description: 'testDescription',
                    shortDescription: 'testShortDescription',
                    dopFields: [
                        {
                            id: 1,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 2,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 3,
                            title: 'testTitle',
                            value: 'testValue'
                        }
                    ]
                },
                {
                    id: 6,
                    categoryId: 1,
                    article: 'testArticle',
                    images: ['/uploads/product.png'],
                    brand: 'testBrand1',
                    name: 'BrewDog, "Jack Hammer"',
                    style: 'Бельгийский фруктовый эль',
                    price: 170,
                    modifications: [
                        {
                            id: 1,
                            code: 'size',
                            title: 'Объем',
                            type: 'radio',
                            props: [
                                {
                                    id: 1,
                                    title: '0,3 л'
                                },
                                {
                                    id: 2,
                                    title: '0,5 л'
                                }
                            ]
                        }
                    ],
                    description: 'testDescription',
                    shortDescription: 'testShortDescription',
                    dopFields: [
                        {
                            id: 1,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 2,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 3,
                            title: 'testTitle',
                            value: 'testValue'
                        }
                    ]
                },
                {
                    id: 7,
                    categoryId: 1,
                    article: 'testArticle',
                    images: ['/uploads/product.png'],
                    brand: 'testBrand1',
                    name: 'BrewDog, "Jack Hammer"',
                    style: 'Яблочный газированный полусухой',
                    price: 170,
                    modifications: [
                        {
                            id: 1,
                            code: 'size',
                            title: 'Объем',
                            type: 'radio',
                            props: [
                                {
                                    id: 1,
                                    title: '0,3 л'
                                },
                                {
                                    id: 2,
                                    title: '0,5 л'
                                },
                                {
                                    id: 3,
                                    title: '1 л'
                                }
                            ]
                        }
                    ],
                    description: 'testDescription',
                    shortDescription: 'testShortDescription',
                    dopFields: [
                        {
                            id: 1,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 2,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 3,
                            title: 'testTitle',
                            value: 'testValue'
                        }
                    ]
                },
                {
                    id: 8,
                    categoryId: 2,
                    article: 'testArticle',
                    images: ['/uploads/product.png'],
                    brand: 'testBrand1',
                    name: 'BrewDog, "Jack Hammer"',
                    style: 'Немецкий лагер',
                    price: 170,
                    modifications: [
                        {
                            id: 1,
                            code: 'size',
                            title: 'Объем',
                            type: 'radio',
                            props: [
                                {
                                    id: 1,
                                    title: '0,3 л'
                                },
                                {
                                    id: 2,
                                    title: '0,5 л'
                                },
                                {
                                    id: 3,
                                    title: '1 л'
                                }
                            ]
                        }
                    ],
                    description: 'testDescription',
                    shortDescription: 'testShortDescription',
                    dopFields: [
                        {
                            id: 1,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 2,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 3,
                            title: 'testTitle',
                            value: 'testValue'
                        }
                    ]
                },
                {
                    id: 9,
                    categoryId: 2,
                    article: 'testArticle',
                    images: ['/uploads/product.png'],
                    brand: 'testBrand1',
                    name: 'BrewDog, "Jack Hammer"',
                    style: 'Гёзе',
                    price: 170,
                    modifications: [
                        {
                            id: 1,
                            code: 'size',
                            title: 'Объем',
                            type: 'radio',
                            props: [
                                {
                                    id: 1,
                                    title: '0,3 л'
                                },
                                {
                                    id: 2,
                                    title: '0,5 л'
                                },
                                {
                                    id: 3,
                                    title: '1 л'
                                }
                            ]
                        }
                    ],
                    description: 'testDescription',
                    shortDescription: 'testShortDescription',
                    dopFields: [
                        {
                            id: 1,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 2,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 3,
                            title: 'testTitle',
                            value: 'testValue'
                        }
                    ]
                },
                {
                    id: 10,
                    categoryId: 2,
                    article: 'testArticle',
                    images: ['/uploads/product.png'],
                    brand: 'testBrand1',
                    name: 'BrewDog, "Jack Hammer"',
                    style: 'Американский ИПА',
                    price: 170,
                    modifications: [
                        {
                            id: 1,
                            code: 'size',
                            title: 'Объем',
                            type: 'radio',
                            props: [
                                {
                                    id: 1,
                                    title: '0,3 л'
                                },
                                {
                                    id: 2,
                                    title: '0,5 л'
                                },
                                {
                                    id: 3,
                                    title: '1 л'
                                }
                            ]
                        }
                    ],
                    description: 'testDescription',
                    shortDescription: 'testShortDescription',
                    dopFields: [
                        {
                            id: 1,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 2,
                            title: 'testTitle',
                            value: 'testValue'
                        },
                        {
                            id: 3,
                            title: 'testTitle',
                            value: 'testValue'
                        }
                    ]
                }
            ]
        });
    }, []);
    return (
        <BrowserRouter>
            <Context.Provider
                value={{
                    cartProducts,
                    catalog,
                    addProductCart,
                    removeProductCart,
                    incrementCountProduct,
                    decrementCountProduct,
                    addModifiedProduct,
                    clearCart,
                    openFilters
                }}
            >
                <div className="App">
                    <div className="layout-body box-col" style={{ overflow: isPhoneFilters && 'hidden' }}>
                        <Header />
                        <div className="content-wrapper">
                            <Switch>
                                <Route path="/cart" render={(props) => <Cart {...props} />} />
                                <Route path="/product" render={(props) => <Product catalog={catalog} {...props} />} />
                                <Route exact path="/" render={(props) => <Catalog catalog={catalog} {...props} />} />
                                <Route exact path="/success" component={Success} />
                            </Switch>
                        </div>
                        {isPhoneFilters && <PhoneFilters />}
                    </div>
                </div>
            </Context.Provider>
        </BrowserRouter>
    );
};

export default App;
