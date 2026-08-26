import { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';
import './App.css';

function App() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        // ≈Œ›«¡ ‘«‘… «·œŒÊ·  „«„« »⁄œ 3 ÀÊ«‰Ì
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app">
            {showSplash && <SplashScreen />}

            {/* »«ﬁÌ „Õ ÊÏ «·„Êﬁ⁄ «·—∆Ì”Ì Â‰« */}
            <header className="header">
                <div className="logo">‰œÏ</div>
                ...
            </header>
        </div>
    );
}

export default App;