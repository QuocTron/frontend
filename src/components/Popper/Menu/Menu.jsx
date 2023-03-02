import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';

import Popper from '../Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], openPopper, hideOnClick = false, onChange = defaultFn }) {
    console.log(items);
    const renderItem = () => {
        return items.map((item, index) => {
            return <MenuItem data={item} key={index} onClick={() => {}} />;
        });
    };
    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <Popper className={cx('menu-popper')}>
                <div className={cx('menu-body')}> {renderItem()}</div>
            </Popper>
        </div>
    );
    return (
        <HeadlessTippy
            visible={openPopper}
            interactive={true}
            animation={true}
            delay={[2000, 700]}
            duration={1000}
            hideOnClick={false}
            placement="bottom-end"
            render={renderResult}
            onHide={(instance) => {
                console.log('hide');
                requestAnimationFrame(instance.unmount);
            }}
        >
            {children}
        </HeadlessTippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
