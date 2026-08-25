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
                <h2>0499 516 282</h2>
              </div>

              <div className="contact-arrow"><span className="text-arrow">↗︎</span></div>
            </a>


            <a
              href="mailto:hello@apexroadnetwork.com.au"
              className="contact-item"
            >
              <div className="contact-item-number">02</div>

              <div className="contact-item-content">
                <span>Email</span>
                <h2>harry@apexroadnetwork.com.au</h2>
              </div>

              <div className="contact-arrow"><span className="text-arrow">↗︎</span></div>
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
            Traffic Management Plans
          </a>

          <a href="/services">
            Traffic Control Plans
          </a>

          <a href="/services">
            Road Safety Audits
          </a>

          <a href="/services">
            Traffic Impact Assessments
          </a>

        </div>

      </div>


      {/* CONTACT */}

      <div className="footer-column footer-contact">

        <h3>
          Contact
        </h3>

        <a href="mailto:harry@apexroadnetwork.com.au">
          harry@apexroadnetwork.com.au
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