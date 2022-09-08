import Button from '~/components/Button';
import styles from './MenuItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItem({ data , onClick}) {
    const classes = cx('menu-item', {
        boder_top: data.boder_top
    });
    return (
        <Button className={classes} onClick={onClick} to={data.to} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
