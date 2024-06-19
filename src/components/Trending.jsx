import styles from "./../styles/Trending.module.scss";
import { useMovies } from "../contexts/MoviesContext";

const Trending = function ({ loading }) {
  const { data, toggleBookmark, icons } = useMovies();

  const trending = data.filter((movie) => movie.isTrending);
  if (!trending) return null;

  const { bookmarkEmpty, bookmarkFull, categoryMovie, categoryTv, iconPlay } = icons;

  const handleToggleBookmark = ({ target }) => {
    toggleBookmark(target.dataset.movie);
  };

  let imgsLoaded = 0;
  const totalImgs = trending.length;

  const handleLoad = () => {
    imgsLoaded++;
    if (imgsLoaded === totalImgs) loading?.();
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Trending</h1>
        <div className={styles.boxes}>
          {trending.map((movie) => {
            return (
              <div className={styles.box} key={movie.title}>
                <picture>
                  <source srcSet={movie.thumbnail.trending.small} media="(max-width: 767px)" />
                  <img onLoad={handleLoad} className={styles.box_img} src={movie.thumbnail.trending.large} alt={movie.title} />
                </picture>

                <button className={styles.bookmark_button} onClick={handleToggleBookmark} aria-label="Bookmark" data-movie={movie.title}>
                  <img src={movie.isBookmarked ? bookmarkFull : bookmarkEmpty} alt="Bookmark" />
                </button>

                <div className={styles.box_details}>
                  <p>{movie.year}</p>
                  <p>
                    <img src={movie.category === "Movie" ? categoryMovie : categoryTv} alt={movie.category} />
                    <span>{movie.category}</span>
                  </p>
                  <p>{movie.rating}</p>
                </div>

                <h2 className={styles.movie_title}>{movie.title}</h2>

                <button className={styles.play}>
                  <img src={iconPlay} alt="Play" />
                  <p>Play</p>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trending;
