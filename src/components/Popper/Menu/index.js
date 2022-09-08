import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from '../MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
const defaultFn = ()=>{}
function Menu({ children, content = [] , onChange = defaultFn}) {
    const [currentMenu, setCurrentMenu] = useState([{ data: content }]);
    const current = currentMenu[currentMenu.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = item.children;
            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            setCurrentMenu([...currentMenu, item.children]);
                        }else {
                            onChange(item)
                        }
                    }}
                ></MenuItem>
            );
        });
    };

    const handleOnchange = (item)=> {
        console.log(item);
    }

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[-80, 0]}
            hideOnClick={false}
            onHidden = {()=> {
                setCurrentMenu(currentMenu.slice(0, 1));
            }}
            // visible
            render={(props) => (
                <div tabIndex="-1" {...props} className={cx('menu-list')}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {currentMenu.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setCurrentMenu(currentMenu.slice(0, currentMenu.length - 1));
                                }}
                            ></Header>
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
