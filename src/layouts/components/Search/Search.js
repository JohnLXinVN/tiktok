
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
import * as searchServices from "~/services/searchServices"

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



    const debouncedValue = useDebounced(searchValue, 500)

    const handleChange = (e) => {
        const searchValue = e.target.value

        if (!searchValue.startsWith(" ")) {

            setSearchValue(searchValue)
        }

    }

    useEffect(() => {

        if (!debouncedValue) {
            setSearchResults([])
            return
        }

        setLoading(true)

        const fetchApi = async () => {
            setLoading(true)
            const results = await searchServices.search(debouncedValue)

            setSearchResults(results)
            setLoading(false)
        }

        fetchApi()




    }, [debouncedValue])

    return (
        <div>
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
                        onChange={handleChange}
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
                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                        <SearchBtn />
                    </button>

                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;