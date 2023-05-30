import NavigationBar from '../components/Navigation';
import SearchForm from '../components/Search';
import Trending from '../components/Trending';
import Movies from '../components/Media';
import data from '../data.json';

const HomePage = function () {
    const title = 'Recommended for you';
    const trending = data.filter(movie => movie.isTrending);
    const movies = data.filter(movie => !movie.isTrending);

    return (
        <>
            <main className="">
                <NavigationBar />
                <SearchForm />
                <Trending trending={trending} />
                <Movies movies={movies} title={title} />
            </main>
        </>
    );
};

export default HomePage;
