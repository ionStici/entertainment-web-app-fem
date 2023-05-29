import NavigationBar from '../components/Navigation';
import SearchForm from '../components/Search';
import Movies from '../components/Media';
import moviesStyles from './../styles/Movies.module.scss';
import React from 'react';
import { assets } from '../assets';
import data from '../data.json';

const BookmarksPage = function () {
    const [page, updatePage] = React.useState(0);

    const moviesTitle = 'Bookmarked Movies';

    const movies = data.filter(movie => {
        return movie.isBookmarked && movie.category === 'Movie';
    });

    const tvSerTitle = 'Bookmaked TV Series';

    const tvSeries = data.filter(movie => {
        return movie.isBookmarked && movie.category === 'TV Series';
    });

    const update = () => updatePage(prev => prev + 1);

    return (
        <>
            <NavigationBar />
            <SearchForm />

            {movies[0] ? (
                <Movies
                    assets={assets}
                    movies={movies}
                    title={moviesTitle}
                    update={update}
                />
            ) : (
                ''
            )}

            {tvSeries[0] ? (
                <div className={moviesStyles.spaceBetweenBlocks}></div>
            ) : (
                ''
            )}

            {tvSeries[0] ? (
                <Movies
                    assets={assets}
                    movies={tvSeries}
                    title={tvSerTitle}
                    update={update}
                />
            ) : (
                ''
            )}
        </>
    );
};

export default BookmarksPage;
