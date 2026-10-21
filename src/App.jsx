import { Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ flex: 1, padding: '40px' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '12px' }}>Home</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>KANQA</h1>
      <p>App is running successfully.</p>
    </div>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: '#111827',
        color: '#fff',
        textAlign: 'center',
        padding: '16px 20px',
        fontSize: '14px',
        marginTop: '40px',
      }}
    >
      Created by <strong>Ouichou ABD</strong> · KANQA
    </footer>
  );
}
