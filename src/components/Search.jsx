import styles from './../styles/Search.module.scss';
import data from './../data.json';
import { assets } from './../assets';
import { useNavigate } from 'react-router-dom';

const SearchForm = function (props) {
    const navigate = useNavigate();
    const goToSearch = () => navigate('/search');

    return (
        <>
            <div className={styles.wrapper} onClick={goToSearch}>
                <form
                    className={styles.form}
                    onSubmit={e => {
                        e.preventDefault();
                    }}
                >
                    <label className={styles.label} htmlFor="Search">
                        <img
                            className={styles.icon}
                            src={assets.iconSearch}
                            alt="Search"
                        />
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Search for movies or TV series"
                            id="Search"
                            spellCheck="false"
                            onChange={props.handleSearch}
                            autoFocus={props.focus ? true : undefined}
                        />
                    </label>
                </form>
            </div>
        </>
    );
};

export default SearchForm;
