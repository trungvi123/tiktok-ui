import { createContext } from "react";
import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function SideBar() {
    return ( 
        <div className={cx('wrapper')}>
            sidebar
        </div>
    );
}

export default SideBar;