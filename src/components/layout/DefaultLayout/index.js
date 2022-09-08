import { Footer,SideBar,Header } from '~/components/layout/components/';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <SideBar/>
                <div className={cx('content')}>
                   {children} 
                </div>
                
            </div>
            <Footer/>
        </div>
    );
}

export default DefaultLayout;