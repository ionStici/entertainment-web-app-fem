import styles from "./../styles/SearchBar.module.scss";
import { useRouter } from "../Router";

const SearchBar = function ({ focus = false, query, setQuery }) {
  const { goSearch } = useRouter();

  return (
    <div className={styles.wrapper} onClick={goSearch}>
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
