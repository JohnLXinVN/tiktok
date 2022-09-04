import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {
    const renderItem = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />)
        )


    }

    return (
        <Tippy
            delay={[200, 400]}
            interactive
            placement='top-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}

        >

            {children}
        </Tippy>
    );
}

export default Menu;