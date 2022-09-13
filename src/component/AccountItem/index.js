
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import Image from "../Image";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";


const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar}
                alt="avatar"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    {data.full_name}
                    {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCircleCheck} />}
                </div>
                <h4>{data.nickname}</h4>
            </div>

        </Link>
    );
}

export default AccountItem;