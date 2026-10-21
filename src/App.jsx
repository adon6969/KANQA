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
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <nav
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px',
              padding: '14px 18px',
              background: '#ffffff',
              borderRadius: '14px',
              boxShadow: '0 4px 18px rgba(15, 23, 42, 0.08)',
            }}
          >
            <div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#111827' }}>
              KANQKA
            </div>

            <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
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
            </div>
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
    <div>
      <Hero />
      <Features />
    </div>
  );
}

function Hero() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#fff',
        borderRadius: '22px',
        padding: '64px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '30px',
        boxShadow: '0 18px 45px rgba(15, 23, 42, 0.18)',
      }}
    >
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.1)',
            padding: '8px 14px',
            borderRadius: '999px',
            fontSize: '12px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '18px',
          }}
        >
          Smart workflow platform
        </div>

        <h1 style={{ fontSize: '3rem', margin: 0, marginBottom: '14px' }}>
          Build faster with KANQKA
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#cbd5e1',
            maxWidth: '620px',
          }}
        >
          KANQKA helps teams manage projects, automate work, and improve delivery
          using a clean and powerful digital workspace.
        </p>

        <div style={{ marginTop: '28px', display: 'flex', gap: '16px' }}>
          <button
            style={{
              background: '#f8fafc',
              color: '#0f172a',
              border: 'none',
              borderRadius: '10px',
              padding: '14px 22px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Get Started
          </button>

          <button
            style={{
              background: 'transparent',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.4)',
              borderRadius: '10px',
              padding: '14px 22px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      <div
        style={{
          flex: '0 0 360px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '18px',
          padding: '20px',
        }}
      >
        <div
          style={{
            background: '#ffffff',
            borderRadius: '14px',
            padding: '18px',
            color: '#111827',
          }}
        >
          <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>
            Team overview
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '14px',
            }}
          >
            <div
              style={{
                background: '#eff6ff',
                borderRadius: '12px',
                padding: '16px',
              }}
            >
              <div style={{ fontSize: '12px', color: '#475569' }}>Projects</div>
              <div style={{ fontSize: '24px', fontWeight: 800 }}>24</div>
            </div>

            <div
              style={{
                background: '#ecfeff',
                borderRadius: '12px',
                padding: '16px',
              }}
            >
              <div style={{ fontSize: '12px', color: '#475569' }}>Tasks</div>
              <div style={{ fontSize: '24px', fontWeight: 800 }}>184</div>
            </div>

            <div
              style={{
                background: '#fef3c7',
                borderRadius: '12px',
                padding: '16px',
              }}
            >
              <div style={{ fontSize: '12px', color: '#475569' }}>Members</div>
              <div style={{ fontSize: '24px', fontWeight: 800 }}>12</div>
            </div>

            <div
              style={{
                background: '#f3e8ff',
                borderRadius: '12px',
                padding: '16px',
              }}
            >
              <div style={{ fontSize: '12px', color: '#475569' }}>Uptime</div>
              <div style={{ fontSize: '24px', fontWeight: 800 }}>99%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      title: 'Automation',
      text: 'Reduce manual work and keep repetitive processes running smoothly.',
    },
    {
      title: 'Collaboration',
      text: 'Keep your team aligned with shared tasks, updates, and visibility.',
    },
    {
      title: 'Insights',
      text: 'Track progress and use real-time reporting to improve performance.',
    },
  ];

  return (
    <section style={{ marginTop: '50px', marginBottom: '60px' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '24px', textAlign: 'center' }}>
        Why KANQKA
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '22px',
        }}
      >
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              background: '#ffffff',
              borderRadius: '18px',
              padding: '28px 22px',
              boxShadow: '0 8px 30px rgba(15, 23, 42, 0.06)',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: '#dbeafe',
                marginBottom: '18px',
              }}
            />
            <h3 style={{ margin: '0 0 12px', fontSize: '1.25rem' }}>{item.title}</h3>
            <p style={{ margin: 0, color: '#475569', lineHeight: '1.7' }}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: '#0f172a',
        color: '#e2e8f0',
        padding: '24px 20px',
        textAlign: 'center',
        marginTop: '40px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
