import React from 'react';
import classNames from 'classnames/bind';

import styles from './Story.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

const Story = ({ story }) => {
    return (
        <div className={cx('container')}>
            <div className={cx('image')}>
                {/* <Image className={cx('avatar')} src="../assets/images/avt_tron.jpg" alt="" /> */}
            </div>
            <p className={cx('nickname')}>tronnguyen{story}</p>
        </div>
    );
};

export default Story;
