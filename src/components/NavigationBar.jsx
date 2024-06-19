import { ReactSVG } from 'react-svg';
import { useMovies } from '../contexts/MoviesContext';
import styles from './../styles/Navigation.module.scss';
import { NavLink, Link } from 'react-router-dom';

const NavigationBar = function () {
  const { icons } = useMovies();
  const { iconHome, iconMovies, iconSeries, iconBookmark, logo, user } = icons;

  const pages = [
    { page: '/', icon: iconHome },
    { page: '/movies', icon: iconMovies },
    { page: '/series', icon: iconSeries },
    { page: '/bookmarks', icon: iconBookmark },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <Link className={styles.logo_link} to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className={styles.btns_wrapper}>
          {pages.map(({ page, icon }) => {
            return (
              // prettier-ignore
              <NavLink to={page} key={page} className={({ isActive }) => isActive ? `${styles.btn} ${styles.active}` : `${styles.btn}`} >
                <ReactSVG src={icon} />
              </NavLink>
            );
          })}
        </div>

        <Link className={styles.profile_btn} to="/">
          <img src={user} alt="User Image" />
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
