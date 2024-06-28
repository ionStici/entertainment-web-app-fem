import styles from "./../styles/SearchBar.module.scss";
import { useNavigate } from "react-router-dom";

const SearchBar = function ({ focus = false, query, setQuery }) {
  const navigate = useNavigate();
  const goToSearch = () => navigate("/search");

  return (
    <div className={styles.wrapper} onClick={goToSearch}>
      <form onSubmit={(e) => e.preventDefault()}>
        <label className={styles.label} htmlFor="Search">
          <img className={styles.icon} src="assets/icon-search.svg" alt="Search" />
          <input
            type="text"
            className={styles.input}
            placeholder="Search for movies or TV series"
            id="Search"
            spellCheck="false"
            autoComplete="off"
            autoFocus={focus}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
