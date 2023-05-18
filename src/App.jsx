import './styles/base.scss';
import './styles/typography.scss';
import { assets } from './assets';
import data from './data.json';
import NavigationBar from './components/NavigationBar';

function App() {
    const handleNavBarClick = function ({ target }) {
        if (target.dataset.type === 'home') '';

        if (target.dataset.type === 'movies') '';

        if (target.dataset.type === 'tv') '';

        if (target.dataset.type === 'bookmarks') '';
    };

    return (
        <>
            <main>
                <NavigationBar
                    assets={assets}
                    handleClick={handleNavBarClick}
                />
            </main>
        </>
    );
}

export default App;
