import React from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';

import styles from './Home.module.scss';
import './Home.scss';
import Story from '../../components/Story/Story';
import { NextArrow, PrevArrow } from '../../components/Arrow';
import Suggested from '../../components/Suggested/Suggested';
import Post from '../../components/Post/Post';

const cx = classNames.bind(styles);
const Home = () => {
    const settings = {
        speed: 500,
        slidesToShow: 5.5,
        slidesToScroll: 5,
        infinite: false,
        touchMove: false,
        nextArrow: <NextArrow slidesToShow={5.5} />,
        prevArrow: <PrevArrow />,
        initialSlide: 0,
    };
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('main-content')}>
                    <div className={cx('story')}>
                        <Slider {...settings} className={cx('slider')}>
                            <Story story={1} /> <Story story={2} /> <Story story={3} /> <Story story={4} />{' '}
                            <Story story={5} /> <Story story={6} /> <Story story={7} /> <Story story={8} />{' '}
                            <Story story={9} /> <Story story={10} /> <Story story={11} />
                            <Story story={9} /> <Story story={10} /> <Story story={11} />
                            <Story story={9} /> <Story story={10} /> <Story story={11} />
                            <Story story={9} /> <Story story={10} /> <Story story={11} />
                            <Story story={9} /> <Story story={10} /> <Story story={11} />
                        </Slider>
                    </div>
                    <div className={cx('posts')}>
                        <Post />
                    </div>
                </div>
                <div className={cx('suggestions')}>
                    <Suggested />
                </div>
            </div>
        </div>
    );
};

export default Home;
