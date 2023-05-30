import { Link } from 'react-router-dom';
import { assets } from '../assets';

const ErrorPage = function () {
    const section = {
        display: 'flex',
        justifyContent: 'center',
        padding: '120px 0',
        margin: '0 auto',
    };

    const wrapper = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '18px',
        width: '240px',
        backgroundColor: 'var(--color-semi-dark-blue)',
        padding: '8px 32px 24px 32px',
        borderRadius: '8px',
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
