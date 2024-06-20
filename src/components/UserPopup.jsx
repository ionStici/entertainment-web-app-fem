import { createPortal } from "react-dom";
import styles from "./../styles/UserPopup.module.scss";
import { useUser } from "../contexts/UserContext";
import { useEffect } from "react";

function UserPopup({ isActive, setIsActive }) {
  const { user, logOut } = useUser();

  useEffect(() => {
    isActive && document.body.classList.add("hidden");
    return () => document.body.classList.remove("hidden");
  }, []);

  const handleLogOut = () => {
    logOut();
    setIsActive(false);
  };

  return createPortal(
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div className={styles.img_box}>
            <img src={user?.avatar} alt="User Image" />
          </div>

          <p className={styles.text_box}>
            <span>Premium User</span>
            <span>{user.email}</span>
          </p>
        </div>

        <button className={styles.logout_btn} onClick={handleLogOut}>
          Log Out
        </button>
      </div>
    </div>,
    document.body
  );
}

export default UserPopup;
