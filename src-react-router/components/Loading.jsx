import { useEffect, useRef } from 'react';
import styles from './../styles/Loading.module.scss';
import { createPortal } from 'react-dom';

const Loading = function ({ hide }) {
  const layout = useRef(null);
  const box = useRef(null);

  useEffect(() => {
    if (hide) {
      layout.current.classList.add(styles.exit);
      setTimeout(() => layout.current.classList.add(styles.hide), 250);
    }
  }, [hide]);

  return createPortal(
    <div className={styles.layout} ref={layout}>
      <div className={styles.box} ref={box}>
        <div className={styles.lds_ripple}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Loading;
