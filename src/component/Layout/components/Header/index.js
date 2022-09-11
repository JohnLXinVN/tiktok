import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faKeyboard, faCircleQuestion, faMagnifyingGlass, faSpinner, faEllipsisVertical, faEarthAsia, faCloudArrowUp, faMessage, faUser, faCoins, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import TippyHeadless from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';


import styles from "./Header.module.scss"
import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/component/Popper";
import AccountItem from "~/component/AccountItem";
import Button from "~/component/Button";
import Menu from "~/component/Popper/Menu";
import { icon } from "@fortawesome/fontawesome-svg-core";


const MENU_ITEMS = [
    {

        title: 'Languages',
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        children: {
            title: "Languages",
            data: [
                {
                    type: "language",
                    code: 'en',
                    title: 'English',
                },
                {
                    type: "language",
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ]
        }
    },
    {
        title: 'Feedback and helps',
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        to: '/abc'
    },
    {
        title: 'Keyboard shortcuts',
        icon: <FontAwesomeIcon icon={faKeyboard} />
    }
]




const cx = classNames.bind(styles)
const currentMenuLogin = true;
const USER_MENU = [
    {
        title: 'View profile',
        icon: <FontAwesomeIcon icon={faUser} />,
        to: '/anhhm'

    },
    {
        title: 'Get coins',
        icon: <FontAwesomeIcon icon={faCoins} />,
        to: '/coins'

    },
    {
        title: 'Settings',
        icon: <FontAwesomeIcon icon={faGear} />,
        to: '/settings'
    },
    ...MENU_ITEMS,
    {
        title: 'Log out',
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        to: '/logout',
        separate: true
    },

]

function Header() {

    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([])
        }, 0);
    }, [])

    const handleOnchange = (MenuItem) => {
        console.log(MenuItem)
    }

    return (
        <header className={cx('header')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>

                <TippyHeadless
                    visible={searchResults.length > 0}
                    interactive
                    render={(attrs) => (

                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}

                >

                    <div className={cx('search')}>
                        <input type="text" placeholder="Tìm kiếm tài khoản hoặc video" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')} >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>

                    </div>
                </TippyHeadless>
                <div className={cx('actions')}>
                    {currentMenuLogin ?
                        <>

                            <Tippy
                                content="Upload video..."
                                placement="bottom"

                            >

                                <button className={cx('upload-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>


                        </>
                        :
                        <>
                            <Button text >Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    }
                    <Menu
                        items={currentMenuLogin ? USER_MENU : MENU_ITEMS}
                        onChange={handleOnchange}
                    >
                        {currentMenuLogin ?

                            <img className={cx('avatar-login')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/36262a14448e5e38e9dd55d312908347~c5_100x100.jpeg?x-expires=1662555600&x-signature=ZqnjiIBwdEJ9mA6Ngx%2FF%2FVaJl8s%3D" alt="Đào Phương Hoa" />


                            :


                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        }


                    </Menu>



                </div>
            </div>
        </header>
    );
}

export default Header;