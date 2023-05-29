import { Link } from 'react-router-dom';
import { assets } from '../assets';

const ErrorPage = function () {
    const section = {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '120px 0',
    };

    const wrapper = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '18px',
    };

    const link = {
        display: 'flex',
        alignItems: 'center',
        columnGap: '16px',
        textDecoration: 'none',
        color: 'var(--color-white)',
        padding: '16px',
    };

    return (
        <>
            <section style={section}>
                <div style={wrapper}>
                    <Link style={link} to="/">
                        <img src={assets.logo} alt="Logo" />
                        <h1>(404)</h1>
                    </Link>
                    <p>No such page exists</p>
                </div>
            </section>
        </>
    );
};

export default ErrorPage;
