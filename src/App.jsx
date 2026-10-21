import { Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#f8fafc',
        color: '#0f172a',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ flex: 1, padding: '40px 20px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <nav
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '18px 20px',
              borderRadius: '16px',
              background: '#fff',
              boxShadow: '0 8px 28px rgba(15, 23, 42, 0.06)',
              marginBottom: '36px',
            }}
          >
            <div style={{ fontWeight: 900, fontSize: '1.7rem', color: '#111827' }}>
              KANQKA
            </div>

            <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
              <Link to="/" style={{ textDecoration: 'none', color: '#0f172a', fontWeight: 700 }}>
                Home
              </Link>
              <Link to="#features" style={{ textDecoration: 'none', color: '#475569', fontWeight: 600 }}>
                Features
              </Link>
              <Link to="#pricing" style={{ textDecoration: 'none', color: '#475569', fontWeight: 600 }}>
                Pricing
              </Link>
              <Link to="#contact" style={{ textDecoration: 'none', color: '#475569', fontWeight: 600 }}>
                Contact
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
      <Stats />
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
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#fff',
        borderRadius: '28px',
        padding: '64px 44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '28px',
        boxShadow: '0 24px 60px rgba(15, 23, 42, 0.2)',
      }}
    >
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
            padding: '8px 14px',
            borderRadius: '999px',
            fontSize: '12px',
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            marginBottom: '18px',
          }}
        >
          Smart workflow platform
        </div>

        <h1 style={{ fontSize: '3.2rem', margin: 0, marginBottom: '16px', lineHeight: 1.1 }}>
          Run your business with KANQKA
        </h1>

        <p
          style={{
            margin: 0,
            maxWidth: '620px',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#cbd5e1',
          }}
        >
          Manage tasks, automate workflow, and improve team productivity from one clean and powerful platform built for modern organizations.
        </p>

        <div style={{ marginTop: '30px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <button
            style={{
              background: '#f8fafc',
              color: '#0f172a',
              border: 'none',
              borderRadius: '12px',
              padding: '14px 22px',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            Get Started
          </button>
          <button
            style={{
              background: 'transparent',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.35)',
              borderRadius: '12px',
              padding: '14px 22px',
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            Book Demo
          </button>
        </div>
      </div>

      <div
        style={{
          flex: '0 0 360px',
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '20px',
          padding: '20px',
        }}
      >
        <div
          style={{
            background: '#fff',
            borderRadius: '18px',
            padding: '16px',
            color: '#111827',
          }}
        >
          <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>Performance</div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
            }}
          >
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

function Stats() {
  const stats = [
    { label: 'Active teams', value: '1.2k+' },
    { label: 'Tasks completed', value: '340k' },
    { label: 'Faster delivery', value: '3.4x' },
    { label: 'Customer rating', value: '4.9/5' },
  ];

  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '20px', margin: '48px 0' }}>
      {stats.map((item) => (
        <div
          key={item.label}
          style={{
            background: '#fff',
            borderRadius: '18px',
            padding: '22px 18px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)',
          }}
        >
          <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a' }}>{item.value}</div>
          <div style={{ fontSize: '0.95rem', color: '#475569', marginTop: '6px' }}>{item.label}</div>
        </div>
      ))}
    </section>
  );
}

function Features() {
  const items = [
    {
      title: 'Automation',
      text: 'Reduce repetitive manual work with smart workflows and process automation.',
    },
    {
      title: 'Collaboration',
      text: 'Bring your team together with shared tasks, updates, comments, and visibility.',
    },
    {
      title: 'Real-time Insights',
      text: 'Track delivery, performance, and team progress using simple dashboard reporting.',
    },
  ];

  return (
    <section id="features" style={{ margin: '20px 0 60px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.4rem', marginBottom: '28px' }}>Why KANQKA</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '22px' }}>
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              background: '#fff',
              borderRadius: '18px',
              padding: '28px 22px',
              boxShadow: '0 10px 32px rgba(15, 23, 42, 0.05)',
            }}
          >
            <div
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: '#dbeafe',
                marginBottom: '18px',
              }}
            />
            <h3 style={{ margin: '0 0 12px', fontSize: '1.35rem' }}>{item.title}</h3>
            <p style={{ margin: 0, color: '#475569', lineHeight: 1.7 }}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { name: 'Starter', price: '$19', features: ['1 workspace', 'Unlimited tasks', 'Basic analytics'] },
    { name: 'Growth', price: '$39', features: ['Unlimited projects', 'Advanced automation', 'Priority support'], featured: true },
    { name: 'Scale', price: '$79', features: ['Custom workflows', 'Team permissions', 'Dedicated onboarding'] },
  ];

  return (
    <section id="pricing" style={{ margin: '20px 0 60px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.4rem', marginBottom: '26px' }}>Pricing</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '22px' }}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            style={{
              background: plan.featured ? '#0f172a' : '#fff',
              color: plan.featured ? '#fff' : '#0f172a',
              borderRadius: '20px',
              padding: '28px 24px',
              boxShadow: '0 12px 32px rgba(15, 23, 42, 0.08)',
              border: plan.featured ? 'none' : '1px solid #e2e8f0',
            }}
          >
            <div style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '12px' }}>{plan.name}</div>
            <div style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: '18px' }}>
              {plan.price}<span style={{ fontSize: '0.9rem', opacity: 0.7 }}>/mo</span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2.2, color: plan.featured ? '#e2e8f0' : '#475569' }}>
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
                background: plan.featured ? '#fff' : '#0f172a',
                color: plan.featured ? '#0f172a' : '#fff',
                fontWeight: 800,
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
    { quote: 'KANQKA helped us simplify work and improve delivery performance in just a few weeks.', name: 'Maya C.' },
    { quote: 'It feels simple, fast, and very professional for our growing team.', name: 'Daniel K.' },
    { quote: 'We finally have clarity across projects, tasks, and team communication.', name: 'Sarah M.' },
  ];

  return (
    <section style={{ margin: '20px 0 60px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.4rem', marginBottom: '28px' }}>What customers say</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '22px' }}>
        {items.map((item) => (
          <div
            key={item.name}
            style={{
              background: '#fff',
              borderRadius: '18px',
              padding: '28px 22px',
              boxShadow: '0 10px 28px rgba(15, 23, 42, 0.04)',
            }}
          >
            <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>“</div>
            <p style={{ margin: '0 0 18px', color: '#475569', lineHeight: 1.7 }}>{item.quote}</p>
            <strong>{item.name}</strong>
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
          background: 'linear-gradient(135deg, #dbeafe 0%, #e0f2fe 100%)',
          borderRadius: '24px',
          padding: '40px 28px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ margin: '0 0 14px', fontSize: '2.3rem' }}>Ready to simplify your workflow?</h2>
        <p style={{ margin: '0 0 22px', color: '#334155' }}>
          Start with KANQKA and build a faster, smarter team experience.
        </p>

        <button
          style={{
            background: '#0f172a',
            color: '#fff',
            padding: '14px 22px',
            borderRadius: '12px',
            border: 'none',
            fontWeight: 800,
            cursor: 'pointer',
          }}
        >
          Start Free Trial
        </button>
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
        marginTop: '30px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '8px' }}>
          <strong style={{ color: '#fff' }}>Created by Ouichou ABD</strong>
        </div>

        <div style={{ marginBottom: '8px' }}>
          Facebook: <strong style={{ color: '#fff' }}>Abdel David</strong>
        </div>

        <div>
          Email:{' '}
          <a href="mailto:adndvd063@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>
            adndvd063@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
