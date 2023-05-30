import NavigationBar from '../components/Navigation';
import SearchForm from '../components/Search';
import Movies from '../components/Media';
import moviesStyles from './../styles/Movies.module.scss';
import React from 'react';
import data from '../data.json';

const BookmarksPage = function () {
    const [page, updatePage] = React.useState(0);
    const update = () => updatePage(prev => prev + 1);

    const moviesTitle = 'Bookmarked Movies';

    const movies = data.filter(movie => {
        return movie.isBookmarked && movie.category === 'Movie';
    });

    const tvSerTitle = 'Bookmaked TV Series';

    const tvSeries = data.filter(movie => {
        return movie.isBookmarked && movie.category === 'TV Series';
    });

    return (
        <>
            <main>
                <NavigationBar />
                <SearchForm />

                {movies[0] ? (
                    <Movies
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
                        movies={tvSeries}
                        title={tvSerTitle}
                        update={update}
                    />
                ) : (
                    ''
                )}
            </main>
        </>
    );
};

export default BookmarksPage;
