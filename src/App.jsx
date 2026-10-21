import { Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#07111f',
        color: '#e5eefb',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ flex: 1, padding: '28px 20px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <nav
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '18px 22px',
              borderRadius: '18px',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(148, 163, 184, 0.18)',
              boxShadow: '0 14px 40px rgba(2, 6, 23, 0.45)',
              marginBottom: '32px',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{ fontWeight: 900, fontSize: '1.9rem', letterSpacing: '0.04em', color: '#f8fbff' }}>
              KANQKA
            </div>

            <div style={{ display: 'flex', gap: '18px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link to="/" style={{ textDecoration: 'none', color: '#f8fbff', fontWeight: 700 }}>
                Home
              </Link>
              <a href="#features" style={{ textDecoration: 'none', color: '#cbd5e1', fontWeight: 600 }}>
                Features
              </a>
              <a href="#pricing" style={{ textDecoration: 'none', color: '#cbd5e1', fontWeight: 600 }}>
                Pricing
              </a>
              <a href="#contact" style={{ textDecoration: 'none', color: '#cbd5e1', fontWeight: 600 }}>
                Contact
              </a>
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
      <TrustedBy />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #091827 0%, #101f39 46%, #172a44 100%)',
        borderRadius: '28px',
        padding: '70px 42px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '28px',
        border: '1px solid rgba(148, 163, 184, 0.18)',
        boxShadow: '0 24px 80px rgba(2, 6, 23, 0.6)',
      }}
    >
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(96, 165, 250, 0.14)',
            border: '1px solid rgba(147, 197, 253, 0.3)',
            padding: '9px 16px',
            borderRadius: '999px',
            fontSize: '12px',
            letterSpacing: '1.4px',
            textTransform: 'uppercase',
            color: '#dbeafe',
            marginBottom: '18px',
          }}
        >
          AI-powered operating system
        </div>

        <h1 style={{ fontSize: '3.5rem', margin: 0, marginBottom: '18px', lineHeight: 1.05, color: '#f8fbff' }}>
          Build a smarter business with KANQKA
        </h1>

        <p
          style={{
            margin: 0,
            maxWidth: '630px',
            fontSize: '1.08rem',
            lineHeight: '1.85',
            color: '#cbd5e1',
          }}
        >
          Manage work, automate daily operations, and unify your team in one elegant platform designed for speed, clarity, and performance.
        </p>

        <div style={{ marginTop: '30px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <button
            style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
              color: '#08111e',
              border: 'none',
              borderRadius: '12px',
              padding: '15px 24px',
              fontWeight: 900,
              cursor: 'pointer',
              boxShadow: '0 12px 30px rgba(96, 165, 250, 0.45)',
            }}
          >
            Start free trial
          </button>
          <button
            style={{
              background: 'transparent',
              color: '#e5eefb',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: '12px',
              padding: '15px 24px',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            Book demo
          </button>
        </div>
      </div>

      <div
        style={{
          flex: '0 0 370px',
          background: 'rgba(148, 163, 184, 0.08)',
          border: '1px solid rgba(148, 163, 184, 0.18)',
          borderRadius: '22px',
          padding: '18px',
          boxShadow: '0 18px 50px rgba(2, 6, 23, 0.45)',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #edf3ff 100%)',
            borderRadius: '18px',
            padding: '18px',
            color: '#0f172a',
          }}
        >
          <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '14px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Team overview
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px' }}>
            <div style={{ background: '#eff6ff', borderRadius: '14px', padding: '16px' }}>
              <div style={{ fontSize: '12px', color: '#475569' }}>Projects</div>
              <div style={{ fontSize: '26px', fontWeight: 900 }}>24</div>
            </div>
            <div style={{ background: '#ecfeff', borderRadius: '14px', padding: '16px' }}>
              <div style={{ fontSize: '12px', color: '#475569' }}>Tasks</div>
              <div style={{ fontSize: '26px', fontWeight: 900 }}>184</div>
            </div>
            <div style={{ background: '#fef3c7', borderRadius: '14px', padding: '16px' }}>
              <div style={{ fontSize: '12px', color: '#475569' }}>Users</div>
              <div style={{ fontSize: '26px', fontWeight: 900 }}>12</div>
            </div>
            <div style={{ background: '#f3e8ff', borderRadius: '14px', padding: '16px' }}>
              <div style={{ fontSize: '12px', color: '#475569' }}>Uptime</div>
              <div style={{ fontSize: '26px', fontWeight: 900 }}>99%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  const brands = ['Nova', 'Apex', 'Pulse', 'Northstar', 'Vertex'];

  return (
    <section style={{ margin: '34px 0 14px', textAlign: 'center' }}>
      <div style={{ color: '#94a3b8', fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '18px' }}>
        Trusted by ambitious teams
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        {brands.map((brand) => (
          <div
            key={brand}
            style={{
              background: 'rgba(148, 163, 184, 0.08)',
              border: '1px solid rgba(148, 163, 184, 0.14)',
              borderRadius: '999px',
              padding: '10px 18px',
              color: '#dfeaf8',
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      title: 'Workflow automation',
      text: 'Create fast, flexible workflows that remove bottlenecks and keep your team moving.',
    },
    {
      title: 'Collaboration hub',
      text: 'Give every team member a shared view of tasks, timelines, and decisions in one place.',
    },
    {
      title: 'Actionable analytics',
      text: 'Turn performance data into clear actions with dashboards that are easy to understand.',
    },
  ];

  return (
    <section id="features" style={{ margin: '58px 0 64px' }}>
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <div style={{ color: '#7dd3fc', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
          Features
        </div>
        <h2 style={{ margin: '10px 0 0', fontSize: '2.5rem', color: '#f8fbff' }}>Everything you need to scale</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '22px' }}>
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              background: 'rgba(15, 23, 42, 0.9)',
              border: '1px solid rgba(148, 163, 184, 0.14)',
              borderRadius: '20px',
              padding: '28px 24px',
              boxShadow: '0 18px 42px rgba(15, 23, 42, 0.32)',
            }}
          >
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                marginBottom: '18px',
              }}
            />
            <h3 style={{ margin: '0 0 12px', fontSize: '1.35rem', color: '#f8fbff' }}>{item.title}</h3>
            <p style={{ margin: 0, color: '#cbd5e1', lineHeight: 1.75 }}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$19',
      features: ['1 workspace', 'Unlimited tasks', 'Basic analytics'],
      accent: false,
    },
    {
      name: 'Growth',
      price: '$39',
      features: ['Unlimited projects', 'Automation flows', 'Priority support'],
      accent: true,
    },
    {
      name: 'Scale',
      price: '$79',
      features: ['Custom workflows', 'Advanced permissions', 'Dedicated onboarding'],
      accent: false,
    },
  ];

  return (
    <section id="pricing" style={{ margin: '20px 0 64px' }}>
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <div style={{ color: '#7dd3fc', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
          Pricing
        </div>
        <h2 style={{ margin: '10px 0 0', fontSize: '2.5rem', color: '#f8fbff' }}>Choose your plan</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '22px' }}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            style={{
              background: plan.accent ? 'linear-gradient(135deg, #111827 0%, #1e293b 100%)' : 'rgba(15, 23, 42, 0.82)',
              color: '#f8fbff',
              borderRadius: '22px',
              padding: '28px 24px',
              boxShadow: '0 18px 44px rgba(2, 6, 23, 0.38)',
              border: plan.accent ? '1px solid rgba(96, 165, 250, 0.45)' : '1px solid rgba(148, 163, 184, 0.18)',
            }}
          >
            <div style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '12px' }}>{plan.name}</div>
            <div style={{ fontSize: '2.6rem', fontWeight: 900, marginBottom: '18px' }}>
              {plan.price}<span style={{ fontSize: '0.9rem', opacity: 0.7 }}>/mo</span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2.2, color: plan.accent ? '#dbeafe' : '#cbd5e1' }}>
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>

            <button
              style={{
                width: '100%',
                marginTop: '24px',
                padding: '12px 16px',
                borderRadius: '12px',
                border: 'none',
                background: plan.accent ? '#f8fbff' : '#60a5fa',
                color: plan.accent ? '#0f172a' : '#08111e',
                fontWeight: 900,
                cursor: 'pointer',
              }}
            >
              Choose plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { quote: 'KANQKA gave our team clarity, speed, and a better way to collaborate every single day.', name: 'Maya C.' },
    { quote: 'We upgraded our workflow in a few weeks and immediately saw less friction across projects.', name: 'Daniel K.' },
    { quote: 'The platform feels premium, clear, and fast — exactly what a growing business needs.', name: 'Sarah M.' },
  ];

  return (
    <section style={{ margin: '20px 0 64px' }}>
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <div style={{ color: '#7dd3fc', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
          Testimonials
        </div>
        <h2 style={{ margin: '10px 0 0', fontSize: '2.5rem', color: '#f8fbff' }}>Loved by modern teams</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '22px' }}>
        {items.map((item) => (
          <div
            key={item.name}
            style={{
              background: 'rgba(15, 23, 42, 0.82)',
              border: '1px solid rgba(148, 163, 184, 0.14)',
              borderRadius: '20px',
              padding: '28px 22px',
              boxShadow: '0 18px 40px rgba(15, 23, 42, 0.2)',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '10px', color: '#7dd3fc' }}>“</div>
            <p style={{ margin: '0 0 18px', color: '#dbeafe', lineHeight: 1.8 }}>{item.quote}</p>
            <strong style={{ color: '#f8fbff' }}>{item.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" style={{ margin: '20px 0 80px' }}>
      <div
        style={{
          background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
          borderRadius: '26px',
          padding: '40px 28px',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(96, 165, 250, 0.35)',
        }}
      >
        <h2 style={{ margin: '0 0 14px', fontSize: '2.5rem', color: '#08111e' }}>Ready to build a smarter workflow?</h2>
        <p style={{ margin: '0 0 22px', color: '#10213a', fontWeight: 600 }}>
          Start with KANQKA and turn complexity into momentum.
        </p>

        <button
          style={{
            background: '#08111e',
            color: '#f8fbff',
            padding: '14px 22px',
            borderRadius: '12px',
            border: 'none',
            fontWeight: 900,
            cursor: 'pointer',
          }}
        >
          Start free trial
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: '#020917',
        color: '#dbeafe',
        padding: '24px 20px 34px',
        textAlign: 'center',
        borderTop: '1px solid rgba(148, 163, 184, 0.14)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '8px' }}>
          <strong style={{ color: '#f8fbff' }}>Created by Ouichou ABD</strong>
        </div>

        <div style={{ marginBottom: '8px' }}>
          Facebook: <strong style={{ color: '#f8fbff' }}>Abdel David</strong>
        </div>

        <div>
          Email:{' '}
          <a href="mailto:adndvd063@gmail.com" style={{ color: '#f8fbff', textDecoration: 'none' }}>
            adndvd063@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
