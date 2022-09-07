import classNames from "classnames/bind";
import styles from './Menu.module.scss'
import Tippy from "@tippyjs/react/headless";
import { useState } from "react";


import { Wrapper as PopperWrapper } from "~/component/Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";


const cx = classNames.bind(styles)


function Menu({ children, items = [], onChange }) {
    const [history, setHistory] = useState([{ data: items }])

    const current = history[history.length - 1]

    const handleBack = () => {

        setHistory(prev => prev.slice(0, history.length - 1))

    }


    const RenderItem = () => {


        return current.data.map((item, index) => {
            const isParent = !!item.children

            return (
                <MenuItem key={index} data={item} onClick={() => {
                    if (isParent) {
                        setHistory(prev => [...prev, item.children])
                    }
                    else {
                        onChange(item)
                    }
                }} />

            )

        })
    }

    return (
        <Tippy
            visible
            interactive
            placement='bottom-end'
            render={(attrs) => (

                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title={current.title} onClick={handleBack} />}
                        {RenderItem()}
                    </PopperWrapper>
                </div>
            )}

        >
            {children}
        </Tippy>

    );
}

export default Menu