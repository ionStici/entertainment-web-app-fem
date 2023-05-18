import styles from './../styles/SearchBar.module.scss';
import PropTypes from 'prop-types';

const SearchForm = function (props) {
    return (
        <>
            <div className={styles.wrapper}>
                <form
                    className={styles.form}
                    onSubmit={e => {
                        e.preventDefault();
                    }}
                >
                    <label className={styles.label} htmlFor="Search">
                        <img
                            className={styles.icon}
                            src={props.assets.iconSearch}
                            alt="Search"
                        />
                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Search for movies or TV series"
                            id="Search"
                            onChange={props.handleSearch}
                            spellCheck="false"
                        />
                    </label>
                </form>
            </div>
        </>
    );
};

SearchForm.propTypes = {
    assets: PropTypes.object,
    handleSearch: PropTypes.func,
};

export default SearchForm;
