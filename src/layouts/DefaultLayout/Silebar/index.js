
import className from "classnames/bind"
import styles from "./Sidebar.module.scss"

const cx = className.bind(styles)


function Sidebar() {

    return (
        <div className={cx('wrapper')}>
            <h1>Sidebar</h1>
        </div>
    );
}

export default Sidebar;