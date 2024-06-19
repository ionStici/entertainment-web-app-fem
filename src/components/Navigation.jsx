import styles from './../styles/Navigation.module.scss';
import { NavLink, Link } from 'react-router-dom';
import { assets } from '../assets';
import { usePage } from '../PageContext';
import { ReactSVG } from 'react-svg';

const logo = 'assets/logo.svg';
const userImage = 'assets/image-avatar.png';

const iconHome = 'assets/icon-nav-home.svg';
const iconMovies = 'assets/icon-nav-movies.svg';
const iconSeries = 'assets/icon-nav-tv-series.svg';
const iconBookmark = 'assets/icon-nav-bookmark.svg';
const icons = [iconHome, iconMovies, iconSeries, iconBookmark];

const NavigationBar = function () {
  const { currentPage, pages, goHome } = usePage();

  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <button className={styles.logo_link} aria-label="Home" onClick={goHome}>
          <img src={logo} alt="logo" />
        </button>

        <div className={styles.btns_wrapper}>
          {pages.map(({ page, go }, i) => (
            <button
              key={page}
              // prettier-ignore
              className={`${styles.btn} ${page === currentPage ? styles.active : ''}`}
              onClick={go}
              aria-label={page}
            >
              <ReactSVG src={icons[i]} />
            </button>
          ))}
        </div>

        <button
          className={styles.profile_btn}
          onClick={goHome}
          aria-label="Profile"
        >
          <img src={userImage} alt="User Image" />
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
