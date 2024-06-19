import styles from "./../styles/SearchBar.module.scss";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../contexts/MoviesContext";

const SearchBar = function ({ focus = false, handleSearch }) {
  const {
    icons: { iconSearch },
  } = useMovies();

  const navigate = useNavigate();
  const goToSearch = () => navigate("/search");

  return (
    <div className={styles.wrapper} onClick={goToSearch}>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className={styles.label} htmlFor="Search">
          <img className={styles.icon} src={iconSearch} alt="Search" />
          <input
            type="text"
            className={styles.input}
            placeholder="Search for movies or TV series"
            id="Search"
            spellCheck="false"
            onChange={() => handleSearch?.()}
            autoFocus={focus ? true : undefined}
          />
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
