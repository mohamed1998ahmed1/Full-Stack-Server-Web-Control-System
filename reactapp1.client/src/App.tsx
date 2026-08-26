import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    const products = [
        { id: 1, name: 'فستان ميدي شيفون', price: '1,250 EGP' },
        { id: 2, name: 'فستان ميدي شيفون', price: '1,250 EGP' },
        { id: 3, name: 'فستان ميدي شوقار', price: '1,250 EGP' },
        { id: 4, name: 'فستان ميدي شيفون', price: '1,250 EGP' },
        { id: 5, name: 'عباية كلاسيك', price: '1,800 EGP' },
        { id: 6, name: 'كيمونو حرير', price: '1,450 EGP' },
    ];

    return (
        <div className="app">
            {/* 1. شاشة الدخول */}
            {showSplash && (
                <div className="splash-screen">
                    <div className="walker-container">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
                            alt="NADA Fashion"
                            className="walking-icon"
                        />
                    </div>
                    <h1 className="splash-logo">NADA</h1>
                    <p className="splash-subtitle">أناقة وبساطة</p>
                    <div className="loading-bar"><div className="loading-progress"></div></div>
                </div>
            )}

            {/* 2. الهيدر والقائمة */}
            <header className="header">
                <div className="logo">ندى</div>
                <ul className="nav-links">
                    <li><a href="#" className="active">الكل</a></li>
                    <li><a href="#">فساتين</a></li>
                    <li><a href="#">عبايات</a></li>
                    <li><a href="#">طرح</a></li>
                    <li><a href="#">كيمونو</a></li>
                </ul>
                <div className="cart-icon">🛒 0</div>
            </header>

            {/* 3. البانر الرئيسي */}
            <div className="hero">
                <div className="hero-text">أناقة وبساطة - مجموعة خريف 2026</div>
            </div>

            {/* 4. قسم المتجر والفلاتر */}
            <div className="main-container">
                <aside className="sidebar">
                    <div className="filter-group">
                        <h4>السعر</h4>
                        <input type="range" min="1250" max="5000" />
                    </div>
                    <div className="filter-group">
                        <h4>المقاس</h4>
                        <div className="sizes">
                            <span>S</span><span>M</span><span>L</span><span>XL</span>
                        </div>
                    </div>
                </aside>

                <main className="products-section">
                    <h3 className="section-title">أحدث الوصول</h3>
                    <div className="products-grid">
                        {products.map((item) => (
                            <div key={item.id} className="product-card">
                                <div className="product-img"></div>
                                <div className="product-title">{item.name}</div>
                                <div className="product-price">{item.price}</div>
                                <button className="btn-add">أضف للسلة</button>
                            </div>
                        ))}
                    </div>
                </main>
            </div>

            {/* 5. قسم Shop by Look */}
            <section className="extra-section">
                <h3 className="section-title">Shop by Look</h3>
                <div className="look-grid">
                    <div className="look-card">طقم الخريف الكامل</div>
                    <div className="look-card">إطلالة المناسبات</div>
                </div>
            </section>

            {/* 6. قسم How it Works */}
            <section className="extra-section">
                <h3 className="section-title">How It Works</h3>
                <div className="steps-grid">
                    <div className="step-card">1. اختاري موديلك</div>
                    <div className="step-card">2. حددي المقاس</div>
                    <div className="step-card">3. استلمي عند الباب</div>
                </div>
            </section>

            {/* 7. الفوتر */}
            <footer className="footer">
                <p>جميع الحقوق محفوظة © 2026 - متجر ندى للأزياء</p>
            </footer>
        </div>
    );
}

export default App;