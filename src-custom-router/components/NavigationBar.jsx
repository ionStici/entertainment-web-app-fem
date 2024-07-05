import styles from "./../styles/NavigationBar.module.scss";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { ReactSVG } from "react-svg";
import { useUser } from "../contexts/UserContext";
import UserPopup from "./UserPopup";
import { Link, useRouter } from "../Router";

const NavigationBar = function () {
  const { user, feedback, handleFeedback } = useUser();

  useEffect(() => {
    if (feedback) handleFeedback();
  }, [feedback]);

  const [isOpen, setIsOpen] = useState(false);

  const { currentPath, paths, goHome, goLogin } = useRouter();

  const handleProfileClick = () => {
    if (!user) goLogin();
    if (user) setIsOpen(true);
  };

  const pages = [
    { page: paths.home, icon: "assets/icon-nav-home.svg" },
    { page: paths.movies, icon: "assets/icon-nav-movies.svg" },
    { page: paths.series, icon: "assets/icon-nav-tv-series.svg" },
    { page: paths.bookmarks, icon: "assets/icon-nav-bookmark.svg" },
  ];

  return (
    <nav className={styles.nav}>
      {isOpen && <UserPopup setIsOpen={setIsOpen} />}

      <div className={styles.wrapper}>
        <button className={styles.logo_link} onClick={goHome}>
          <img src={"assets/logo.svg"} alt="logo" />
        </button>

        <div className={styles.btns_wrapper}>
          {pages.map(({ page, icon }) => {
            return (
              <Link key={page} to={page} className={`${styles.btn} ${currentPath === page ? `${styles.active}` : ""}`}>
                <ReactSVG src={icon} />
              </Link>
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
