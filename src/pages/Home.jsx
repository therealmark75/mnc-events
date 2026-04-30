import { Link } from "react-router-dom";
import banner from "../assets/mnc-banner.png";

export default function Home() {
  return (
    <>
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="home-hero-overlay">
          <div className="hero-content">
            <p className="eyebrow">Live music. Social events. Unforgettable experiences.</p>

            <h1>Great nights aren’t planned by accident.</h1>

            <p className="lead">
              MNC Events creates memorable live events, themed nights and standout
              local experiences, bringing people together through atmosphere,
              detail and proper occasion.
            </p>

            <div className="button-row">
              <Link className="button primary" to="/abba-night">
                View ABBA Night
              </Link>

              <a
                className="button secondary"
                href="https://www.eventbrite.com/e/abba-night-live-tribute-swedish-feast-tickets-1988563271275"
                target="_blank"
                rel="noreferrer"
              >
                Buy Tickets
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}