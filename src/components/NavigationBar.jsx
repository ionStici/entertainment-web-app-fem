import styles from './../styles/NavigationBar.module.scss';
import { NavLink, Link } from 'react-router-dom';
import { assets } from '../assets';
import currentUser from '../UserData';

const NavigationBar = function () {
    const user = currentUser[0];
    const name = user.fullName.split(' ')[0].toLowerCase();

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.wrapper}>
                    <Link className={styles.logo_link} to="/">
                        <img src={assets.logo} alt="logo" />
                    </Link>

                    <div className={styles.btns_wrapper}>
                        {/* prettier-ignore */}
                        <NavLink className={({ isActive }) => isActive ? `${styles.btn} ${styles.active}` : `${styles.btn}`} to="/">{assets.svgNavHome}</NavLink>
                        {/* prettier-ignore */}
                        <NavLink className={({ isActive }) => isActive ? `${styles.btn} ${styles.active}` : `${styles.btn}`} to="/movies">{assets.svgNavMovies}</NavLink>
                        {/* prettier-ignore */}
                        <NavLink className={({ isActive }) => isActive ? `${styles.btn} ${styles.active}` : `${styles.btn}`} to="/tvseries">{assets.svgNavTvSeries}</NavLink>
                        {/* prettier-ignore */}
                        <NavLink className={({ isActive }) => isActive ? `${styles.btn} ${styles.active}` : `${styles.btn}`} to="/bookmarks">{assets.svgNavBookmark}</NavLink>
                    </div>

                    <Link
                        className={styles.profile_btn}
                        to={`/profile/${name}`}
                    >
                        <img src={assets.imageAvatar} alt="User Image" />
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default NavigationBar;
