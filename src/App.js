import React, { useEffect, useState } from 'react';
import './App.css';

const TERMINAL_LINES = [
  { label: 'QA Experience', value: '8+ years', status: 'pass' },
  { label: 'Manual Testing', value: 'expert', status: 'pass' },
  { label: 'Test Automation (Cypress)', value: 'configured', status: 'pass' },
  { label: 'Performance Testing (JMeter)', value: 'configured', status: 'pass' },
  { label: 'API Test Coverage', value: '96%', status: 'pass' },
  { label: 'Untested edge cases', value: '0 remaining', status: 'pass' },
];

function TerminalPanel() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= TERMINAL_LINES.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 420);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <div className="terminal" role="img" aria-label="Simulated QA test suite, all checks passing">
      <div className="terminal-bar">
        <span className="dot dot-red" />
        <span className="dot dot-amber" />
        <span className="dot dot-green" />
        <span className="terminal-title">qa-consultation-suite.spec</span>
      </div>
      <div className="terminal-body">
        <p className="terminal-cmd">$ run --suite=quality-first --consultant=younes</p>
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <p className="terminal-line" key={i}>
            <span className={`badge badge-${line.status}`}>
              {line.status === 'pass' ? 'PASS' : 'FAIL'}
            </span>
            <span className="terminal-label">{line.label}</span>
            <span className="terminal-value">{line.value}</span>
          </p>
        ))}
        {visibleLines >= TERMINAL_LINES.length && (
          <p className="terminal-summary">6 passed, 0 failed — suite ready for client engagement</p>
        )}
      </div>
    </div>
  );
}

function QualityFirstWebsite() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <div className="logo-mark">QF</div>
          <div>
            <h1 className="company-name">QualityFirst</h1>
            <p className="tagline">QA Consultation, backed by 8+ years in the field</p>
          </div>
        </div>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#about">Experience</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">QA Consultation</span>
          <h2>
            Quality problems are cheaper to catch<br />before your users find them.
          </h2>
          <p>
            I've spent 8+ years inside QA teams and independent engagements — manual
            testing, Cypress automation, JMeter performance work, and API validation —
            so you get a second pair of eyes that already knows where software breaks.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Book a consultation</a>
            <a href="#services" className="btn btn-ghost">See what I test</a>
          </div>
        </div>
        <TerminalPanel />
      </section>

      <section className="stats">
        <div className="stat">
          <span className="stat-number">8+</span>
          <span className="stat-label">Years in QA</span>
        </div>
        <div className="stat">
          <span className="stat-number">Cypress</span>
          <span className="stat-label">Automation & API testing</span>
        </div>
        <div className="stat">
          <span className="stat-number">JMeter</span>
          <span className="stat-label">Performance testing</span>
        </div>
        <div className="stat">
          <span className="stat-number">EN·FR·AR</span>
          <span className="stat-label">Client communication</span>
        </div>
      </section>

      <section id="services" className="services">
        <span className="eyebrow">Services</span>
        <h3>QA consultation, scoped to what you actually need</h3>
        <div className="card-grid">
          <div className="card">
            <h4>Test Strategy Consulting</h4>
            <p>An outside audit of your current test coverage, risk areas, and where
              manual effort should give way to automation.</p>
          </div>
          <div className="card">
            <h4>Manual Testing</h4>
            <p>Structured exploratory and scripted testing for web and API products,
              with clear, reproducible bug reports.</p>
          </div>
          <div className="card">
            <h4>Test Automation (Cypress)</h4>
            <p>End-to-end and API test suites built to survive real product changes,
              not just pass on day one.</p>
          </div>
          <div className="card">
            <h4>Performance Testing (JMeter)</h4>
            <p>Load and stress testing to find the ceiling before your users do,
              with plain-language reporting for stakeholders.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <span className="eyebrow">Experience</span>
        <h3>8+ years finding what breaks, before release</h3>
        <p className="about-body">
          I work as an independent QA consultant after years testing production systems
          — data aggregation pipelines, financial reporting tools, and customer-facing
          applications. That background means I'm not just running scripts; I'm asking
          whether the numbers, the states, and the edge cases actually hold up under
          real conditions.
        </p>
        <ul className="about-list">
          <li>Manual & exploratory testing across web and API products</li>
          <li>Cypress automation for regression and API test suites</li>
          <li>JMeter performance and load testing</li>
          <li>Data integrity and aggregation validation</li>
          <li>Clear, client-facing test reporting — no jargon, no ambiguity</li>
        </ul>
      </section>

      <section id="process" className="process">
        <span className="eyebrow">Process</span>
        <h3>How an engagement runs</h3>
        <div className="process-grid">
          <div className="process-step">
            <span className="process-label">Scope</span>
            <p>A short call to understand your product, release cadence, and where quality is slipping.</p>
          </div>
          <div className="process-step">
            <span className="process-label">Test</span>
            <p>Manual passes, automated suites, or performance runs — built around what you actually need covered.</p>
          </div>
          <div className="process-step">
            <span className="process-label">Report</span>
            <p>Findings delivered in plain language, prioritized by risk, with reproducible steps for every issue.</p>
          </div>
          <div className="process-step">
            <span className="process-label">Handoff</span>
            <p>Test suites and documentation left in a state your team can run and extend without me.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <span className="eyebrow">Contact</span>
        <h3>Start with a consultation</h3>
        <div className="contact-grid">
          <p>→ qualityfirst.test@gmail.com</p>
          <p>→ 016665 304410</p>
          <p>→ Evening availability, GMT</p>
        </div>
        <a href="mailto:qualityfirst.test@gmail.com" className="btn btn-primary">Email me</a>
      </section>

      <footer className="footer">
        <p>&copy; 2026 QualityFirst — QA Consultation. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default QualityFirstWebsite;