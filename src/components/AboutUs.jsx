import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <main className="landing-page">
      <div className="overlay" />
      <section className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>
          We bring fresh, healthy houseplants to your home and workspace. Explore
          hand-picked greenery that is beautiful, affordable, and easy to care for.
        </p>
        <Link className="cta-btn" to="/products">
          Get Started
        </Link>
      </section>
    </main>
  );
}

export default AboutUs;
