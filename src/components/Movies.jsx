import styles from './../styles/Movies.module.scss';
import PropTypes from 'prop-types';

const Movies = function (props) {
    const assets = props.assets;
    const movies = props.movies;

    return (
        <>
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
                                            <img className={styles.movie_img} src={movie.thumbnail.regular.large} alt={movie.title} />
                                        </picture>

                                        {/* prettier-ignore */}
                                        <button className={styles.bookmark_button} aria-label="Bookmark"><img src={movie.isBookmarked ? assets.iconBookmarkFull : assets.iconBookmarkEmpty} alt="Bookmark" data-isbookmarked={movie.isBookmarked} /></button>
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

Movies.propTypes = {
    assets: PropTypes.object,
    title: PropTypes.string,
    movies: PropTypes.array,
};

export default Movies;
