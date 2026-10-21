import { Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'sans-serif',
        background: '#f8fafc',
        color: '#0f172a',
      }}
    >
      <div style={{ flex: 1, padding: '40px 20px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <nav
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px',
              padding: '12px 18px',
              background: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 2px 10px rgba(15, 23, 42, 0.06)',
            }}
          >
            <div style={{ fontWeight: 700, fontSize: '1.3rem' }}>KANQA</div>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: '#0f172a',
                fontWeight: 600,
              }}
            >
              Home
            </Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Home() {
  return (
    <div
      style={{
        background: '#ffffff',
        padding: '32px',
        borderRadius: '18px',
        boxShadow: '0 8px 30px rgba(15, 23, 42, 0.08)',
      }}
    >
      <h1 style={{ margin: 0, marginBottom: '12px', fontSize: '2.5rem' }}>
        KANQA
      </h1>
      <p style={{ margin: 0, fontSize: '1.05rem', color: '#475569' }}>
        App is running successfully.
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: '#0f172a',
        color: '#e2e8f0',
        padding: '20px',
        textAlign: 'center',
        marginTop: '40px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '8px' }}>
          <strong style={{ color: '#ffffff' }}>Created by Ouichou ABD</strong>
        </div>

        <div style={{ marginBottom: '8px' }}>
          Facebook: <strong style={{ color: '#ffffff' }}>Abdel David</strong>
        </div>

        <div>
          Email:{' '}
          <a
            href="mailto:adndvd063@gmail.com"
            style={{ color: '#ffffff', textDecoration: 'none' }}
          >
            adndvd063@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
