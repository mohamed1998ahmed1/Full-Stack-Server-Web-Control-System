import React, { useState } from 'react';
import './App.css';

export default function App() {
    const [loading, setLoading] = useState(false);

    const handleAction = (actionName: string) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert(`تم تنفيذ: ${actionName} بنجاح`);
        }, 1000);
    };

    return (
        <div className="dashboard-container">
            {/* Header */}
            <header className="dash-header">
                <div>
                    <h1 className="dash-title">
                        <span className="icon">⚡</span> منظومة التحكم وإدارة السيرفر
                    </h1>
                    <p className="dash-subtitle">مراقبة الأداء المباشر وإدارة الموارد</p>
                </div>

                <div className="status-badge">
                    <span className="pulse-dot"></span>
                    <span>السيرفر متصل (Online)</span>
                </div>
            </header>

            {/* Metrics Grid */}
            <div className="metrics-grid">

                {/* CPU Card */}
                <div className="metric-card">
                    <div className="card-head">
                        <span>استهلاك المعالج (CPU)</span>
                        <span className="card-icon">💻</span>
                    </div>
                    <div className="card-value">24%</div>
                    <div className="progress-bar">
                        <div className="progress-fill cpu-fill" style={{ width: '24%' }}></div>
                    </div>
                </div>

                {/* RAM Card */}
                <div className="metric-card">
                    <div className="card-head">
                        <span>الذاكرة العشوائية (RAM)</span>
                        <span className="card-icon">📊</span>
                    </div>
                    <div className="card-value ltr-text">4.2 / 16 GB</div>
                    <div className="progress-bar">
                        <div className="progress-fill ram-fill" style={{ width: '26%' }}></div>
                    </div>
                </div>

                {/* API Card */}
                <div className="metric-card">
                    <div className="card-head">
                        <span>طلبات API النشطة</span>
                        <span className="card-icon">🚀</span>
                    </div>
                    <div className="card-value ltr-text">
                        1,280 <span className="unit">/sec</span>
                    </div>
                    <div className="card-sub text-amber">↑ 12% مقارنة بالدقيقة السابقة</div>
                </div>

                {/* Security Card */}
                <div className="metric-card">
                    <div className="card-head">
                        <span>الأمان و Firewall</span>
                        <span className="card-icon">🛡️</span>
                    </div>
                    <div className="card-value text-purple">مستقر ومحمي</div>
                    <div className="card-sub text-muted">جميع المنافذ غير الضرورية مغلقة</div>
                </div>

            </div>

            {/* Action Controls */}
            <div className="actions-card">
                <h2>التحكم والعمليات السريعة</h2>
                <p className="actions-sub">نفّذ الأوامر الفورية لإدارة خدمات الخادم</p>

                <div className="btn-group">
                    <button
                        onClick={() => handleAction('إعادة تشغيل الخادم')}
                        disabled={loading}
                        className="btn btn-primary">
                        🔄 إعادة تشغيل الخادم
                    </button>

                    <button
                        onClick={() => handleAction('مسح التخزين المؤقت')}
                        disabled={loading}
                        className="btn btn-danger">
                        🗑️ مسح التخزين المؤقت (Cache)
                    </button>

                    <button
                        onClick={() => handleAction('عرض السجلات')}
                        disabled={loading}
                        className="btn btn-secondary">
                        📄 عرض سجلات النظام (Logs)
                    </button>
                </div>
            </div>
        </div>
    );
}
