import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import styles from './Suggested.module.scss';
import Account from '../Account';

const cx = classNames.bind(styles);

const Suggested = () => {
    const account = {
        avatar: 'https://instagram.fsgn2-3.fna.fbcdn.net/v/t51.2885-19/292206587_140922395215616_5982529355247747229_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsgn2-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=n-qWo9qbw1UAX_uzbxB&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT_0Zfm29ZAWMyeuHPgkLlGXElxX1I7CK31i-lJVV9cKUg&oe=6315B79D&_nc_sid=8fd12b',
        full_name: 'tron_nguyen',
        nickname: 'Nguyễn Quốc Trọn',
    };
    const links = [
        {
            id: uuidv4(),
            title: 'About',
            to: 'https://about.instagram.com/',
        },
        {
            id: uuidv4(),

            title: 'Help',
            to: 'https://help.instagram.com/',
        },
        {
            id: uuidv4(),

            title: 'Press',
            to: 'https://about.instagram.com/en_US/blog',
        },
        {
            id: uuidv4(),

            title: 'API',
            to: 'https://developers.facebook.com/docs/instagram',
        },
        {
            id: uuidv4(),

            title: 'Jobs',
            to: 'https://about.instagram.com/about-us/careers',
        },
        {
            id: uuidv4(),

            title: 'Privacy',
            to: 'https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect',
        },
        {
            id: uuidv4(),

            title: 'Terms',

            to: 'https://help.instagram.com/581066165581870',
        },
        {
            id: uuidv4(),

            title: 'Language',
            to: '',
        },
    ];
    return (
        <div className={cx('container')}>
            <div className={cx('user-account')}>
                <Account account={account} large hover={false} story={false} />
            </div>

            <div className={cx('line-suggestions')}>
                <p className={cx('title-suggestions')}>Suggestions For You</p>{' '}
                <Link to={''} className={cx('see-all')}>
                    See All
                </Link>
            </div>
            <div className={cx('accounts-suggested')}>
                <Account account={account} className={cx('account')} small hover={false} story={false} />
                <Account account={account} className={cx('account')} small hover={false} story={false} />
                <Account account={account} className={cx('account')} small hover={false} story={false} />
                <Account account={account} className={cx('account')} small hover={false} story={false} />
                <Account account={account} className={cx('account')} small hover={false} story={false} />
            </div>
            <div className={cx('more-links')}>
                <Link className={cx('link-other')} to={''}>
                    About
                </Link>
                <Link className={cx('link-other')} to={''}>
                    Help
                </Link>
                <Link className={cx('link-other')} to={''}>
                    Press
                </Link>
                <Link className={cx('link-other')} to={''}>
                    API
                </Link>
                <Link className={cx('link-other')} to={''}>
                    Jobs
                </Link>
                <Link className={cx('link-other')} to={''}>
                    Privacy
                </Link>
                <Link className={cx('link-other')} to={''}>
                    Terms
                </Link>
                <Link className={cx('link-other')} to={''}>
                    Locations
                </Link>
                <Link className={cx('link-other')} to={''}>
                    Language
                </Link>
            </div>
            <p className={cx('info-company')}>© 2022 INSTAGRAM FROM META</p>
        </div>
    );
};

export default Suggested;
