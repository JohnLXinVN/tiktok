
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    small = false,
    large = false,
    primary = false,
    text = false,
    outline = false,
    rounded = false,
    children,
    passProps,
    disable,
    className,
    leftIcon,
    rightIcon,
    onClick
}) {

    let Comp = 'button'

    const props = {
        onClick,
        to,
        href,
        ...passProps
    }

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if (to) {
        props.to = to
        Comp = Link
    }
    else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        small,
        large,
        disable,
        rounded,

    }
    )

    return (

        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;