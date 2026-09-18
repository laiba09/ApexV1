import { useEffect, useState } from "react";
import "./About.css";

import apexNavLogo from "./assets/apex-nav-logo.png";
import aboutHero from "./assets/4_golden_hwy_meriwa.png";
import apexInterchange from "./assets/staging.png";
import missionRoad from "./assets/Bill.png";
import constructionVisual from "./assets/Project.png";


function About() {
  const [menuOpen, setMenuOpen] = useState(false);


  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  useEffect(() => {
    window.scrollTo(0, 0);

    const elements =
      document.querySelectorAll(".about-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add(
          "about-reveal-visible"
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
                "about-reveal-visible"
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

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  /* =========================================================
     CLOSE MOBILE MENU WHEN RETURNING TO DESKTOP
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
    <main className="about-page">


      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="about-navbar">


        {/* LOGO */}

        <a
          href="/"
          className="about-logo-wrap"
        >
          <img
            src={apexNavLogo}
            alt="APEX Road Network"
            className="about-navbar-logo-image"
          />

          <span className="about-logo-name">
            APEX ROAD NETWORK<span>.</span>
          </span>
        </a>


        {/* NAVIGATION */}

        <nav
          className={`about-nav-links ${
            menuOpen
              ? "about-nav-links-open"
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
            className="active"
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
            className="about-mobile-contact-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </nav>


        {/* DESKTOP CONTACT */}

        <a
          href="/contact"
          className="about-nav-button about-desktop-contact"
        >
          Contact Us
        </a>


        {/* MOBILE GRID BUTTON */}

        <button
          type="button"
          className={`about-mobile-grid-button ${
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


      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="about-hero">

        <div className="about-hero-image">
          <img
            src={aboutHero}
            alt="Sydney road network and Harbour Bridge"
          />
        </div>


        <div className="about-hero-overlay"></div>

        <div className="about-hero-grid"></div>


        <div className="about-hero-inner">

          <div className="about-hero-top about-reveal">

            <div className="about-hero-label">
              ABOUT APEX ROAD NETWORK
            </div>

          </div>


          <div className="about-hero-main">

            <div className="about-hero-heading about-reveal">

              <h1>
                WE DESIGN FOR
                <br />

                HOW ROADS
                <br />

                <span>
                  ACTUALLY WORK.
                </span>
              </h1>

            </div>


            <div className="about-hero-description about-reveal">

              <div className="about-hero-description-line"></div>

              <p>
                We deliver practical traffic engineering solutions shaped
                by real site conditions, project requirements and the way
                people actually move.
              </p>

            </div>

          </div>

        </div>


        <div className="about-hero-footer">

          <span>
            APEX ROAD NETWORK
          </span>

          <div></div>
{/* 
          <span>
           Apex Road Network
          </span> */}

        </div>

      </section>


      {/* =====================================================
          WHO WE ARE
      ====================================================== */}

      <section className="about-who">

        <div className="about-who-inner">


          <div className="about-section-number about-reveal">
            Apex Road Network
          </div>


          <div className="about-who-heading about-reveal">

            <div className="about-eyebrow">
              <span></span>
              WHO WE ARE
            </div>


            <h2>
              BUILT FOR
              <br />

              <span>
                THE REAL WORLD.
              </span>
            </h2>


            {/* CONSTRUCTION VISUAL */}

            <div className="about-who-visual">

              <div className="about-who-visual-glow"></div>

              <img
                src={constructionVisual}
                alt="Road construction and traffic engineering illustration"
                className="about-who-visual-image"
              />

            </div>

          </div>


          <div className="about-who-copy about-reveal">

            <p className="about-who-lead">
              APEX Road Network is a Sydney-based traffic engineering
              consultancy with more than 15 years of industry experience
              across Australia.
            </p>


            <p>
              Our experience covers traffic engineering, temporary traffic
              management, construction traffic management and transport
              infrastructure across a wide range of project environments.
              From major infrastructure and civil works to road upgrades,
              bridge projects, utilities and developments, we understand
              the practical demands that come with keeping projects moving
              safely.
            </p>


            <p>
              Our team has previously worked with TfNSW, Transport Canberra,
              local councils, principal contractors, developers, utilities
              and major infrastructure delivery organisations. This has
              given us a strong understanding of how different stakeholders
              work together and what is required at each stage of a project.
            </p>


            <p>
              We take a practical approach to every job. Our solutions are
              developed with construction, site conditions, access, road
              users and project requirements in mind, so they are not only
              compliant on paper but realistic to implement on site.
            </p>


            <p>
              From early planning and design through to construction and
              delivery, our focus is on providing reliable traffic
              engineering support that helps create safer, more efficient
              and better-managed project environments.
            </p>


            <div className="about-who-signature">

              <span></span>

              <div>
                <strong>
                  APEX ROAD NETWORK
                </strong>

                <small>
                  Traffic Engineering & Transport Solutions
                </small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DIRECTOR
      ====================================================== */}

      <section className="about-director">

        <div className="about-director-grid"></div>


        <div className="about-director-inner">


          {/* COPY */}

          <div className="about-director-copy about-reveal">

            <div className="about-eyebrow light">
              <span></span>
              A WORD FROM THE DIRECTOR
            </div>


            <div className="about-director-quote-mark">
              “
            </div>


            <blockquote>
              APEX WAS BUILT AROUND A SIMPLE IDEA —
              <span>
                {" "}
                ENGINEERING SHOULD SOLVE REAL PROBLEMS FOR REAL PEOPLE.
              </span>
            </blockquote>


            <p>
              At Apex Road Network, we deliver professional traffic
              management and traffic engineering solutions that support
              the safe, efficient and successful delivery of complex
              projects across Australia.
            </p>


            <p>
              With more than 15 years of industry experience, our team
              has worked across major infrastructure, civil construction,
              development and transport projects, providing practical
              solutions from concept and planning through to construction
              and delivery.
            </p>


            {/* <p>
              We understand that effective traffic management is more than
              compliance — it is about creating solutions that are safe,
              practical, efficient and tailored to the unique requirements
              of each project. We work collaboratively with our clients,
              contractors, authorities and project teams to minimise
              disruption, manage risk and keep projects moving.
            </p> */}


            <p>
              Our commitment is built around quality, responsiveness and
              technical excellence. We combine industry experience with a
              detailed understanding of construction environments to deliver
              solutions that work both on paper and in the field.
            </p>


            {/* <p>
              At Apex Road Network, our philosophy is simple:
              <br />
              <br />

              Precision in planning. Safety in every journey.
              <br />
              <br />

              We are proud to support our clients across Australia and look
              forward to building long-term partnerships through reliable
              advice, innovative solutions and consistently high standards.
            </p> */}


            <div className="about-director-signature">

              <span></span>

              <div>
                <strong>
                  HARRY
                </strong>

                <small>
                  APEX Road Network Director
                </small>
              </div>

            </div>

          </div>


          {/* VISUAL */}

          <div className="about-director-visual about-reveal">

            <div className="about-director-image">

              <img
                src={apexInterchange}
                alt="APEX road network"
              />

              <div className="about-director-image-overlay"></div>


              <div className="about-director-image-bottom">

                <span>
                  APEX ROAD NETWORK
                </span>

                <span>
                  Traffic Engineering Solutions
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION
      ====================================================== */}

      <section className="about-mission">

        <div className="about-mission-inner about-reveal">


          <div className="about-mission-top">

            <div className="about-eyebrow">
              <span></span>
              OUR MISSION
            </div>

          </div>


          <div className="about-mission-layout">


            {/* MISSION TEXT */}

            <div className="about-mission-content">

              <h2>
                TO MAKE COMPLEX
                <br />

                ROADS, PROJECTS
                <br />

                AND MOVEMENT
                <br />

                <span>
                  SIMPLE TO UNDERSTAND.
                </span>
              </h2>


              <div className="about-mission-bottom">

                <div></div>

                <p>
                  Through practical engineering, thoughtful planning and
                  clear communication, our mission is to help create safer
                  networks and support projects that move forward with
                  confidence.
                </p>

              </div>

            </div>


            {/* MISSION IMAGE */}

            <div className="about-mission-visual">

              <div className="about-mission-image-glow"></div>

              <img
                src={missionRoad}
                alt="Traffic engineering road network illustration"
                className="about-mission-image"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ====================================================== */}

      <section className="about-values">

        <div className="about-values-inner">


          <div className="about-values-heading about-reveal">

            <div>

              <div className="about-eyebrow">
                <span></span>
                OUR VALUES
              </div>


              <h2>
                WHAT GUIDES
                <br />

                <span>
                  EVERY PROJECT.
                </span>
              </h2>

            </div>


            <div className="about-values-big-number">
              4 Core Values
            </div>

          </div>


          <div className="about-values-list">


            {/* 01 */}

            <article className="about-value about-reveal">

              <div className="about-value-icon">
                <span>01</span>
              </div>

              <h3>
                Integrity
              </h3>

              <p>
                We work with honesty, accountability and professionalism,
                building trust through clear advice and dependable outcomes.
              </p>

            </article>


            {/* 02 */}

            <article className="about-value about-reveal">

              <div className="about-value-icon">
                <span>02</span>
              </div>

              <h3>
                Safety
              </h3>

              <p>
                Safety is at the centre of every decision, with careful
                consideration for workers, road users, pedestrians and
                surrounding communities.
              </p>

            </article>


            {/* 03 */}

            <article className="about-value about-reveal">

              <div className="about-value-icon">
                <span>03</span>
              </div>

              <h3>
                Practical Thinking
              </h3>

              <p>
                We develop solutions that work in real project environments,
                balancing engineering requirements with site conditions and
                constructability.
              </p>

            </article>


            {/* 04 */}

            <article className="about-value about-reveal">

              <div className="about-value-icon">
                <span>04</span>
              </div>

              <h3>
                Collaboration
              </h3>

              <p>
                We work closely with clients, contractors and stakeholders
                to create clear, coordinated solutions and better project
                outcomes.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          CLOSING CTA
      ====================================================== */}

      <section className="about-closing">

        <div className="about-closing-inner about-reveal">


          <div className="about-closing-copy">

            <span className="about-closing-label">
              START A CONVERSATION
            </span>


            <h2>
              GOT A PROJECT?
              <br />

              <span>
                LET&apos;S TALK.
              </span>
            </h2>


            <p>
              Tell us what you are working on and we will help you find the
              right traffic engineering solution for your project.
            </p>

          </div>


          <a
            href="mailto:harry@apexroadnetwork.com.au"
            className="about-closing-button"
          >
            Chat to Us Now

            <span className="text-arrow">
              ↗︎
            </span>
          </a>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="about-footer">

        <div className="about-footer-inner">


          <div className="about-footer-main">


            {/* BRAND */}

            <div className="about-footer-brand">

              <a
                href="/"
                className="about-footer-logo"
              >
                APEX ROAD NETWORK<span>.</span>
              </a>


              <p>
                Practical traffic engineering and transport solutions
                designed to keep projects safe, compliant and moving.
              </p>

            </div>


            {/* NAVIGATION */}

            <div className="about-footer-column">

              <h3>
                Navigation
              </h3>


              <div className="about-footer-links">

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

              </div>

            </div>


            {/* SERVICES */}

            <div className="about-footer-column">

              <h3>
                Services
              </h3>


              <div className="about-footer-links">

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

            <div className="about-footer-column about-footer-contact">

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


          {/* FOOTER BOTTOM */}

          <div className="about-footer-bottom">

            <p>
              © {new Date().getFullYear()} APEX Road Network.
              All rights reserved.
            </p>


            <div className="about-footer-bottom-links">

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


export default About;