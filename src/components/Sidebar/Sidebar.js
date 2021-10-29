import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Context } from '../../context';

const Sidebar = () => {
    const { catalog } = useContext(Context);
    const search = useLocation().search;
    const currentCategoryId = new URLSearchParams(search).get('category');

    return (
        <aside className="catalog-sidebar">
            <div className="catalog-sidebar__title">
                <a href="/">Пиво</a>
            </div>
            <nav className="catalog-sidebar__nav box-col">
                {catalog.categories
                    ? catalog.categories.map((category, index) => (
                          <NavLink
                              key={category.id + '_' + index}
                              className="catalog-sidebar__link"
                              isActive={() => {
                                  return category.id === +currentCategoryId;
                              }}
                              to={'/?category=' + category.id}
                          >
                              {category.name}
                          </NavLink>
                      ))
                    : ''}
            </nav>
        </aside>
    );
};
export default Sidebar;
