import './styles/base.scss';
import './styles/typography.scss';
import { assets } from './assets';
import data from './data.json';

import NavigationBar from './components/NavigationBar';
import SearchForm from './components/Search';
import Trending from './components/Trending';
import Movies from './components/Movies';

function App() {
    const handleClick = function ({ target }) {
        if (target.dataset.type === 'home') '';

        if (target.dataset.type === 'movies') '';

        if (target.dataset.type === 'tv') '';

        if (target.dataset.type === 'bookmarks') '';
    };

    const handleSearch = function (event) {
        console.log(event.target.value);
    };

    const trending = data.filter(movie => movie.isTrending);

    return (
        <>
            <main>
                <NavigationBar assets={assets} handleClick={handleClick} />
                <SearchForm assets={assets} handleSearch={handleSearch} />
                <Trending assets={assets} trending={trending} />
                <Movies assets={assets} />
            </main>
        </>
    );
}

export default App;
