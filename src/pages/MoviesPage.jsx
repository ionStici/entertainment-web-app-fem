import NavigationBar from '../components/Navigation';
import SearchForm from '../components/Search';
import Movies from '../components/Media';
import data from '../data.json';
import Loading from '../components/Loading';
import React from 'react';

const MoviesPage = function () {
    const title = 'Movies';
    const movies = data.filter(movie => movie.category === 'Movie');

    const [hide, setHide] = React.useState(false);
    let componentsLoaded = 0;

    const imgsLoaded = () => {
        componentsLoaded++;
        if (componentsLoaded === 1) setHide(true);
    };

    return (
        <>
            <Loading hide={hide} />
            <NavigationBar />
            <SearchForm />
            <Movies movies={movies} title={title} imgsLoaded={imgsLoaded} />
        </>
    );
};

export default MoviesPage;
