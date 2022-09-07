

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";


import classNames from "classnames/bind";
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function Header({ title, onClick }) {
    return (
        <div className={cx('header')}>
            <div className={cx('icon')} onClick={onClick}>
                <FontAwesomeIcon icon={faAngleLeft} />

            </div>
            <h3 className={cx('title')}>{title}</h3>
        </div>
    );
}

export default Header;