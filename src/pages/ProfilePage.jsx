import styles from './../styles/Profile.module.scss';
import { Link } from 'react-router-dom';
import { assets } from '../assets';

const ProfilePage = function () {
    return (
        <>
            <section>
                <Link to="/">
                    <img src={assets.logo} alt="logo" />
                </Link>

                <div className={styles.wrapper}>
                    <h1></h1>

                    <form>
                        <input type="text" />
                        <input type="text" />
                    </form>
                </div>
            </section>
        </>
    );
};

export default ProfilePage;
