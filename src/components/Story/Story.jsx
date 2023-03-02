import React from 'react';
import classNames from 'classnames/bind';

import styles from './Story.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

const Story = ({ story }) => {
    return (
        <div className={cx('container')}>
            <div className={cx('image')}>
                <Image
                    className={cx('avatar')}
                    src="https://instagram.fsgn2-3.fna.fbcdn.net/v/t51.2885-19/292206587_140922395215616_5982529355247747229_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsgn2-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=NC53qmMkkLAAX_fc6xs&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT95OKwiarShBW8frP_jmOVXI033Z9x4D9Ehmt1ZW3TeGA&oe=6313BD5D&_nc_sid=8fd12b"
                    alt=""
                />
            </div>
            <p className={cx('nickname')}>tronnguyen{story}</p>
        </div>
    );
};

export default Story;
