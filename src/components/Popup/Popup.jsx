import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Popup.module.scss';
import { useRef, forwardRef, useImperativeHandle } from 'react';

const cx = classnames.bind(styles);

const Popup = forwardRef(
    (
        {
            animation,
            closeOnDocumentClick = true,
            children,
            position,
            width,
            height,
            onOpen,
            onClose,
            onToggle,
            trigger,
            className,
            ...passProps
        },
        ref,
    ) => {
        const popupRef = useRef();
        const [open, setOpen] = useState(false);
        const [close, setClose] = useState(false);
        let triggerCustom;

        const closePopup = () => {
            setClose(true);
            if (onClose) onClose();
            setTimeout(() => {
                setClose(false);
                setOpen(false);
            }, 600);
        };

        useImperativeHandle(ref, () => ({
            open() {
                if (onOpen) {
                    onOpen();
                }
                setOpen(true);
            },
            close() {
                if (onClose) {
                    onClose();
                }
                closePopup();
            },
            toggle() {
                if (onToggle) {
                    onToggle();
                }
            },
        }));
        triggerCustom = {
            ...trigger,
            props: {
                ...trigger.props,
                onClick: () => {
                    setOpen(true);
                    if (onOpen) onOpen();
                },
            },
        };

        switch (position) {
            case 'center':
                position = 'center';
                break;
            case 'right':
                position = 'right';

                break;
            case 'left':
                position = 'left';

                break;
            case 'top':
                position = 'top';
                break;
            case 'bottom':
                position = 'bottom';
                break;

            default:
                position = '';
        }
        const classesContent = cx('content', {
            [className]: className,
            [position]: position,
            close,
        });
        const classesContainer = cx('container', {
            close,
        });

        const props = { ...passProps };

        return (
            <>
                {open && (
                    <>
                        <div
                            className={classesContainer}
                            ref={popupRef}
                            id="popup-container"
                            {...props}
                            onClick={(e) => {
                                closeOnDocumentClick && e.target.id === 'popup-container' && closePopup();
                            }}
                        >
                            <div
                                className={classesContent}
                                style={{
                                    height: height || '',

                                    width: width || '',
                                }}
                            >
                                {typeof children === 'function' ? children(() => closePopup()) : children}
                            </div>
                        </div>
                    </>
                )}
                {triggerCustom}
            </>
        );
    },
);
Popup.propTypes = {
    animation: PropTypes.string,
    closeOnDocumentClick: PropTypes.bool,
    children: PropTypes.func,
    position: PropTypes.string,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onToggle: PropTypes.func,
    className: PropTypes.string,
    trigger: PropTypes.node.isRequired,
};
export default Popup;
