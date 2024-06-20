import styles from "./../styles/NavigationBar.module.scss";
import { useMovies } from "../contexts/MoviesContext";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { useUser } from "../contexts/UserContext";

import { FaUserCircle } from "react-icons/fa";

const NavigationBar = function () {
  const { user, logOut } = useUser();

  const navigate = useNavigate();
  const goLogin = () => navigate("/login");

  const handleUserClick = () => {
    if (!user) goLogin();
    if (user) logOut();
  };

  const { icons } = useMovies();
  const { iconHome, iconMovies, iconSeries, iconBookmark, logo } = icons;

  const pages = [
    { page: "/", icon: iconHome },
    { page: "/movies", icon: iconMovies },
    { page: "/series", icon: iconSeries },
    { page: "/bookmarks", icon: iconBookmark },
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
              <NavLink to={page} key={page} className={({ isActive }) => (isActive ? `${styles.btn} ${styles.active}` : `${styles.btn}`)}>
                <ReactSVG src={icon} />
              </NavLink>
            );
          })}
        </div>

        <button className={styles.profile_btn} onClick={handleUserClick}>
          {user && user?.avatar ? <img src={user?.avatar} alt="User Image" /> : <FaUserCircle />}
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
