import React from 'react';
import Button from './Button/Button.jsx';
import Card from './Card/Card.jsx';
import './PurposeCompanies.css';

function PurposeCompanies () {
  return (
    <>
      <section className="trusted" aria-labelledby="trusted-title">
        <div className="container">
          <h2 id="trusted-title">We’re trusted by</h2>
          <div className="logo-grid">
            {[
              'Turqoise Health',
              'Pure Synergy',
              'Scratch Foundation',
              'Paytient',
              'Outschool',
              'Hook',
              'Baton',
              'Casper',
              'Kickstarter',
              'Etsy',
            ].map(name => (
              <div key={name} className="logo-pill">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="services"
        aria-labelledby="services-title"
      >
        <div className="container">
          <h2 id="services-title" className="section-heading">
            Building teams. Building businesses.
          </h2>
          <p className="section-sub">
            We’re experienced company builders who know what it takes to find
            the people needed to build them.
          </p>
          <div className="card-grid">
            <Card title="Executive Search">
              Identify experienced operators who can level you up.
            </Card>
            <Card title="Next-Gen Search">
              Find emerging leaders and builders for startups and scale-ups.
            </Card>
            <Card title="Advisory Network">
              Tap proven advisors and mentors to accelerate early-stage growth.
            </Card>
            <Card title="Talent Strategy Consulting">
              Shape and align talent strategy to your unique culture.
            </Card>
          </div>
        </div>
      </section>

      <section className="approach" aria-labelledby="approach-title">
        <div className="container">
          <h2 id="approach-title" className="section-heading">
            The right people for the right mission
          </h2>
          <p className="section-sub">
            A human-centered framework grounded in your culture, goals, and
            needs.
          </p>
          <div className="pillars">
            <article className="pillar">
              <h3>Purpose</h3>
              <p>Clarity on the impact you aim to create.</p>
            </article>
            <article className="pillar">
              <h3>Mission & Growth</h3>
              <p>Alignment on outcomes and how you’ll scale.</p>
            </article>
            <article className="pillar">
              <h3>Culture</h3>
              <p>Values and behaviors that make your team thrive.</p>
            </article>
            <article className="pillar">
              <h3>People & Context</h3>
              <p>Roles, stage, and collaboration patterns that matter.</p>
            </article>
            <article className="pillar">
              <h3>Talent</h3>
              <p>Skills, aptitude, and potential to achieve the mission.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="stories" aria-labelledby="stories-title">
        <div className="container">
          <h2 id="stories-title" className="section-heading">
            Stories
          </h2>
          <div className="list">
            <article className="story">
              <div className="meta">11.19.2024 · 3 min</div>
              <h3>Finding Your Rhythm: Purpose Talent's New Beat</h3>
            </article>
            <article className="story">
              <div className="meta">8.2.2022 · 4 min</div>
              <h3>Two Year Updates</h3>
            </article>
            <article className="story">
              <div className="meta">7.20.2020 · 5 min</div>
              <h3>Building Companies That Aspire To Benefit Everyone</h3>
            </article>
          </div>
        </div>
      </section>

      <section className="values" aria-labelledby="values-title">
        <div className="container">
          <h2 id="values-title" className="section-heading">
            We love partnering with businesses who are
          </h2>
          <div className="values-grid">
            {[
              'Driven by impact',
              'Breaking new ground',
              'Putting people first',
              'Building great teams',
              'Growing ethically',
              'Intentional & transparent',
            ].map(v => (
              <div key={v} className="value">
                {v}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact" aria-labelledby="contact-title">
        <div className="container">
          <h2 id="contact-title" className="section-heading">
            Find your people
          </h2>
          <blockquote>
            “They tailor their approach to our unique culture rather than
            following a cookie-cutter process, and that leads to better
            results.” — Amir Nathoo, CEO @ Outschool
          </blockquote>
          <Button 
            variant="primary"
            onClick={() => window.open('mailto:andrew@purposetalent.xyz', '_blank')}
          >
            andrew@purposetalent.xyz
          </Button>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div>New York © 2020–2024 · Purpose Talent, Inc.</div>
            <nav className="footer-links">
              <a href="#services">For companies</a>
              <a href="#">For candidates</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

export default PurposeCompanies;
