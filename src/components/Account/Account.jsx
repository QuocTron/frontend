import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Account.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

const Account = ({
    account,
    small = false,
    large = false,
    medium = false,
    story = true,
    onClick,
    to,
    hover = true,
    showFullName = true,
    ...passProps
}) => {
    console.log();
    let Comp = 'div';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    }
    const classes = cx('container', {
        small,
        large,
        medium,
        hover,
    });
    return (
        <Comp className={classes}>
            <div className={cx('content')}>
                <div className={cx('image-wrapper', { story })}>
                    <Image className={cx('image-avt')} src={account?.avatar} alt={account?.full_name} />
                </div>
                <div className={cx('info-account')}>
                    <span className={cx('username')}>{account?.nickname}</span>
                    <span className={cx('display-name')}>{showFullName && account?.full_name}</span>
                </div>
            </div>
        </Comp>
    );
};

export default Account;
