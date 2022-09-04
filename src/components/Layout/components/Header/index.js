import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEarthAsia, faEllipsisVertical, faKeyboard, faLongArrowDown, faMagnifyingGlass, faQuestionCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';


import images from '~/assets/images'
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';


const cx = classNames.bind(styles) //Lấy cx làm class giúp mk có thể đặt tên class name có dấu gạch ngang


function Header() {

    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    const MENU_ITEMS = [
        {
            title: 'English',
            icon: <FontAwesomeIcon icon={faEarthAsia} />
        },
        {
            title: 'Feedback and help',
            icon: <FontAwesomeIcon icon={faQuestionCircle} />,
            to: '/feedback'
        },
        {
            title: 'English',
            icon: <FontAwesomeIcon icon={faKeyboard} />
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header-logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-label')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}

                >

                    <div className={cx('search')}>
                        <input type="text" placeholder="Search accounts and videos" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />


                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>


                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button text >Upload</Button>
                    <Button primary  >Log in</Button>
                    <Menu
                        items={MENU_ITEMS}
                    >
                        <button className={cx('more-icon')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;