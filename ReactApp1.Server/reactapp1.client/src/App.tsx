import React from 'react';

export default function App() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', direction: 'rtl' }}>
            {/* Header */}
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1e293b', padding: '15px 25px', borderRadius: '10px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ margin: 0, fontSize: '20px', color: '#38bdf8' }}>🚀 منظومة الويب المتكاملة للتحكم وإدارة السيرفر</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ height: '12px', width: '12px', backgroundColor: '#22c55e', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px #22c55e' }}></span>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>السيرفر متصل (Online)</span>
                </div>
            </header>

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '25px' }}>
                <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '10px', borderRight: '4px solid #3b82f6' }}>
                    <h4 style={{ margin: '0 0 10px 0', color: '#94a3b8' }}>استهلاك المعالج (CPU)</h4>
                    <p style={{ fontSize: '28px', fontWeight: 'bold', margin: 0, color: '#60a5fa' }}>24%</p>
                </div>

                <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '10px', borderRight: '4px solid #10b981' }}>
                    <h4 style={{ margin: '0 0 10px 0', color: '#94a3b8' }}>الذاكرة العشوائية (RAM)</h4>
                    <p style={{ fontSize: '28px', fontWeight: 'bold', margin: 0, color: '#34d399' }}>4.2 GB / 16 GB</p>
                </div>

                <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '10px', borderRight: '4px solid #f59e0b' }}>
                    <h4 style={{ margin: '0 0 10px 0', color: '#94a3b8' }}>طلبات الـ API النشطة</h4>
                    <p style={{ fontSize: '28px', fontWeight: 'bold', margin: 0, color: '#fbbf24' }}>1,280 /sec</p>
                </div>

                <div style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '10px', borderRight: '4px solid #a855f7' }}>
                    <h4 style={{ margin: '0 0 10px 0', color: '#94a3b8' }}>حالة الأمان والـ Firewall</h4>
                    <p style={{ fontSize: '20px', fontWeight: 'bold', margin: '5px 0 0 0', color: '#c084fc' }}>مستقر ومحمّي</p>
                </div>
            </div>

            {/* Quick Controls Section */}
            <div style={{ backgroundColor: '#1e293b', padding: '25px', borderRadius: '10px', marginTop: '25px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '15px', color: '#f1f5f9' }}>لوحة التحكم والعمليات السريعة</h3>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    <button style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}>
                        🔄 إعادة تشغيل الخادم
                    </button>
                    <button style={{ backgroundColor: '#dc2626', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}>
                        🧹 مسح التخزين المؤقت (Cache)
                    </button>
                    <button style={{ backgroundColor: '#475569', color: '#fff', border: 'none', padding: '12px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}>
                        📄 عرض سجلات النظام (Logs)
                    </button>
                </div>
            </div>
        </div>
    );
}