import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPlus,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Search from '../Search';
import routes from '~/config/routeConfig'

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'English',
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    title: 'English',
                    code: 'en',
                },
                {
                    type: 'Language',
                    title: 'Tieng-Viet',
                    code: 'vi',
                },
                {
                    type: 'Language',
                    title: 'Korea',
                    code: 'ko',
                },
                {
                    type: 'Language',
                    title: 'China',
                    code: 'zh',
                },
            ],
        },
    },
    {
        title: 'Feedback and help',
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        to: '/feedback',
    },
    {
        title: 'Keyboard shortcuts',
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    },
];

const MENU_ITEMS_USER = [
    {
        title: 'View profile',
        icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
        to: '@user',
    },
    {
        title: 'Get coins',
        icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
        to: '/coins',
    },
    {
        title: 'Settings',
        icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        title: 'Log out',
        icon: <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>,
        to: '/logout',
        boder_top: true,
    },
];

const handleOnchange = (item) => {
    console.log(item);
};

function Header() {
    const userLogin = true;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>
                {/* search */}
                <Search></Search>
                <div className={cx('actions')}>
                    <Button secondary leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}>
                        Upload
                    </Button>
                    {userLogin ? (
                        <>
                            <Tippy content="Messages" interactive offset={[0,2]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon width='2.6rem' height='2.6rem'></MessageIcon>
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" interactive offset={[0,-1]}>
                                <button className={cx('action-btn')}>
                                    <InboxIcon></InboxIcon>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu content={userLogin ? MENU_ITEMS_USER : MENU_ITEMS} onChange={handleOnchange}>
                        {userLogin ? (
                            <button className={cx('action-btn')}>
                                <img
                                    className={cx('header-avatar')}
                                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/d4ae664ec9cc2c9c9b99cd1bffe52b1d~c5_100x100.jpeg?x-expires=1655974800&x-signature=noPqwqpPxqlKaqs6VLvZzxCJWAQ%3D"
                                    alt="avatar"
                                />
                            </button>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
