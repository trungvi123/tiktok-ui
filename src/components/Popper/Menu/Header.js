import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header({title , onBack}) {
    return ( 
        <header className={cx('header-menu')}>
            <button onClick={onBack} className={cx('back-btn')}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
     );
}

export default Header;