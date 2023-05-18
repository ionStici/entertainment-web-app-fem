import styles from './../styles/NavigationBar.module.scss';
import PropTypes from 'prop-types';

const NavigationBar = function (props) {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.wrapper}>
                    <img
                        className={styles.logo}
                        src={props.assets.logo}
                        alt="logo"
                        width="25"
                        height="20"
                    />

                    <div
                        className={styles.btns_wrapper}
                        onClick={props.handleClick}
                    >
                        <button
                            className={`${styles.btn} ${styles.active}`}
                            aria-label="Home"
                            data-type="home"
                        >
                            {props.assets.svgNavHome}
                        </button>

                        <button
                            className={styles.btn}
                            aria-label="Movies"
                            data-type="movies"
                        >
                            {props.assets.svgNavMovies}
                        </button>

                        <button
                            className={styles.btn}
                            aria-label="Tv Series"
                            data-type="tv"
                        >
                            {props.assets.svgNavTvSeries}
                        </button>

                        <button
                            className={styles.btn}
                            aria-label="Bookmarks"
                            data-type="bookmarks"
                        >
                            {props.assets.svgNavBookmark}
                        </button>
                    </div>

                    <button className={styles.profile_btn}>
                        <img
                            className={styles.profile_img}
                            src={props.assets.imageAvatar}
                            alt="User Image"
                            width="24"
                            height="24"
                        />
                    </button>
                </div>
            </nav>
        </>
    );
};

NavigationBar.propTypes = {
    assets: PropTypes.object,
    handleClick: PropTypes.func,
};

export default NavigationBar;
