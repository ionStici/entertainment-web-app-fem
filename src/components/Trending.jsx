import styles from './../styles/Trending.module.scss';
import PropTypes from 'prop-types';

const Trending = function (props) {
    console.log(props.trending);

    return (
        <>
            <section className={styles.section}>
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Trending</h1>

                    <div className={styles.boxes}>
                        {props.trending.map((movie, i) => {
                            return (
                                <div className={styles.box} key={i}>
                                    <picture>
                                        {/* prettier-ignore */}
                                        <source srcSet={movie.thumbnail.trending.small} media='(max-width: 767px)' />
                                        {/* prettier-ignore */}
                                        <img className={styles.box_img} src={movie.thumbnail.trending.large} alt={movie.title} />
                                    </picture>

                                    {/* prettier-ignore */}
                                    <button className={styles.bookmark_button} aria-label="Bookmark"><img src={movie.isBookmarked ? props.assets.iconBookmarkFull : props.assets.iconBookmarkEmpty} alt="Bookmark" /></button>

                                    <div className={styles.box_details}>
                                        <p>{movie.year}</p>
                                        {/* prettier-ignore */}
                                        <p><img src={movie.category === 'Movie' ? props.assets.iconCategoryMovie : props.assets.iconCategoryTv} alt={movie.category} /><span>{movie.category}</span></p>
                                        <p>{movie.rating}</p>
                                    </div>

                                    <h2 className={styles.movie_title}>
                                        {movie.title}
                                    </h2>
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
