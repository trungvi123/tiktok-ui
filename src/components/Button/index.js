import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button(
    { to, href, children, outline = false, text = false,
        primary = false, small = false, large = false, secondary = false,
        disabled = false, rounded,className,leftIcon,rightIcon,
        onClick , ...passprops 
    }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passprops
    };

    if (to) {
        Comp = Link;
        props.to = to;
    }else if (href) {
        Comp = 'a';
        props.href = href;
    }

    const classes = cx('wrapper',{
        [className] : className,
        primary,
        rounded,
        secondary,
        outline,
        small,
        large,
        leftIcon,
        rightIcon,
        text,
        disabled
    })
    return (  
        <Comp className = {classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('btn-content')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;