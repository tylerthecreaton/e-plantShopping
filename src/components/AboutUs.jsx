import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <main className="landing-page background-image">
      <div className="overlay" />
      <div className="about-us-container">
        <section className="landing-content">
          <h1>Welcome to Paradise Nursery</h1>
          <p>
            Paradise Nursery sources resilient, pesticide-free indoor plants and
            pairs them with simple care plans so anyone can build a calming
            green corner at home or at work.
          </p>
          <p>
            Our mission is to make plant ownership joyful: we curate collections
            by light level, deliver detailed care instructions, and offer
            on-call stylists to help you refresh any space.
          </p>
          <Link className="cta-btn" to="/products">
            Get Started
          </Link>
        </section>
      </div>
    </main>
  );
}

export default AboutUs;
