import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";


import styles from "./Header.module.scss"
import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/component/Popper";
import AccountItem from "~/component/AccountItem";
import Button from "~/component/Button";




const cx = classNames.bind(styles)

function Header() {

    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([])
        }, 0);
    }, [])

    return (
        <header className={cx('header')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>

                <Tippy
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
                </Tippy>
                <div className={cx('actions')}>
                    <Button text >Upload</Button>
                    <Button primary>Login</Button>



                </div>
            </div>
        </header>
    );
}

export default Header;