import React from 'react';
import styles from './../styles/Loading.module.scss';

const Loading = function (props) {
    const block = React.useRef(null);
    const box = React.useRef(null);

    React.useEffect(() => {
        if (props.hide) {
            block.current.classList.add(styles.exit);
            setTimeout(() => block.current.classList.add(styles.hide), 250);
        }
    }, [props.hide]);

    return (
        <>
            {/* prettier-ignore */}
            <div className={`${styles.block}`} ref={block}>
                <div className={styles.box} ref={box}>
                    <div className={styles.lds_ripple}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loading;
