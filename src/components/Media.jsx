import styles from './../styles/Media.module.scss';
import { useMovies } from '../contexts/MoviesContext';

const Media = function ({ title, loading }) {
  const { data, toggleBookmark, icons } = useMovies();

  const movies = data.filter((movie) => !movie.isTrending);
  if (!movies) return null;

  const { bookmarkEmpty, bookmarkFull, categMovie, categTv, iconPlay } = icons;

  const handleBookmarkClick = function ({ target }) {
    toggleBookmark(target.dataset.movie);
  };

  let imgsLoaded = 0;
  const totalImgs = movies.length;

  const handleLoad = function () {
    imgsLoaded++;
    if (imgsLoaded === totalImgs) loading();
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>

        <div className={styles.boxes}>
          {movies.map((movie, i) => {
            return (
              <div className={styles.box} key={i}>
                <div className={styles.img_wrapper}>
                  <picture>
                    {/* prettier-ignore */}
                    <source srcSet={movie.thumbnail.regular.small} media='(max-width: 767px)' />
                    {/* prettier-ignore */}
                    <source srcSet={movie.thumbnail.regular.medium} media='(max-width: 1099px)' />
                    {/* prettier-ignore */}
                    <img onLoad={handleLoad} className={styles.movie_img} src={movie.thumbnail.regular.large} alt={movie.title} />
                  </picture>

                  {/* prettier-ignore */}
                  <button onClick={handleBookmarkClick} className={styles.bookmark_button} aria-label="Bookmark" data-movie={movie.title}><img src={movie.isBookmarked ? bookmarkFull: bookmarkEmpty} alt="Bookmark"  /></button>

                  <div className={styles.play}>
                    <img src={iconPlay} alt="" />
                    <p>Play</p>
                  </div>
                </div>

                <div className={styles.box_details}>
                  <p>{movie.year}</p>
                  {/* prettier-ignore */}
                  <p><img src={movie.category === 'Movie' ? categMovie : categTv} alt={movie.category} /><span>{movie.category}</span></p>
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
