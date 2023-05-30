import NavigationBar from '../components/Navigation';
import SearchForm from '../components/Search';
import Trending from '../components/Trending';
import Media from '../components/Media';
import data from '../data.json';
import Loading from '../components/Loading';
import React from 'react';

const HomePage = function () {
    const title = 'Recommended for you';
    const trending = data.filter(movie => movie.isTrending);
    const movies = data.filter(movie => !movie.isTrending);

    const [hide, setHide] = React.useState(false);
    let componentsLoaded = 0;

    const imgsLoaded = () => {
        componentsLoaded++;
        if (componentsLoaded === 2) setHide(true);
    };

    return (
        <>
            <Loading hide={hide} />
            <NavigationBar />
            <SearchForm />
            <Trending trending={trending} imgsLoaded={imgsLoaded} />
            <Media movies={movies} title={title} imgsLoaded={imgsLoaded} />
        </>
    );
};

export default HomePage;
