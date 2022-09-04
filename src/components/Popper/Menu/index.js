import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper'

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {

    const RENDER_ITEM = () => {
        return (
            items.map((item, index) => (
                <MenuItem key={index} data={item} />
            ))
        )
    }

    return (
        <Tippy
            interactive
            visible
            placement='top-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {RENDER_ITEM()}
                    </PopperWrapper>
                </div>
            )}

        >

            {children}
        </Tippy>
    );
}

export default Menu;
