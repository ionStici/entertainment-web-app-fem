import styles from "./../styles/Media.module.scss";
import { useUser } from "../contexts/UserContext";

const Media = function ({ movies, loading, title }) {
  if (!movies) return null;

  const { toggleBookmark } = useUser();

  const handleBookmarkClick = function ({ target }) {
    toggleBookmark(target.dataset.movie);
  };

  let imgsLoaded = 0;
  const totalImgs = movies.length;

  const handleLoad = function () {
    imgsLoaded++;
    if (imgsLoaded === totalImgs) loading?.();
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>

        <div className={styles.boxes}>
          {movies.map((movie) => {
            return (
              <div className={styles.box} key={movie.title}>
                <div className={styles.img_wrapper}>
                  <picture>
                    <source srcSet={movie.thumbnail.regular.small} media="(max-width: 767px)" />
                    <source srcSet={movie.thumbnail.regular.medium} media="(max-width: 1099px)" />
                    <img onLoad={handleLoad} className={styles.movie_img} src={movie.thumbnail.regular.large} alt={movie.title} />
                  </picture>

                  <button onClick={handleBookmarkClick} className={styles.bookmark_button} aria-label="Bookmark" data-movie={movie.title}>
                    <img src={movie.isBookmarked ? "assets/icon-bookmark-full.svg" : "assets/icon-bookmark-empty.svg"} alt="Bookmark" />
                  </button>

                  <button className={styles.play}>
                    <img src="assets/icon-play.svg" alt="" />
                    <p>Play</p>
                  </button>
                </div>

                <div className={styles.box_details}>
                  <p>{movie.year}</p>
                  <p>
                    <img
                      src={movie.category === "Movie" ? "assets/icon-category-movie.svg" : "assets/icon-category-tv.svg"}
                      alt={movie.category}
                    />
                    <span>{movie.category}</span>
                  </p>
                  <p>{movie.rating}</p>
                </div>

                <h2 className={styles.movie_title}>{movie.title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Media;
