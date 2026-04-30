import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AbbaNight from "./pages/AbbaNight.jsx";
import logo from "./assets/mnc-logo.png";

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="brand">
        <img src={logo} alt="MNC Events logo" />
        <span>MNC Events</span>
      </Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/abba-night">ABBA Night</Link>
        <a
          href="https://www.eventbrite.com/e/abba-night-live-tribute-swedish-feast-tickets-1988563271275"
          target="_blank"
          rel="noreferrer"
        >
          Tickets
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      © {new Date().getFullYear()} MNC Events. Great nights aren’t planned by accident.
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abba-night" element={<AbbaNight />} />
      </Routes>

      <Footer />
    </>
  );
}