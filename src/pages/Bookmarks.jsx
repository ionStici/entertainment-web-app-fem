import NavigationBar from '../components/NavigationBar';
import SearchForm from '../components/Search';
import Movies from '../components/Movies';

import React from 'react';
import { assets } from './../assets';
import data from './../data.json';

const BookmarksPage = function () {
    const [page, updatePage] = React.useState(0);

    const moviesTitle = 'Bookmarked Movies';

    const movies = data.filter(movie => {
        return movie.isBookmarked && movie.category === 'Movie';
    });

    const tvSeriesTitle = 'Bookmaked TV Series';

    const tvSeries = data.filter(movie => {
        return movie.isBookmarked && movie.category === 'TV Series';
    });

    return (
        <>
            <NavigationBar />
            <SearchForm />
            <Movies assets={assets} movies={movies} title={moviesTitle} />
            <Movies assets={assets} movies={tvSeries} title={tvSeriesTitle} />
        </>
    );
};

export default BookmarksPage;
