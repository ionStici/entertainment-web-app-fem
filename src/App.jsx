import './styles/base.scss';
import './styles/typography.scss';
import { assets } from './assets';
import data from './data.json';

import NavigationBar from './components/NavigationBar';
import SearchForm from './components/Search';

function App() {
    const handleNavBarClick = function ({ target }) {
        if (target.dataset.type === 'home') '';

        if (target.dataset.type === 'movies') '';

        if (target.dataset.type === 'tv') '';

        if (target.dataset.type === 'bookmarks') '';
    };

    const handleSearch = function (event) {
        console.log(event.target.value);
    };

    return (
        <>
            <main>
                <NavigationBar
                    assets={assets}
                    handleClick={handleNavBarClick}
                />
                <SearchForm assets={assets} handleSearch={handleSearch} />
            </main>
        </>
    );
}

export default App;
