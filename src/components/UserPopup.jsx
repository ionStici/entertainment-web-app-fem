import styles from "./../styles/UserPopup.module.scss";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { useUser } from "../contexts/UserContext";

function UserPopup({ setIsOpen }) {
  const { user, logOut, deleteUser, isLoading } = useUser();
  if (!user) return null;

  useEffect(() => {
    document.body.classList.add("hidden");
    return () => document.body.classList.remove("hidden");
  }, []);

  const handleLogOut = () => {
    logOut();
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    deleteUser(user.email);
    setTimeout(() => setIsOpen(false), 500);
  };

  return createPortal(
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <button className={styles.btn_close} onClick={handleClose}>
          <IoClose />
        </button>

        <div className={styles.user_box}>
          <div>
            <img src={user?.avatar} alt="User Image" />
          </div>
          <p>Premium User</p>
        </div>

        <p className={styles.email}>{user?.email}</p>

        <button className={`${styles.btn} ${styles.btn_logout}`} onClick={handleLogOut}>
          <TbLogout />
          <span>Log Out</span>
        </button>

        <button className={`${styles.btn} ${styles.btn_delete}`} onClick={handleDelete} disabled={isLoading}>
          <MdDeleteOutline />
          <span>Delete User</span>
        </button>
      </div>
    </div>,
    document.body
  );
}

export default UserPopup;
