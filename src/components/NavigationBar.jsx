import styles from "./../styles/NavigationBar.module.scss";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { ReactSVG } from "react-svg";
import { useUser } from "../contexts/UserContext";
import UserPopup from "./UserPopup";

const NavigationBar = function () {
  const { user, feedback, handleFeedback } = useUser();

  useEffect(() => {
    if (feedback) handleFeedback();
  }, [feedback]);

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const goLogin = () => navigate("/login");

  const handleProfileClick = () => {
    if (!user) goLogin();
    if (user) setIsOpen(true);
  };

  const pages = [
    { page: "/home", icon: "assets/icon-nav-home.svg" },
    { page: "/movies", icon: "assets/icon-nav-movies.svg" },
    { page: "/series", icon: "assets/icon-nav-tv-series.svg" },
    { page: "/bookmarks", icon: "assets/icon-nav-bookmark.svg" },
  ];

  return (
    <nav className={styles.nav}>
      {isOpen && <UserPopup setIsOpen={setIsOpen} />}

      <div className={styles.wrapper}>
        <Link className={styles.logo_link} to="/home">
          <img src={"assets/logo.svg"} alt="logo" />
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

        <button className={styles.profile_btn} onClick={handleProfileClick} aria-label="Open User Profile">
          {user && user?.avatar ? <img src={user?.avatar} alt="User Image" /> : <FaUserCircle />}
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
