import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { useDebounced } from '~/Hooks';
import * as searchServices from '~/apiServices/searchServices';
const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    const handleClickOutSide = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const value = e.target.value
        if(!value.startsWith(' ')){
            setSearchValue(value);
        }
    }

    const debouncedValue = useDebounced(searchValue, 800);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.searchApi(debouncedValue, 'less');
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debouncedValue]);

    return (
        // add <div> handle warning tippy
        <div>
            <TippyHeadless
                interactive
                visible={showResult && searchResult.length > 0}
                onClickOutside={handleClickOutSide}
                render={(props) => (
                    <div tabIndex="-1" {...props} className={cx('search-result')}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => {
                                return <AccountItem key={result.id} data={result}></AccountItem>;
                            })}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        placeholder="Search accounts and videos"
                        value={searchValue}
                        spellCheck={false}
                        onFocus={() => setShowResult(true)}
                        onChange={handleChange}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear-btn')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>}
                    <button className={cx('search-btn')} onMouseDown={(e)=>e.preventDefault()}>
                        <SearchIcon width="2.4rem" height="2.4rem"></SearchIcon>
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;
