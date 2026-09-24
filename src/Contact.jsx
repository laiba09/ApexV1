import { useEffect, useState } from "react";
import "./Contact.css";
import apexNavLogo from "./assets/apex-nav-logo.png";


function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const revealElements =
      document.querySelectorAll(".contact-reveal");

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => {
        element.classList.add(
          "contact-reveal-visible"
        );
      });

      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                "contact-reveal-visible"
              );

              observer.unobserve(
                entry.target
              );
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


  /* =========================================================
     CLOSE MOBILE MENU ON DESKTOP
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850) {
        setMenuOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);


  return (
    <main className="contact-page">


      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="contact-navbar">


        {/* LOGO */}

        <a
          href="/"
          className="contact-logo-wrap"
        >
          <img
            src={apexNavLogo}
            alt="APEX Road Network"
            className="contact-navbar-logo"
          />

          <span className="contact-logo-name">
            APEX ROAD NETWORK<span>.</span>
          </span>
        </a>


        {/* NAV LINKS */}

        <nav
          className={`contact-nav-links ${
            menuOpen
              ? "contact-nav-links-open"
              : ""
          }`}
        >
          <a
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="/services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>

          <a
            href="/projects"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="/contact"
            className="contact-mobile-contact-link active"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </nav>


        {/* DESKTOP CONTACT */}

        <a
          href="/contact"
          className="contact-nav-button contact-desktop-contact active"
        >
          Contact Us
        </a>


        {/* MOBILE GRID BUTTON */}

        <button
          type="button"
          className={`contact-mobile-grid-button ${
            menuOpen ? "open" : ""
          }`}
          onClick={() =>
            setMenuOpen((current) => !current)
          }
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>

      </header>


      {/* CONTACT */}
     <section className="contact-hero">

  <div className="contact-inner">

    {/* LEFT */}
    <div className="contact-heading contact-reveal">

      <div className="contact-eyebrow">
        <span></span>
        Contact
      </div>

      <h1>
        CONTACT APEX
        <br />
        <span>ROAD NETWORK.</span>
      </h1>

      <p className="contact-intro">
        Need traffic engineering support for an upcoming project?
        Speak directly with our team about your project requirements,
        documentation or traffic management needs.
      </p>

      {/* <div className="contact-service-area">
        <span>Based in Sydney</span>
        <span>NSW & ACT Projects</span>
      </div> */}

    </div>


    {/* RIGHT */}
    <div className="contact-panel contact-reveal">

      <div className="contact-panel-heading">
        <span>Project enquiries</span>
        <h2>Speak with our team</h2>
        <p>
          For project enquiries, quotes or general information,
          contact APEX Road Network directly.
        </p>
      </div>


      <a
        href="tel:+61499516282"
        className="contact-method"
      >
        <div className="contact-method-label">
          Phone
        </div>

        <div className="contact-method-value">
          0499 516 282
        </div>

        <span className="contact-method-arrow">
          ↗
        </span>
      </a>


      <a
        href="mailto:info@apexroadnetwork.com.au"
        className="contact-method"
      >
        <div className="contact-method-label">
          Email
        </div>

        <div className="contact-method-value contact-email">
          info@apexroadnetwork.com.au
        </div>

        <span className="contact-method-arrow">
          ↗
        </span>
      </a>

    </div>

  </div>

</section>


        
{/* =====================================================
    FOOTER — SAME AS THE OTHER PAGES
===================================================== */}

<footer className="footer">

  <div className="footer-grid"></div>

  <div className="footer-inner">

    <div className="footer-top">

      {/* BRAND */}

      <div className="footer-brand">

        <a
          href="/"
          className="footer-logo"
        >
          APEX ROAD NETWORK<span>.</span>
        </a>

        <p>
          Practical traffic engineering and transport solutions designed
          to keep projects safe, compliant and moving.
        </p>

      </div>


      {/* NAVIGATION */}

      <div className="footer-column">

        <h3>
          Navigation
        </h3>

        <nav className="footer-links">

          <a href="/">
            Home
          </a>

          <a href="/about">
            About
          </a>

          <a href="/services">
            Services
          </a>

          <a href="/projects">
            Projects
          </a>

          <a href="/contact">
            Contact
          </a>

        </nav>

      </div>


      {/* SERVICES */}

      <div className="footer-column">

        <h3>
          Services
        </h3>

        <div className="footer-links">

          <a href="/services">
            Traffic Staging Design
          </a>

          <a href="/services">
            Traffic Modelling
          </a>

          <a href="/services">
            Traffic Impact Statments
          </a>

          <a href="/services">
            Traffic Guidance Schemes
          </a>
          <a href="/services">
                  & More
                </a>

        </div>

      </div>


      {/* CONTACT */}

      <div className="footer-column footer-contact">

        <h3>
          Contact
        </h3>

        <a href="mailto:info@apexroadnetwork.com.au">
          info@apexroadnetwork.com.au
        </a>

        <a href="tel:+610499516282">
          0499 516 282
        </a>

        <p>
          Sydney, New South Wales
        </p>

      </div>

    </div>


    {/* BOTTOM */}

    <div className="footer-bottom">

      <p>
        © {new Date().getFullYear()} APEX Road Network. All rights reserved.
      </p>

      <div className="footer-bottom-links">

        <a href="#privacy">
          Privacy Policy
        </a>

        <a href="#terms">
          Terms
        </a>

      </div>

    </div>

  </div>

</footer>

    </main>
  );
}

export default Contact;