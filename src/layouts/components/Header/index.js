import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard, faCircleQuestion, faEllipsisVertical, faEarthAsia, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import { Link } from "react-router-dom";


import styles from "./Header.module.scss"
import images from "~/assets/images";
import Button from "~/component/Button";
import Menu from "~/component/Popper/Menu";
import Image from "~/component/Image";
import { CoinIcon, InBoxIcon, MessagesIcon, SettingIcon, UserIcon } from "~/component/icon";
import Search from "../Search";
import configRoutes from "~/config/routes";


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
        icon: <UserIcon />,
        to: '/anhhm'

    },
    {
        title: 'Get coins',
        icon: <CoinIcon />,
        to: '/coins'

    },
    {
        title: 'Settings',
        icon: <SettingIcon />,
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



    const handleOnchange = (MenuItem) => {
        console.log(MenuItem)
    }

    return (
        <header className={cx('header')}>
            <div className={cx('inner')}>
                <Link to={configRoutes.home}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="logo" />
                    </div>
                </Link>
                <Search />

                <div className={cx('actions')}>
                    {currentMenuLogin ?
                        <>


                            <Tippy
                                content="Messages"
                                placement="bottom"

                            >

                                <button className={cx('action-btn')}>
                                    <MessagesIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                content="Messages"
                                placement="bottom"

                            >

                                <button className={cx('action-btn', 'inbox-btn')}>
                                    <InBoxIcon />
                                    <span className={cx('badge')}>12</span>
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

                            <Image
                                className={cx('avatar-login')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/36262a14448e5e38e9dd55d312908347~c5_100x100.jpeg?x-expires=1662555600&x-signature=ZqnjiIBwdEJ9mA6Ngx%2FF%2FVaJl8s%3D"
                                alt="Đào Phương Hoa"
                                fallBack='https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png' //mong muốn khi ảnh lỗi thì lấy cái fallbacl này là ảnh lỗi ==> mục đích tái sử dụng

                            />


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