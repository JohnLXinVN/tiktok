
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles)

function Button({ to, href, onClick, large = false, small = false, primary = false, outline = false, text = false, disable = false, rounded, children, ...passProps }) {

    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    }

    if (disable) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] == 'function') {
                delete props[key]
            }
        })
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }


    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded
    })

    return (

        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>

    );
}

export default Button;