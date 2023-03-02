import React from 'react';
import classNames from 'classnames/bind';

import styles from './MediaPost.module.scss';
import { useState } from 'react';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

const MediaPost = ({ src, alt, className, ...passProps }, ref) => {
    const [Comp, setComp] = useState('img');
    return (
        <Comp
            className={cx('media-post', { [className]: className })}
            src={src}
            alt={alt}
            ref={ref}
            {...passProps}
            onError={() => {
                setComp(Comp === 'img' && 'video');
            }}
        />
    );
};

export default forwardRef(MediaPost);
