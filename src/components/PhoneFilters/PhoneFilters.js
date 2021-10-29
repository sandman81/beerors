import { useState } from 'react';
import { Collapse } from 'reactstrap';

const filters = ['Стиль', 'Фасовка', 'Завод производитель', 'Страна'];
const size = ['0,3 л', '0,5 л', '1 л'];
const style = [
    'Американский ИПА',
    'Американский Светлый Эль',
    'Сидр яблоко полусухой',
    'Английский эль / Английский стаут',
    'Фландрийский вишневый эль',
    'Бельгийский фруктовый эль',
    'Яблочный газированный полусухой',
    'Немецкий лагер',
    'Гёзе'
];
const creator = ['BrewDog', 'BrewDog', 'BrewDog'];
const country = ['Шотландия', 'Германия', 'Россия'];

const PhoneFilters = () => {
    const [isFilterTitle, setisFilterTitle] = useState('Фильтры');
    const [isFilters, setisFilters] = useState(true);
    const [isSizeFilters, setisSizeFilters] = useState(false);
    const [isStyleFilters, setisStyleFilters] = useState(false);
    const [isCreatorFilters, setisCreatorFilters] = useState(false);
    const [isCountryFilters, setisCountryFilters] = useState(false);
    const [isResultFilters, setisResultFilters] = useState(false);

    const [isOpenSize, setisOpenSize] = useState(false);
    const [isOpenStyle, setisOpenStyle] = useState(false);
    const [isOpenCreator, setisOpenCreator] = useState(false);
    const [isOpenCountry, setisOpenCountry] = useState(false);

    const toggleSize = () => setisOpenSize(!isOpenSize);
    const toggleStyle = () => setisOpenStyle(!isOpenStyle);
    const toggleCreator = () => setisOpenCreator(!isOpenCreator);
    const toggleCountry = () => setisOpenCountry(!isOpenCountry);

    const showFilters = (filter) => {
        if (filter === 'Стиль') {
            setisStyleFilters(true);
        }
        if (filter === 'Фасовка') {
            setisSizeFilters(true);
        }
        if (filter === 'Завод производитель') {
            setisCreatorFilters(true);
        }
        if (filter === 'Страна') {
            setisCountryFilters(true);
        }
        setisFilters(false);
        setisFilterTitle(filter);
    };

    const showResultFilters = () => {
        setisResultFilters(true);
        setisFilterTitle('Фильтры');
    };

    return (
        <div className="phoneFilters box-col">
            <b className="phoneFilters__title">{isFilterTitle}</b>
            {isFilters &&
                filters.map((filter, index) => (
                    <div
                        className="phoneFilters__filter box-row align-center space-between"
                        key={index}
                        onClick={() => showFilters(filter)}
                    >
                        {filter}
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 -1.04907e-06L7 5L12 -1.74846e-07L14 1L7 8L6.11959e-07 0.999999L2 -1.04907e-06Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                ))}
            {!isFilters && (
                <>
                    {!isResultFilters ? (
                        <div className="phoneFilters__list">
                            {isSizeFilters &&
                                size.map((label, index) => (
                                    <label className="phoneFilters__checkLabel box-row align-center" key={index}>
                                        <input type="checkbox" />
                                        <span className="phoneFilters__checkBox box-row align-middle">
                                            <svg
                                                width="12"
                                                height="8"
                                                viewBox="0 0 12 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.42847 3.99999L4.47609 7.04761L10.5713 0.952377"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        {label}
                                    </label>
                                ))}
                            {isStyleFilters &&
                                style.map((label, index) => (
                                    <label className="phoneFilters__checkLabel box-row align-center" key={index}>
                                        <input type="checkbox" />
                                        <span className="phoneFilters__checkBox box-row align-middle">
                                            <svg
                                                width="12"
                                                height="8"
                                                viewBox="0 0 12 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.42847 3.99999L4.47609 7.04761L10.5713 0.952377"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        {label}
                                    </label>
                                ))}
                            {isCreatorFilters &&
                                creator.map((label, index) => (
                                    <label className="phoneFilters__checkLabel box-row align-center" key={index}>
                                        <input type="checkbox" />
                                        <span className="phoneFilters__checkBox box-row align-middle">
                                            <svg
                                                width="12"
                                                height="8"
                                                viewBox="0 0 12 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.42847 3.99999L4.47609 7.04761L10.5713 0.952377"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        {label}
                                    </label>
                                ))}
                            {isCountryFilters &&
                                country.map((label, index) => (
                                    <label className="phoneFilters__checkLabel box-row align-center" key={index}>
                                        <input type="checkbox" />
                                        <span className="phoneFilters__checkBox box-row align-middle">
                                            <svg
                                                width="12"
                                                height="8"
                                                viewBox="0 0 12 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1.42847 3.99999L4.47609 7.04761L10.5713 0.952377"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        {label}
                                    </label>
                                ))}
                        </div>
                    ) : (
                        <div className="phoneFilters__list">
                            <div className="phoneFilters__filterCollapse">
                                <div
                                    className="phoneFilters__filterCollapseButton box-row align-center space-between"
                                    onClick={toggleStyle}
                                >
                                    {filters[0]}
                                    <svg
                                        style={{ transform: isOpenStyle && 'rotate(-180deg)' }}
                                        width="14"
                                        height="8"
                                        viewBox="0 0 14 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 -1.04907e-06L7 5L12 -1.74846e-07L14 1L7 8L6.11959e-07 0.999999L2 -1.04907e-06Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>
                                <Collapse
                                    className="phoneFilters__filterCollapseBody"
                                    isOpen={isOpenStyle}
                                    style={{ display: isOpenStyle && 'block' }}
                                >
                                    <div className="phoneFilters__checkedOption box-row align-center space-between">
                                        Американский Светлый Эль
                                        <div className="phoneFilters__checkedOption-remove box-row align-middle">
                                            <svg
                                                width="10"
                                                height="10"
                                                viewBox="0 0 10 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.66665 1.27334L8.72665 0.333344L4.99998 4.06001L1.27331 0.333344L0.333313 1.27334L4.05998 5.00001L0.333313 8.72668L1.27331 9.66668L4.99998 5.94001L8.72665 9.66668L9.66665 8.72668L5.93998 5.00001L9.66665 1.27334Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="phoneFilters__checkedOption box-row align-center space-between">
                                        Сидр яблоко полусухой
                                        <div className="phoneFilters__checkedOption-remove box-row align-middle">
                                            <svg
                                                width="10"
                                                height="10"
                                                viewBox="0 0 10 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.66665 1.27334L8.72665 0.333344L4.99998 4.06001L1.27331 0.333344L0.333313 1.27334L4.05998 5.00001L0.333313 8.72668L1.27331 9.66668L4.99998 5.94001L8.72665 9.66668L9.66665 8.72668L5.93998 5.00001L9.66665 1.27334Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                            <div className="phoneFilters__filterCollapse">
                                <div
                                    className="phoneFilters__filterCollapseButton box-row align-center space-between"
                                    onClick={toggleSize}
                                >
                                    {filters[1]}
                                    <svg
                                        style={{ transform: isOpenSize && 'rotate(-180deg)' }}
                                        width="14"
                                        height="8"
                                        viewBox="0 0 14 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 -1.04907e-06L7 5L12 -1.74846e-07L14 1L7 8L6.11959e-07 0.999999L2 -1.04907e-06Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>
                                <Collapse
                                    className="phoneFilters__filterCollapseBody"
                                    isOpen={isOpenSize}
                                    style={{ display: isOpenSize && 'block' }}
                                >
                                    <div className="phoneFilters__checkedOption box-row align-center space-between">
                                        0,3 л
                                        <div className="phoneFilters__checkedOption-remove box-row align-middle">
                                            <svg
                                                width="10"
                                                height="10"
                                                viewBox="0 0 10 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.66665 1.27334L8.72665 0.333344L4.99998 4.06001L1.27331 0.333344L0.333313 1.27334L4.05998 5.00001L0.333313 8.72668L1.27331 9.66668L4.99998 5.94001L8.72665 9.66668L9.66665 8.72668L5.93998 5.00001L9.66665 1.27334Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                            <div className="phoneFilters__filterCollapse">
                                <div
                                    className="phoneFilters__filterCollapseButton box-row align-center space-between"
                                    onClick={toggleCreator}
                                >
                                    {filters[2]}
                                    <svg
                                        style={{ transform: isOpenCreator && 'rotate(-180deg)' }}
                                        width="14"
                                        height="8"
                                        viewBox="0 0 14 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 -1.04907e-06L7 5L12 -1.74846e-07L14 1L7 8L6.11959e-07 0.999999L2 -1.04907e-06Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>
                                <Collapse
                                    className="phoneFilters__filterCollapseBody"
                                    isOpen={isOpenCreator}
                                    style={{ display: isOpenCreator && 'block' }}
                                ></Collapse>
                            </div>
                            <div className="phoneFilters__filterCollapse">
                                <div
                                    className="phoneFilters__filterCollapseButton box-row align-center space-between"
                                    onClick={toggleCountry}
                                >
                                    {filters[3]}
                                    <svg
                                        style={{ transform: isOpenCountry && 'rotate(-180deg)' }}
                                        width="14"
                                        height="8"
                                        viewBox="0 0 14 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2 -1.04907e-06L7 5L12 -1.74846e-07L14 1L7 8L6.11959e-07 0.999999L2 -1.04907e-06Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>
                                <Collapse
                                    className="phoneFilters__filterCollapseBody"
                                    isOpen={isOpenCountry}
                                    style={{ display: isOpenCountry && 'block' }}
                                >
                                    <div className="phoneFilters__checkedOption box-row align-center space-between">
                                        Россия
                                        <div className="phoneFilters__checkedOption-remove box-row align-middle">
                                            <svg
                                                width="10"
                                                height="10"
                                                viewBox="0 0 10 10"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.66665 1.27334L8.72665 0.333344L4.99998 4.06001L1.27331 0.333344L0.333313 1.27334L4.05998 5.00001L0.333313 8.72668L1.27331 9.66668L4.99998 5.94001L8.72665 9.66668L9.66665 8.72668L5.93998 5.00001L9.66665 1.27334Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    )}
                    <div className="phoneFilters__actions box-col">
                        <button className="green-button" onClick={showResultFilters}>
                            Применить
                        </button>
                        <button className="gray-button">Сбросить</button>
                    </div>
                </>
            )}
        </div>
    );
};
export default PhoneFilters;
