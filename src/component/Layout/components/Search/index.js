
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TippyHeadless from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useEffect, useState, useRef } from "react";


import { Wrapper as PopperWrapper } from "~/component/Popper";
import AccountItem from "~/component/AccountItem";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SearchBtn } from "~/component/icon";
import styles from './Search.module.scss'
import { useDebounced } from "~/hooks";

const cx = classNames.bind(styles)


function Search() {

    const [searchResults, setSearchResults] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [showSearchResults, setShowSearchResults] = useState(true)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()

    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
    }

    const debounced = useDebounced(searchValue, 500)

    useEffect(() => {

        if (!debounced) {
            setSearchResults([])
            return
        }

        setLoading(true)

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResults(res.data)
                setLoading(false)

            })
            .catch(() => setLoading(false))


    }, [debounced])

    return (
        <TippyHeadless
            visible={showSearchResults && searchResults.length > 0}
            interactive
            render={(attrs) => (

                <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResults.map((results) => (
                            <AccountItem key={results.id} data={results} />
                        ))}


                    </PopperWrapper>
                </div>
            )}
            onClickOutside={() => setShowSearchResults(false)}

        >

            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Tìm kiếm tài khoản hoặc video"
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowSearchResults(true)}
                />

                {!!searchValue && !loading &&
                    (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )
                }
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')} >
                    <SearchBtn />
                </button>

            </div>
        </TippyHeadless>
    );
}

export default Search;