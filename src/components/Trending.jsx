import React from 'react';
import styles from './../styles/Trending.module.scss';
import PropTypes from 'prop-types';

const Trending = function (props) {
    const trending = props.trending;
    const assets = props.assets;

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

        const movie = trending.find(movie => {
            return movie.title === target.dataset.movie;
        });

        updateBookmark(prev => prev + 1);
        bookmark;

        if (movie.isBookmarked === false) {
            movie.isBookmarked = true;
            return;
        }

        if (movie.isBookmarked === true) {
            movie.isBookmarked = false;
            return;
        }
    };

    return (
        <>
            <section className={styles.section}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Trending</h1>

                    <div className={styles.boxes}>
                        {trending.map((movie, i) => {
                            return (
                                <div className={styles.box} key={i}>
                                    <picture>
                                        {/* prettier-ignore */}
                                        <source srcSet={movie.thumbnail.trending.small} media='(max-width: 767px)' />
                                        {/* prettier-ignore */}
                                        <img className={styles.box_img} src={movie.thumbnail.trending.large} alt={movie.title} />
                                    </picture>

                                    {/* prettier-ignore */}
                                    <button onClick={handleBookmarkClick} onMouseOver={handleBookmarkMouseOver} onMouseOut={handleBookmarkMouseOut} className={styles.bookmark_button} aria-label="Bookmark" data-movie={movie.title}><img src={movie.isBookmarked ? assets.iconBookmarkFull : assets.iconBookmarkEmpty} alt="Bookmark" data-isbookmarked={movie.isBookmarked} /></button>

                                    <div className={styles.box_details}>
                                        <p>{movie.year}</p>
                                        {/* prettier-ignore */}
                                        <p><img src={movie.category === 'Movie' ? assets.iconCategoryMovie : assets.iconCategoryTv} alt={movie.category} /><span>{movie.category}</span></p>
                                        <p>{movie.rating}</p>
                                    </div>

                                    <h2 className={styles.movie_title}>
                                        {movie.title}
                                    </h2>

                                    <div className={styles.play}>
                                        <img src={assets.iconPlay} alt="" />
                                        <p>Play</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

Trending.propTypes = {
    assets: PropTypes.object,
    trending: PropTypes.array,
};

export default Trending;
