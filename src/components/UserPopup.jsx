import styles from "./../styles/UserPopup.module.scss";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

function UserPopup({ setIsOpen }) {
  let user, logOut;

  useEffect(() => {
    document.body.classList.add("hidden");
    return () => document.body.classList.remove("hidden");
  }, []);

  const handleLogOut = () => {
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    setIsOpen(false);
  };

  return createPortal(
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <button className={styles.btn_close} onClick={handleClose}>
          <IoClose />
        </button>

        <div className={styles.user_box}>
          <div>
            <img src={"assets/image-avatar.png"} alt="User Image" />
          </div>
          <p>Premium User</p>
        </div>

        <p className={styles.email}>{"funny_guy@hi.net"}</p>

        <button className={`${styles.btn} ${styles.btn_logout}`} onClick={handleLogOut}>
          <TbLogout />
          <span>Log Out</span>
        </button>

        <button className={`${styles.btn} ${styles.btn_delete}`} onClick={handleDelete}>
          <MdDeleteOutline />
          <span>Delete User</span>
        </button>
      </div>
    </div>,
    document.body
  );
}

export default UserPopup;
