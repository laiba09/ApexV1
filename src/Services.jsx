import { useEffect, useState } from "react";
import "./Services.css";

import apexInterchange from "./assets/round.png";
import apexNavLogo from "./assets/apex-nav-logo.png";


function Services() {
  const [menuOpen, setMenuOpen] = useState(false);


  /* =========================================================
     REVEAL
  ========================================================= */

  useEffect(() => {
    window.scrollTo(0, 0);

    const revealElements =
      document.querySelectorAll(".services-reveal");


    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => {
        element.classList.add(
          "services-reveal-visible"
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
                "services-reveal-visible"
              );

              observer.unobserve(
                entry.target
              );
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -45px 0px",
        }
      );


    revealElements.forEach((element) => {
      observer.observe(element);
    });


    return () => {
      observer.disconnect();
    };
  }, []);


  /* =========================================================
     CLOSE MOBILE MENU WHEN DESKTOP RETURNS
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
    <main className="services-page">


      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="services-navbar">


        {/* LOGO */}

        <a
          href="/"
          className="services-logo-wrap"
        >
          <img
            src={apexNavLogo}
            alt="APEX Road Network"
            className="services-navbar-logo-image"
          />

          <span className="services-logo-name">
            APEX ROAD NETWORK<span>.</span>
          </span>
        </a>


        {/* NAV LINKS */}

        <nav
          className={`services-nav-links ${
            menuOpen
              ? "services-nav-links-open"
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
            className="active"
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
            className="services-mobile-contact-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>

        </nav>


        {/* DESKTOP CONTACT */}

        <a
          href="/contact"
          className="services-nav-button services-desktop-contact"
        >
          Contact Us
        </a>


        {/* MOBILE GRID BUTTON */}

        <button
          type="button"
          className={`services-mobile-grid-button ${
            menuOpen
              ? "open"
              : ""
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

      <section className="services-hero">

        <div className="services-hero-grid"></div>

        <div className="services-hero-glow"></div>


        <div className="services-hero-inner">


          {/* HERO COPY */}

          <div className="services-hero-copy services-reveal">

            <div className="services-kicker">
              Traffic Engineering & Design
            </div>


            <h1>
              SERVICES
              <br />

              <span>
                BUILT TO MOVE.
              </span>
            </h1>


            <p>
              Traffic engineering, design and temporary traffic
              management solutions supporting projects from early
              planning and approvals through to construction and delivery.
            </p>


            <a
              href="#service-list"
              className="services-hero-button"
            >
              Explore Services

              <span>
                ↓
              </span>
            </a>

          </div>


          {/* HERO VISUAL */}

          <div className="services-hero-visual services-reveal">

            <div className="services-system-card">

              <div className="services-system-grid"></div>


              <img
                src={apexInterchange}
                alt="APEX traffic engineering network"
              />


              <div className="services-system-stat stat-one">

                <small>
                  PROJECT FLOW
                </small>

                <strong>
                  SAFE
                </strong>

              </div>


              <div className="services-system-stat stat-two">

                <small>
                  NETWORK
                </small>

                <strong>
                  READY
                </strong>

              </div>


              <div className="services-system-coordinate">
                SYD / NSW / TRAFFIC NETWORK
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        className="services-list-section"
        id="service-list"
      >

        <div className="services-list-inner">

          {/* HEADING */}

          <div className="services-list-heading services-reveal">

            <div>

              <div className="services-section-eyebrow">
                <span></span>
                Our Services
              </div>

              <h2>
                ENGINEERING FOR
                <br />
                <span>REAL PROJECTS.</span>
              </h2>

            </div>

            <p>
              From road design and traffic planning to temporary traffic
              management, modelling and approvals, our services are
              developed around practical project requirements and
              real site conditions.
            </p>

          </div>


          {/* =====================================================
              SERVICE LIST
          ====================================================== */}

          <div className="services-detail-list">


            {/* =================================================
                01 ROAD DESIGN
            ================================================= */}

            <article className="service-detail-row services-reveal">

              <div className="service-icon-wrap">
                <div className="service-number-badge">
                  01
                </div>

                <div className="service-icon">
                  ⌘
                </div>
              </div>

              <div className="service-detail-content">

                <h3>
                  Road Design Services
                </h3>

                <p>
                  Road design and CAD services supporting road upgrades,
                  infrastructure works, intersections, temporary arrangements
                  and project-specific design requirements.
                </p>

              </div>

              <div className="service-tags">
                <span>Road Design</span>
                <span>CAD</span>
              </div>

            </article>


            {/* =================================================
                02 CIVIL DRAFTING
            ================================================= */}

            <article className="service-detail-row services-reveal">

              <div className="service-icon-wrap">

                <div className="service-number-badge">
                  02
                </div>

                <div className="service-icon">
                  ▤
                </div>

              </div>

              <div className="service-detail-content">

                <h3>
                  Civil Drafting & CAD Models
                </h3>

                <p>
                  Civil drafting and CAD modelling supporting engineering
                  design, technical documentation, project coordination
                  and construction delivery.
                </p>

              </div>

              <div className="service-tags">
                <span>Drafting</span>
                <span>CAD Models</span>
              </div>

            </article>


            {/* =================================================
                03 CIVIL DESIGN
            ================================================= */}

            <article className="service-detail-row services-reveal">

              <div className="service-icon-wrap">

                <div className="service-number-badge">
                  03
                </div>

                <div className="service-icon">
                  ◆
                </div>

              </div>

              <div className="service-detail-content">

                <h3>
                  Civil Design & Certification
                </h3>

                <p>
                  Engineering design and certification support for civil
                  and transport projects requiring coordinated technical
                  design and professional engineering input.
                </p>

              </div>

              <div className="service-tags">
                <span>Civil Design</span>
                <span>Certification</span>
              </div>

            </article>


            {/* =================================================
                04 ROAD SAFETY
            ================================================= */}

            <article className="service-detail-row services-reveal">

              <div className="service-icon-wrap">

                <div className="service-number-badge">
                  04
                </div>

                <div className="service-icon">
                  ✓
                </div>

              </div>

              <div className="service-detail-content">

                <h3>
                  Road Safety Audits
                </h3>

                <p>
                  Independent on-site and desktop road safety audits
                  focused on identifying potential hazards and supporting
                  safer outcomes for road users, pedestrians, cyclists,
                  workers and surrounding communities.
                </p>

              </div>

              <div className="service-tags">
                <span>RSA</span>
                <span>Safety</span>
                <span>Review</span>
              </div>

            </article>


            {/* =================================================
                05 TMP
            ================================================= */}

            <article className="service-detail-row services-reveal">

              <div className="service-icon-wrap">

                <div className="service-number-badge">
                  05
                </div>

                <div className="service-icon">
                  ≋
                </div>

              </div>

              <div className="service-detail-content">

                <h3>
                  Traffic Management Plans
                </h3>

                <p>
                  Traffic Management Plans developed around traffic
                  movement, road users, access requirements, site
                  conditions and safe project delivery.
                </p>

              </div>

              <div className="service-tags">
                <span>TMP</span>
                <span>Planning</span>
              </div>

            </article>


            {/* =================================================
                06 CTMP
            ================================================= */}

            <article className="service-detail-row services-reveal">

              <div className="service-icon-wrap">

                <div className="service-number-badge">
                  06
                </div>

                <div className="service-icon">
                  ◫
                </div>

              </div>

              <div className="service-detail-content">

                <h3>
                  Construction Traffic Management Plans
                </h3>

                <p>
                  Construction Traffic Management Plans developed
                  for active construction environments, considering
                  work zones, access, staging, vehicle movements and
                  surrounding road network impacts.
                </p>

              </div>

              <div className="service-tags">
                <span>CTMP</span>
                <span>Construction</span>
              </div>

            </article>


            {/* =================================================
                07 TGS
            ================================================= */}

            <article className="service-detail-row services-reveal">

              <div className="service-icon-wrap">

                <div className="service-number-badge">
                  07
                </div>

                <div className="service-icon">
                  ▲
                </div>

              </div>

              <div className="service-detail-content">

                <h3>
                  Traffic Guidance Schemes
                </h3>

                <p>
                  Traffic Guidance Schemes prepared for standard
                  roadworks, asphalt works and temporary traffic
                  arrangements, including time-sensitive project
                  requirements.
                </p>

              </div>

              <div className="service-tags">
                <span>TGS</span>
                <span>Traffic Control</span>
              </div>

            </article>


            {/* =================================================
                08 TEMPORARY CONTROL
            ================================================= */}

            <article className="service-detail-row services-reveal">

              <div className="service-icon-wrap">

                <div className="service-number-badge">
                  08
                </div>

                <div className="service-icon">
                  ◇
                </div>

              </div>

              <div className="service-detail-content">

                <h3>
                  Temporary Traffic Control Design
                </h3>

                <p>
                  Temporary traffic control design supporting safe
                  roadworks and construction activity, including
                  temporary arrangements and barrier-related
                  traffic management requirements.
                </p>

              </div>

              <div className="service-tags">
                <span>Temporary Works</span>
                <span>Control</span>
              </div>

            </article>


            {/* =================================================
                09 PEDESTRIAN
            ================================================= */}

            <article className="service-detail-row services-reveal">

              <div className="service-icon-wrap">

                <div className="service-number-badge">
                  09
                </div>

                <div className="service-icon">
                  ♙
                </div>

              </div>

              <div className="service-detail-content">

                <h3>
                  Pedestrian Management Plans
                </h3>

                <p>
                  Pedestrian Management Plans developed to maintain
                  safe and practical pedestrian movement around
                  construction sites, temporary works and changing
                  access arrangements.
                </p>

              </div>

              <div className="service-tags">
                <span>PMP</span>
                <span>Pedestrians</span>
                <span>Access</span>
              </div>

            </article>


            {/* =================================================
                10 VEHICLE MOVEMENT
            ================================================= */}

            <article className="service-detail-row services-reveal">

              <div className="service-icon-wrap">

                <div className="service-number-badge">
                  10
                </div>

                <div className="service-icon">
                  →
                </div>

              </div>

              <div className="service-detail-content">

                <h3>
                  Vehicle Movement Plans
                </h3>

                <p>
                  Vehicle Movement Plans developed to coordinate
                  construction traffic, site access, delivery movements
                  and interaction with surrounding road users.
                </p>

              </div>

              <div className="service-tags">
                <span>VMP</span>
                <span>Movement</span>
                <span>Access</span>
              </div>

            </article>


            {/* =================================================
                11 STAGING
            ================================================= */}

            <article className="service-detail-row services-reveal">

              <div className="service-icon-wrap">

                <div className="service-number-badge">
                  11
                </div>

                <div className="service-icon">
                  ≡
                </div>

              </div>

              <div className="service-detail-content">

                <h3>
                  Traffic Staging Plans
                </h3>

                <p>
                  Traffic staging strategies developed around
                  construction sequencing, temporary arrangements
                  and maintaining safe and efficient movement
                  throughout each stage of the project.
                </p>

              </div>

              <div className="service-tags">
                <span>Staging</span>
                <span>Construction</span>
              </div>

            </article>


            {/* =================================================
                12 SWEPT PATH
            ================================================= */}

            <article className="service-detail-row services-reveal">

              <div className="service-icon-wrap">

                <div className="service-number-badge">
                  12
                </div>

                <div className="service-icon">
                  ⌁
                </div>

              </div>

              <div className="service-detail-content">

                <h3>
                  Swept Path Analysis
                </h3>

                <p>
                  Vehicle tracking and swept path assessments used
                  to confirm that intersections, access points,
                  loading areas and internal circulation can accommodate
                  required vehicle movements.
                </p>

              </div>

              <div className="service-tags">
                <span>Swept Path</span>
                <span>Vehicle Tracking</span>
              </div>

            </article>


            {/* =================================================
                13 ROL
            ================================================= */}

            <article className="service-detail-row services-reveal">

              <div className="service-icon-wrap">

                <div className="service-number-badge">
                  13
                </div>

                <div className="service-icon">
                  ⌖
                </div>

              </div>

              <div className="service-detail-content">

                <h3>
                  Road Occupancy Licences & Permit Management
                </h3>

                <p>
                  Support with Road Occupancy Licence applications
                  and associated TfNSW approval and permit management
                  for works affecting the road network.
                </p>

              </div>

              <div className="service-tags">
                <span>ROL</span>
                <span>Permits</span>
                <span>Approvals</span>
              </div>

            </article>


            {/* =================================================
                14 SIDRA
            ================================================= */}

            <article className="service-detail-row services-reveal">

              <div className="service-icon-wrap">

                <div className="service-number-badge">
                  14
                </div>

                <div className="service-icon">
                  ◎
                </div>

              </div>

              <div className="service-detail-content">

                <h3>
                  SIDRA Intersection Modelling
                </h3>

                <p>
                  SIDRA intersection modelling used to assess
                  intersection performance, capacity and operational
                  conditions and provide clear technical information
                  for design and planning decisions.
                </p>

              </div>

              <div className="service-tags">
                <span>SIDRA</span>
                <span>Modelling</span>
              </div>

            </article>


            {/* =================================================
                15 TRAFFIC IMPACT
            ================================================= */}

            <article className="service-detail-row services-reveal">

              <div className="service-icon-wrap">

                <div className="service-number-badge">
                  15
                </div>

                <div className="service-icon">
                  <span className="text-arrow">↗︎</span>
                </div>

              </div>

              <div className="service-detail-content">

                <h3>
                  Traffic Impact Assessments
                </h3>

                <p>
                  Traffic Impact Assessments reviewing traffic
                  generation, site access, network performance
                  and the wider transport impacts associated
                  with proposed development.
                </p>

              </div>

              <div className="service-tags">
                <span>TIA</span>
                <span>Assessment</span>
              </div>

            </article>


            {/* =================================================
                16 METHODOLOGY REVIEW
            ================================================= */}

            <article className="service-detail-row services-reveal">

              <div className="service-icon-wrap">

                <div className="service-number-badge">
                  16
                </div>

                <div className="service-icon">
                  ✓
                </div>

              </div>

              <div className="service-detail-content">

                <h3>
                  Construction Methodology Review
                </h3>

                <p>
                  Traffic engineering review of construction
                  methodologies to consider access, staging,
                  temporary works, traffic movement and the
                  practical requirements of project delivery.
                </p>

              </div>

              <div className="service-tags">
                <span>Review</span>
                <span>Construction</span>
              </div>

            </article>


            {/* =================================================
                17 ENGINEERING ADVICE
            ================================================= */}

            <article className="service-detail-row services-reveal">

              <div className="service-icon-wrap">

                <div className="service-number-badge">
                  17
                </div>

                <div className="service-icon">
                  +
                </div>

              </div>

              <div className="service-detail-content">

                <h3>
                  Traffic Engineering Advice & Design Review
                </h3>

                <p>
                  Senior traffic engineering advice, technical
                  review and project input supporting planning,
                  design, approvals, construction and delivery.
                </p>

              </div>

              <div className="service-tags">
                <span>Engineering</span>
                <span>Review</span>
                <span>Advice</span>
              </div>

            </article>

          </div>

        </div>

      </section>

              {/* =====================================================
    CONTACT CTA — SAME AS HOMEPAGE
===================================================== */}

<section className="cta-section" id="contact">
  <div className="cta-grid"></div>
  <div className="cta-glow"></div>

  <div className="cta-inner">
    <div className="cta-copy">

      <div className="cta-eyebrow">
        <span></span>
        Start a Conversation
      </div>

      <h2>
        GOT A PROJECT?
        <br />
        <span>LET&apos;S TALK.</span>
      </h2>

      <p>
        Tell us what you are working on and we will help you find the
        right traffic engineering solution for your project.
      </p>

    </div>

    <a
      href="/contact"
      className="cta-button"
    >
      Chat to Us Now
      <span className="text-arrow">↗︎</span>
    </a>
  </div>
</section>


{/* =====================================================
    FOOTER — SAME AS HOMEPAGE
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

        <a href="mailto: harry@apexroadnetwork.com.au">
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


    {/* FOOTER BOTTOM */}

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

export default Services;