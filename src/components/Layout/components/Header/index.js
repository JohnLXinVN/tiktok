
import classNames from 'classnames/bind';
import styles from './Header.module.scss'

const cx = classNames.bind(styles) //Lấy cx làm class giúp mk có thể đặt tên class name có dấu gạch ngang


function Header() {
    return (
        <header className={cx('wrapper')}>

        </header>
    );
}

export default Header;