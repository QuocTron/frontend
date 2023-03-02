import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

import styles from './Post.module.scss';
import Account from '../Account';
import {
    IconComment,
    IconCommentHover,
    IconHeart,
    IconHeartHover,
    IconLikeComment,
    IconLikeCommentHover,
    IconLikedPost,
    IconSavePost,
    IconSavePostHover,
    IconSharePost,
    IconSharePostHover,
    IconSmileFace,
    IconThreeDot,
} from '../Icon/Icon';
import { NextArrow, PrevArrow } from '../Arrow';
import Button from '../Button';
import MediaPost from './MediaPost';

import Popup from '../Popup';

const cx = classNames.bind(styles);

const Post = () => {
    const account = {
        full_name: 'Nguyễn Quốc Trọn',
        nickname: 'tete_sapam',
        avatar: 'https://instagram.fsgn2-3.fna.fbcdn.net/v/t51.2885-19/292206587_140922395215616_5982529355247747229_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsgn2-3.fna.fbcdn.net&_nc_cat=108&_nc_ohc=n-qWo9qbw1UAX98ARVm&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9m4yBrmpn70hJZ_BCuvdSsawNoTuOFTyCAQvhF2LhTWA&oe=6315B79D&_nc_sid=8fd12b',
    };
    const refMedia = useRef();
    const accountsTagged = ['imechuplog'];
    const like = 3205;
    const imagesPosted = [
        'https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/305851688_1410124766192170_6247718476813417532_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=NLBjuqUOFp0AX8MLIEm&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT9f4pVzEZchQlNYEOoWZnKklRqfz3kTRY6ctpZygRDirA&oe=6323E02A',
        'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/305205667_1412276785976968_7700371388274473933_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=bwPouk00tlgAX80Ixkj&tn=BzZ68jSqE8IEQ5ph&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT-yHvAIp5tfVf2QYr4zfn-6Cn3lkK-Q_zMWohbMsVQBYQ&oe=63235FB8',
        // '/static/media/videotiktok.a0471c362a32a7b9374e.mp4',
        'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/305848345_1410838082787505_9066128840414018397_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=VbFTOdIQ9_QAX9V9eVK&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT8HeJYtAkEv_qWqFEAVlpdsbl3z6RqL-BKPrOr8zIN3QA&oe=6322CFA0',
    ];
    const date = '2022-07-17T04:54:21.474+00:00';
    const comments = [
        {
            account: 'xuyeen.oi',
            content: 'Đuu doanh nhân',
            reply: '',
            likes: [],
        },
        {
            account: 'tgd.duu',
            content: 'hahaa giả dạng doanh nhân một b',
            reply: 'xuyeen.oi',
            likes: [],
        },
    ];

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow slidesToShow={1} />,
        prevArrow: <PrevArrow />,
        appendDots: (dots) => {
            return (
                <div>
                    <ul style={{ margin: '0px' }}> {dots} </ul>
                </div>
            );
        },
    };
    const [likePost, setLikePost] = useState(false);

    // function isImage(url) {
    //     return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    // }
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('account')}>
                    <Account account={account} small showFullName={false} hover={false} story={true} />
                    <IconThreeDot className={cx('icon-menu-post')} />
                </div>
                <div className={cx('images-posted')}>
                    <Slider {...settings}>
                        {imagesPosted.map((media, index) => (
                            <MediaPost ref={refMedia} src={media} progress autoPlay controls loop muted key={index} />
                        ))}
                    </Slider>

                    <div className={cx('actions')}>
                        <div className={cx('left')}>
                            <div className={cx('action-like', 'action')} onClick={() => setLikePost(!likePost)}>
                                <IconHeartHover className={cx('icon-hover')} />
                                <IconHeart className={cx('icon')} />
                                {likePost && <IconLikedPost className={cx('icon-liked', 'icon')} />}
                            </div>
                            <Popup
                                trigger={
                                    <div className={cx('action-comment', 'action')}>
                                        <IconCommentHover className={cx('icon-hover')} />
                                        <IconComment className={cx('icon')} />
                                    </div>
                                }
                                className={cx('popup-comment')}
                            >
                                {(close) => (
                                    <div className={cx('container-popup')}>
                                        <div className={cx('popup-media')}>
                                            <Slider
                                                {...settings}
                                                className={cx('popup-media-slider')}
                                                style={{ width: '100%' }}
                                            >
                                                {imagesPosted.map((media, index) => (
                                                    <MediaPost
                                                        src={media}
                                                        progress
                                                        autoPlay
                                                        controls
                                                        loop
                                                        muted
                                                        key={index}
                                                    />
                                                ))}
                                            </Slider>
                                        </div>
                                        <div className={cx('popup-comment')}></div>
                                    </div>
                                )}
                            </Popup>

                            <div className={cx('action-like', 'action')}>
                                <IconSharePostHover className={cx('icon-hover')} />
                                <IconSharePost className={cx('icon')} />
                            </div>
                        </div>

                        <div className={cx('right')}>
                            <div className={cx('action-like', 'action')}>
                                <IconSavePostHover className={cx('icon-hover')} />
                                <IconSavePost className={cx('icon')} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('info-post')}>
                    <div className={cx('likes')}>
                        <span className={cx('count-like')}>{like} likes</span>
                    </div>
                    <div className={cx('content-post')}>
                        <span className={cx('nickname-account')}>{account.nickname}</span>
                        <p className={cx('content')}> MUJI gơ phiên bản hơi thái độ một xút 🥲🥲🥲</p>
                        {accountsTagged.length > 0 &&
                            accountsTagged.map((account) => (
                                <Link to={''} className={cx('link-account-tag')}>
                                    &#35;{account}
                                </Link>
                            ))}
                    </div>
                    <div className={cx('comments')}>
                        <span className={cx('comment-count')}>
                            {comments.length > 0
                                ? `View all ${comments.length} comments`
                                : `No comment are not be the first comment`}
                        </span>
                        {comments.map(
                            (comment, index) =>
                                index < 2 && (
                                    <div className={cx('comment')}>
                                        <div className={cx('comment-content')}>
                                            <span className={cx('nickname-account')}>{comment.account}</span>{' '}
                                            {comment.reply && (
                                                <Link to={''} className={cx('link-account-tag')}>
                                                    &#64;{comment.reply}{' '}
                                                </Link>
                                            )}
                                            <p className={cx('content')}>{comment.content}</p>
                                        </div>
                                        <div className={cx('action-like', 'action')}>
                                            <IconLikeCommentHover className={cx('icon-hover')} />
                                            <IconLikeComment className={cx('icon')} />
                                        </div>
                                    </div>
                                ),
                        )}
                    </div>
                    <span className={cx('time')}>{format(date)}</span>
                </div>
                <form className={cx('add-comment')}>
                    <Button className={cx('btn-emotions')}>
                        <IconSmileFace />
                    </Button>
                    <div className={cx('input-comment')}>
                        <input type="text" placeholder="Add a comment..." />
                    </div>
                    <Button className={cx('btn-post')} disabled>
                        Post
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Post;
