import { useEffect } from "react";
import abbaBg from "../assets/abba-bg.JPG";

export default function AbbaNight() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="abba-page">

      {/* ── HERO ── */}
      <section className="abba-hero" style={{ backgroundImage: `url(${abbaBg})` }}>
        <div className="abba-hero-overlay" />

        <div className="abba-hero-left">
          <div className="event-meta">
            <span className="pill pill-gold">Friday 26 June 2026</span>
            <span className="pill pill-outline">Limited capacity</span>
          </div>

          <p className="hero-eyebrow">MNC Events presents</p>

          <h1 className="abba-h1">
            ABBA Night<br />
            <span className="abba-h1-gold">Live Tribute</span><br />
            &amp; Swedish Feast
          </h1>

          <p className="hero-desc">
            A feel-good summer night of live ABBA hits, Swedish-themed food,
            dancing and proper event atmosphere at Ticehurst Village Hall.
          </p>

          <div className="cta-row">
            <a
              href="https://www.eventbrite.com/e/abba-night-live-tribute-swedish-feast-tickets-1988563271275"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Secure Tickets
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              View Facebook Event
            </a>
          </div>

          <p className="price-note">£37.50 per person · Ticehurst Village Hall</p>
        </div>


      </section>

      <div className="gold-divider" />

      {/* ── SCHEDULE ── */}
      <section className="schedule-section">
        <p className="section-label">The Evening</p>
        <h2 className="section-h2">How the night unfolds</h2>
        <p className="section-body">
          Three acts, one village hall, zero chance of sitting still.
        </p>
        <div className="schedule-grid">
          <div className="sched-item">
            <div className="sched-time">6PM</div>
            <div className="sched-name">Arrivals &amp; Drinks</div>
            <div className="sched-desc">Doors open, bar is live, pre-show atmosphere kicks in</div>
          </div>
          <div className="sched-item">
            <div className="sched-time">6:30</div>
            <div className="sched-name">Swedish Feast</div>
            <div className="sched-desc">Supa Doopa Smörgåsbord — smoked dips, ABBA-rbeque surf &amp; turf, traditional cheesecake</div>
          </div>
          <div className="sched-item">
            <div className="sched-time">8:30</div>
            <div className="sched-name">ABBA On Show</div>
            <div className="sched-desc">Two 50-minute live sets plus encore. The big songs, the sparkle, the singalongs</div>
          </div>
        </div>
      </section>

      {/* ── THE SHOW ── */}
      <section className="show-section">
        <div className="split-section">
          <div className="split-text">
            <p className="section-label">The Show</p>
            <h2 className="section-h2">ABBA On Show,<br />live on stage</h2>
            <p className="section-body">
              A full four-piece tribute performance with two 50-minute sets plus encore.
              Expect the big songs, the sparkle, the singalongs and a room full of people
              who absolutely know the words.
            </p>
            <p className="show-italic">If you love ABBA, you will love this night.</p>
          </div>

          <div className="video-wrap">
            <iframe
              title="ABBA On Show — Tribute Promo"
              src="https://player.vimeo.com/video/1173742728?h=92cae01a73"
              frameBorder="0"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* ── WHAT TO EXPECT ── */}
      <section className="expect-section">
        <p className="section-label">What to expect</p>
        <h2 className="section-h2">A proper night out</h2>
        <div className="expect-grid">
          {[
            { n: "01", title: "Full live ABBA tribute band", desc: "Two full sets plus encore. No backing tracks. No corners cut." },
            { n: "02", title: "Swedish-themed feast", desc: "Smoked dips, ABBA-rbeque surf & turf, traditional cheesecake with berries and a nip of Abbasolute." },
            { n: "03", title: "Bar open throughout", desc: "Paid bar available before, between and after the show." },
            { n: "04", title: "Dancefloor and party atmosphere", desc: "Big songs, big choruses, no awkward sitting still. Perfect for groups, couples and big nights out." },
          ].map((item) => (
            <div className="expect-card" key={item.n}>
              <div className="expect-number">{item.n}</div>
              <div className="expect-title">{item.title}</div>
              <div className="expect-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VENUE ── */}
      <section className="venue-section">
        <p className="section-label">The Venue</p>
        <div className="venue-card">
          <div className="venue-info">
            <div className="venue-name">Ticehurst Village Hall</div>
            <p className="venue-desc">
              A spacious local venue transformed for the night into a lively event space
              with stage, full lighting rig, bar and seating. Easy to get to, with the
              feel of a proper big-show event.
            </p>
            <p className="venue-address">B2099, Wadhurst, TN5 7BB · Easy access, parking nearby</p>
          </div>
          <a
            href="https://maps.google.com/?q=Ticehurst+Village+Hall+TN5+7BB"
            target="_blank"
            rel="noreferrer"
            className="map-placeholder"
          >
            <svg viewBox="0 0 24 24" fill="#E8C84A" width="28" height="28">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" opacity="0.5" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Get directions</span>
          </a>
        </div>
      </section>

      {/* ── TICKETS ── */}
      <section className="ticket-section" id="tickets">
        <div className="ticket-glow" />
        <div className="ticket-content">
          <p className="section-label">Tickets</p>
          <h2 className="section-h2 white">Don't leave it too late</h2>

          <div className="ticket-price-display">
            <sup>£</sup>37.50
          </div>
          <p className="ticket-caption">
            Per person · Includes Swedish feast · Limited capacity
          </p>

          <div className="urgency-bar">
            <span className="urgency-dot" />
            Strong early interest — this will sell out
          </div>

          <a
            href="https://www.eventbrite.com/e/abba-night-live-tribute-swedish-feast-tickets-1988563271275"
            target="_blank"
            rel="noreferrer"
            className="btn-primary btn-large"
          >
            Get Tickets Now
          </a>
          <p className="ticket-fine">Once they're gone, they're gone.</p>
        </div>
      </section>

    </div>
  );
}
