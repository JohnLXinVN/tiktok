
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/36262a14448e5e38e9dd55d312908347~c5_100x100.jpeg?x-expires=1662555600&x-signature=ZqnjiIBwdEJ9mA6Ngx%2FF%2FVaJl8s%3D"
                alt="avatar"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    Phương Nhi
                    <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck} />
                </div>
                <h4>Nguyễn Phương Nhi</h4>
            </div>

        </div>
    );
}

export default AccountItem;