import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpider, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { IconSearch } from '../../../../components/Icon';
import Popper from '../../../../components/Popper';
import { useDebounce } from '../../../../hooks';
import * as searchServices from '../../../../service/searchService';
import Account from '../../../../components/Account';

const cx = classNames.bind(styles);

console.log(searchServices);
const Search = () => {
    const [focused, setFocused] = useState(false);
    const [loading, setLoading] = useState(false);
    const [valueSearch, setValueSearch] = useState('');
    const [valueResult, setValueResult] = useState([]);

    const debounced = useDebounce(valueSearch, 500);

    const handleChangeValueSearch = (e) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            setValueSearch(value);
            setLoading(!!value);
        }
    };

    useEffect(() => {
        if (!debounced.trim()) {
            setValueResult([]);
            return;
        }
        const fetchApi = async () => {
            const results = await searchServices.search(debounced);
            console.log(results);
            setValueResult(results);
            setLoading(false);
        };
        fetchApi();
    }, [debounced]);
    return (
        <HeadlessTippy
            visible={focused}
            interactive={true}
            placement="bottom-end"
            render={(attrs) => (
                <div
                    className={cx('results-search', {
                        hide: !focused,
                    })}
                    tabIndex="-1"
                    {...attrs}
                >
                    <Popper className={cx('popup-results-search')}>
                        <div className={cx('results')}>
                            {loading && !valueResult.length > 0 && (
                                <span className={cx('icon-loading-result')}>
                                    <FontAwesomeIcon icon={faSpinner} className={cx('icon-loading')} />
                                </span>
                            )}
                            {valueResult.length > 0 &&
                                valueResult.map((item) => <Account account={item} key={item.id} medium={true} />)}
                        </div>
                    </Popper>
                </div>
            )}
            onHide={(instance) => {
                setTimeout(() => instance.show(), 0);
                setTimeout(() => instance.disable(), 200);
            }}
            onClickOutside={() => {
                setFocused(false);
            }}
        >
            <div
                className={cx('search', {
                    isFocused: focused,
                })}
            >
                <div className={cx('btn-search')}>
                    <IconSearch width="1.6rem" height="1.6rem" />
                </div>
                <input
                    type="text"
                    placeholder="Search"
                    spellCheck={false}
                    className={cx('input-search')}
                    onFocus={() => setFocused(true)}
                    onChange={handleChangeValueSearch}
                />
                {!loading && (
                    <span onClick={() => setFocused(false)}>
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className={cx('btn-clear', {
                                isFocused: focused,
                            })}
                        />
                    </span>
                )}
                {loading && <FontAwesomeIcon icon={faSpinner} className={cx('icon-loading')} />}
            </div>
        </HeadlessTippy>
    );
};

export default Search;
