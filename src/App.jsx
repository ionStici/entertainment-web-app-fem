import './styles/base.scss';
import './styles/typography.scss';
import { assets } from './assets';
import data from './data.json';
import NavigationBar from './components/NavigationBar';

function App() {
    return (
        <>
            <main>
                <NavigationBar assets={assets} />
            </main>
        </>
    );
}

export default App;
