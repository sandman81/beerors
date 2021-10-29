import { useState, useEffect } from 'react';
import MiniCart from '../MiniCart/MiniCart';

const Header = () => {
    const [isPhoneView, setisisPhoneView] = useState(false);

    const showPhoneView = () => {
        window.matchMedia('(max-width: 767px)').matches ? setisisPhoneView(true) : setisisPhoneView(false);
    };

    useEffect(() => {
        showPhoneView();

        window.addEventListener('resize', () => {
            showPhoneView();
        });
    });

    return (
        <header className="layout-header full-width">
            <div className="content-center">
                <div className="layout-header__banner box-row align-center space-end">
                    {isPhoneView && <MiniCart />}
                </div>
            </div>
        </header>
    );
};
export default Header;
