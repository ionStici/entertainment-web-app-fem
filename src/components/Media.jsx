import React from 'react';
import { assets } from '../assets';
import styles from './../styles/Movies.module.scss';

const Movies = function (props) {
  const movies = props.movies;

  const handleBookmarkMouseOver = function ({ target }) {
    const icon = target.querySelector('img');
    icon.classList.add(styles.bookmark_button_hover);

    if (icon.dataset.isbookmarked === 'false') {
      icon.src = assets.iconBookmarkFull;
    }

    if (icon.dataset.isbookmarked === 'true') {
      icon.src = assets.iconBookmarkEmpty;
    }
  };

  const handleBookmarkMouseOut = function ({ target }) {
    const icon = target.querySelector('img');
    icon.classList.remove(styles.bookmark_button_hover);

    if (!(icon.dataset.isbookmarked === 'false')) {
      icon.src = assets.iconBookmarkFull;
    }

    if (!(icon.dataset.isbookmarked === 'true')) {
      icon.src = assets.iconBookmarkEmpty;
    }
  };

  const [bookmark, updateBookmark] = React.useState(0);

  const handleBookmarkClick = function ({ target }) {
    const icon = target.querySelector('img');
    icon.classList.remove(styles.bookmark_button_hover);

    const movie = movies.find((movie) => {
      return movie.title === target.dataset.movie;
    });

    updateBookmark((prev) => prev + 1);
    bookmark;

    if (props.update) props.update();

    if (movie.isBookmarked === false) {
      movie.isBookmarked = true;
      return;
    }

    if (movie.isBookmarked === true) {
      movie.isBookmarked = false;
      return;
    }
  };

  // // // // // // // // // // // // // // // // // // // //

  let imgsLoaded = 0;
  const totalImgs = movies.length;

  const handleLoad = function (e) {
    imgsLoaded++;
    if (imgsLoaded === totalImgs) props.imgsLoaded();
  };

  // // // // // // // // // // // // // // // // // // // //

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{props.title}</h1>

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
                  <button onClick={handleBookmarkClick} onMouseOver={handleBookmarkMouseOver} onMouseOut={handleBookmarkMouseOut} className={styles.bookmark_button} aria-label="Bookmark" data-movie={movie.title}><img src={movie.isBookmarked ? assets.iconBookmarkFull : assets.iconBookmarkEmpty} alt="Bookmark" data-isbookmarked={movie.isBookmarked} /></button>

                  <div className={styles.play}>
                    <img src={assets.iconPlay} alt="" />
                    <p>Play</p>
                  </div>
                </div>

                <div className={styles.box_details}>
                  <p>{movie.year}</p>
                  {/* prettier-ignore */}
                  <p><img src={movie.category === 'Movie' ? assets.iconCategoryMovie : assets.iconCategoryTv} alt={movie.category} /><span>{movie.category}</span></p>
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

export default Movies;
