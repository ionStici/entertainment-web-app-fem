import styles from './../styles/NavigationBar.module.scss';
import { NavLink, Link } from 'react-router-dom';
import { assets } from '../assets';

const NavigationBar = function () {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.wrapper}>
                    <Link to="/">
                        <img
                            className={styles.logo}
                            src={assets.logo}
                            alt="logo"
                            width="25"
                            height="20"
                        />
                    </Link>

                    <div className={styles.btns_wrapper}>
                        {/* prettier-ignore */}
                        <NavLink className={({ isActive }) => isActive ? `${styles.btn} ${styles.active}` : `${styles.btn}`} to="/">{assets.svgNavHome}</NavLink>
                        {/* prettier-ignore */}
                        <NavLink className={({ isActive }) => isActive ? `${styles.btn} ${styles.active}` : `${styles.btn}`} to="/movies">{assets.svgNavMovies}</NavLink>
                        {/* prettier-ignore */}
                        <NavLink className={({ isActive }) => isActive ? `${styles.btn} ${styles.active}` : `${styles.btn}`} to="/tvseries">{assets.svgNavTvSeries}</NavLink>
                        {/* prettier-ignore */}
                        <NavLink className={({ isActive }) => isActive ? `${styles.btn} ${styles.active}` : `${styles.btn}`} to="bookmarks">{assets.svgNavBookmark}</NavLink>
                    </div>

                    <button className={styles.profile_btn}>
                        <img
                            className={styles.profile_img}
                            src={assets.imageAvatar}
                            alt="User Image"
                            width="24"
                            height="24"
                        />
                    </button>
                </div>
            </nav>
        </>
    );
};

export default NavigationBar;
