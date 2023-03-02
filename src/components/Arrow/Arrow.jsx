import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import styles from './Arrow.module.scss';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

export const NextArrow = (props) => {
    const { style, onClick, currentSlide, slideCount, slidesToShow } = props;

    return (
        <div
            className={cx('arrow', 'arrow-next', { hide: slideCount - currentSlide <= slidesToShow })}
            style={{ ...style }}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faArrowAltCircleRight} className={cx('icon-arrow')} />
        </div>
    );
};
export const PrevArrow = (props) => {
    const { style, onClick, currentSlide, slideCount } = props;

    return (
        <div className={cx('arrow', 'arrow-prev', { hide: currentSlide === 0 })} style={{ ...style }} onClick={onClick}>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} className={cx('icon-arrow')} />
        </div>
    );
};
