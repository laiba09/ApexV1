import { useEffect } from "react";
import "./Contact.css";
import apexNavLogo from "./assets/apex-nav-logo.png";

function Contact() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".contact-reveal");

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => {
        element.classList.add("contact-reveal-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="contact-page">

      {/* NAVBAR */}
      <header className="contact-navbar">
        <a href="/" className="contact-logo-wrap">
          <img
            src={apexNavLogo}
            alt="APEX Road Network"
            className="contact-navbar-logo"
          />

          <span className="contact-logo-name">
            APEX ROAD NETWORK<span>.</span>
          </span>
        </a>

        <nav className="contact-nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
        </nav>

        <a href="/contact" className="contact-nav-button active">
          Contact Us
        </a>
      </header>


      {/* CONTACT */}
      <section className="contact-hero">

        <div className="contact-grid"></div>
        <div className="contact-glow"></div>

        <div className="contact-inner">

          {/* LEFT */}
          <div className="contact-heading contact-reveal">

            <div className="contact-eyebrow">
              <span></span>
              Get In Touch
            </div>

            <h1>
              LET'S
              <br />
              <span>CONNECT.</span>
            </h1>

            <p>
              Have a project in mind or need traffic engineering support?
              Get in touch with the APEX Road Network team.
            </p>

          </div>


          {/* RIGHT */}
          <div className="contact-details contact-reveal">

            <a
              href="tel:+61000000000"
              className="contact-item"
            >
              <div className="contact-item-number">01</div>

              <div className="contact-item-content">
                <span>Phone</span>
                <h2>04XX XXX XXX</h2>
              </div>

              <div className="contact-arrow">↗</div>
            </a>


            <a
              href="mailto:hello@apexroadnetwork.com.au"
              className="contact-item"
            >
              <div className="contact-item-number">02</div>

              <div className="contact-item-content">
                <span>Email</span>
                <h2>hello@apexroadnetwork.com.au</h2>
              </div>

              <div className="contact-arrow">↗</div>
            </a>

          </div>

        </div>


        <div className="contact-footer contact-reveal">
          <span>APEX ROAD NETWORK</span>

          <div></div>

          <span>NSW · ACT</span>
        </div>

      </section>

      {/* =====================================================
    FOOTER
====================================================== */}

<footer className="contact-site-footer">
  <div className="contact-footer-grid"></div>

  <div className="contact-site-footer-inner contact-reveal">

    <div className="contact-footer-top">

      <div className="contact-footer-brand">
        <a href="/" className="contact-footer-logo">
          APEX ROAD NETWORK<span>.</span>
        </a>

        <p>
          Practical traffic engineering and transport solutions designed
          to keep projects safe, compliant and moving.
        </p>
      </div>


      <div className="contact-footer-column">
        <span className="contact-footer-title">Navigation</span>

        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/projects">Projects</a>
      </div>


      <div className="contact-footer-column">
        <span className="contact-footer-title">Contact</span>

        <a href="tel:+61000000000">
          04XX XXX XXX
        </a>

        <a href="mailto:hello@apexroadnetwork.com.au">
          hello@apexroadnetwork.com.au
        </a>
      </div>

    </div>


    <div className="contact-footer-bottom">

      <span>
        © {new Date().getFullYear()} APEX Road Network
      </span>

      <span>
        NSW · ACT
      </span>

    </div>

  </div>
</footer>

    </main>
  );
}

export default Contact;