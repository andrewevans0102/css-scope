import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <main>
            <h1>React Example</h1>
            <button onClick={() => navigate('/with-bem')}>With BEM</button>
            <button onClick={() => navigate('/with-scope')}>With Scope</button>
        </main>
    );
};

export default HomePage;
