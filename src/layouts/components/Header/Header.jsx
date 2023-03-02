import React, { useState } from 'react';
import className from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/animations/scale.css';

import config from '../../../config';
import {
    IconArrowDown,
    IconHome,
    IconCompass,
    IconHeart,
    IconMessage,
    IconUpload,
    LogoInstagram,
    IconMessageActive,
    IconHomeActive,
    IconUploadActive,
    IconCompassActive,
    IconHeartActive,
    IconUser,
    IconSync,
    IconSetting,
    IconSave,
    IconUploadMedia,
} from '../../../components/Icon';
import styles from './Header.module.scss';
import Image from '../../../components/Image';
import Popper from '../../../components/Popper';
import MenuItem from '../../../components/Popper/Menu/MenuItem';
import Search from './Search';
import Popup from '../../../components/Popup';
import Button from '../../../components/Button';

const cx = className.bind(styles);

const Header = () => {
    const [menuSelected, setMenuSelected] = useState(0);

    const actionIcons = [
        {
            id: uuidv4(),
            Icon: IconHome,
            IconActive: IconHomeActive,
            path: config.routes.home,
        },
        {
            id: uuidv4(),
            Icon: IconMessage,
            IconActive: IconMessageActive,
            path: config.routes.conversations,
        },
        {
            id: uuidv4(),
            Icon: IconUpload,
            IconActive: IconUploadActive,
            popup: true,
            path: null,
        },
        {
            id: uuidv4(),
            Icon: IconCompass,
            IconActive: IconCompassActive,
            path: config.routes.explore,
        },
        {
            id: uuidv4(),
            Icon: IconHeart,
            IconActive: IconHeartActive,
            path: null,
        },
    ];

    const menuItems = [
        {
            id: uuidv4(),
            icon: <IconUser />,
            title: 'Profile',
            to: config.routes.profile,
        },
        {
            id: uuidv4(),
            icon: <IconSave />,
            title: 'Saved',
            to: config.routes.saved,
        },
        {
            id: uuidv4(),
            icon: <IconSetting />,
            title: 'Settings',
            to: config.routes.edit,
        },
        {
            id: uuidv4(),
            icon: <IconSync />,
            title: 'Switch accounts',
            to: null,
        },
        {
            id: uuidv4(),
            icon: null,
            title: 'Logout',
            to: config.routes.profile,
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <LogoInstagram />
                        <IconArrowDown className={cx('logo-arrow-down')} />
                    </Link>
                </div>
                <Search />

                <div className={cx('actions')}>
                    {actionIcons.map((item, index) => {
                        const Icon = item.Icon;
                        const IconActive = item.IconActive;

                        return item.path ? (
                            <NavLink
                                key={item.id}
                                to={item.path}
                                onClick={() => setMenuSelected(0)}
                                className={(nav) => cx('action-item', { active: nav.isActive && !menuSelected })}
                            >
                                {' '}
                                <Icon className={cx('icon')} />
                                <IconActive className={cx('icon-active')} />
                            </NavLink>
                        ) : item.popup ? (
                            <Popup
                                key={item.id}
                                trigger={
                                    <div className={cx('action-item', { active: index === menuSelected })}>
                                        {' '}
                                        <Icon className={cx('icon')} />
                                        <IconActive className={cx('icon-active')} />
                                    </div>
                                }
                                className={cx('popup-upload')}
                                onClose={() => setMenuSelected(0)}
                                onOpen={() => setMenuSelected(index)}
                            >
                                {(close) => (
                                    <div className={cx('container-popup')}>
                                        <span onClick={close} className={cx('popup-close')}>
                                            &times;
                                        </span>
                                        <div className={cx('title-popup')}>Create new post</div>
                                        <div className={cx('content-popup')}>
                                            <div className={cx('icon-popup')}>
                                                <IconUploadMedia />
                                            </div>
                                            <span className={cx('description')}>Drag photos and videos here</span>
                                            <Button className={cx('btn-upload-computer')}>Select from computer</Button>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        ) : (
                            <div
                                key={item.id}
                                className={cx('action-item', { active: index === menuSelected })}
                                onClick={() => {
                                    setMenuSelected(index);
                                }}
                            >
                                {' '}
                                <Icon className={cx('icon')} />
                                <IconActive className={cx('icon-active')} />
                            </div>
                        );
                    })}

                    <HeadlessTippy
                        visible={actionIcons.length + 1 === menuSelected}
                        interactive={true}
                        placement="bottom-end"
                        render={(attrs) => (
                            <div
                                className={cx('menu-list', {
                                    hide: actionIcons.length + 1 !== menuSelected,
                                })}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <Popper className={cx('menu-popper')}>
                                    <div className={cx('menu-body')}>
                                        {menuItems.map((item) => (
                                            <MenuItem data={item} key={item.id} onClick={() => {}} />
                                        ))}
                                    </div>
                                </Popper>
                            </div>
                        )}
                        onHide={(instance) => {
                            setTimeout(() => instance.show(), 0);
                            setTimeout(() => instance.disable(), 200);
                        }}
                        onClickOutside={() => {
                            setMenuSelected(0);
                        }}
                    >
                        <Image
                            className={cx('avatar', { active: actionIcons.length + 1 === menuSelected })}
                            onClick={() =>
                                setMenuSelected((prev) =>
                                    actionIcons.length + 1 === prev ? 0 : actionIcons.length + 1,
                                )
                            }
                            src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/292669746_2201903946644853_4420143477729832900_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=at4fxzgXbkAAX9eme7O&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT9iRYH9xp7_Iv09WxHGakQtNAqCOsIUgvgt_Gv6SsZ8Aw&oe=630552F2"
                            alt=""
                        />
                    </HeadlessTippy>
                </div>
            </div>
        </div>
    );
};

export default Header;
