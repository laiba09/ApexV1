import { useEffect, useState } from "react";
import "./App.css";


/* =========================================================
   MAIN ASSETS
========================================================= */

import truckHero from "./assets/truck-hero.png";

import apexPhone from "./assets/stagingabout.png";
import apexInterchange from "./assets/2_macquarie_park_bus_depot.png";
import apexNavLogo from "./assets/apex-nav-logo.png";


/* =========================================================
   PROJECT IMAGES
========================================================= */

import heddonGretaProject from "./assets/1_heddon_greta.png";
import macquarieProject from "./assets/2_macquarie_park_bus_depot1.png";
import tarongaProject from "./assets/3_taronga_zoo_mosman.png";
import goldenHwyProject from "./assets/4_golden_hwy_meriwa2.png";
import grandviewProject from "./assets/5_grandview_drive_newport.png";


/* =========================================================
   CLIENT LOGOS
========================================================= */

import clientAltus from "./assets/client-altus.png";
import clientVari from "./assets/client-vari.png";
import clientAOne from "./assets/client-aone.png";
import clientBorger from "./assets/client-borger.png";
import clientTS from "./assets/client-ts.png";
import clientAST from "./assets/client-ast.png";
import clientGartnerRose from "./assets/client-gartnerrose.png";
import clientNational from "./assets/client-national.png";
import clientRSN from "./assets/client-rsn.png";
import clientEire from "./assets/client-eire.png";
import clientYuin from "./assets/client-yuin.png";
import clientSMG from "./assets/client-smg.png";
import clientRoadworx from "./assets/client-roadworx.png";


/* =========================================================
   CLIENT DATA
========================================================= */

const clients = [
  {
    name: "Altus Group",
    logo: clientAltus,
  },
  {
    name: "Vari Group",
    logo: clientVari,
  },
  {
    name: "A One Earthworks",
    logo: clientAOne,
  },
  {
    name: "Borger Traffic",
    logo: clientBorger,
  },
  {
    name: "T&S",
    logo: clientTS,
  },
  {
    name: "AST Linemarking",
    logo: clientAST,
  },
  {
    name: "Gartner Rose",
    logo: clientGartnerRose,
  },
  {
    name: "National Integrated Services",
    logo: clientNational,
  },
  {
    name: "Road Safety Network",
    logo: clientRSN,
  },
  {
    name: "EIRE Civil Infrastructure",
    logo: clientEire,
  },
  {
    name: "Yuin Traffic Control",
    logo: clientYuin,
  },
  {
    name: "Scorpian Management Group",
    logo: clientSMG,
  },
  {
    name: "Roadworx",
    logo: clientRoadworx,
  },
];


/* =========================================================
   PROJECT DATA
========================================================= */

const homeProjects = [
  {
    number: "01",
    title: "Macquarie Park Bus Depot",
    category: "Transport Infrastructure",
    image: macquarieProject,
  },

  {
    number: "02",
    title: "83 Main Road, Heddon Greta",
    category: "Road Infrastructure",
    image: heddonGretaProject,
    client: "Axial Construction",
    location: "Heddon Greta, NSW",
  },

  {
    number: "03",
    title: "Golden Hwy, Merriwa",
    category: "Civil Construction",
    image: goldenHwyProject,
    client: "A One Earthworks",
    location: "Merriwa, NSW",
  },

  {
    number: "04",
    title: "55 Grandview Drive, Newport",
    category: "Construction Traffic Management",
    image: grandviewProject,
    client: "Gartner Rose",
    location: "Newport, NSW",
  },

  {
    number: "05",
    title: "Taronga Zoo — Athol Wharf Road",
    category: "Roadworks & Traffic Management",
    image: tarongaProject,
    client: "Gartner Rose",
    location: "Mosman, NSW",
  },
];


function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  useEffect(() => {
    const revealElements =
      document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => {
        element.classList.add("reveal-visible");
      });

      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                "reveal-visible"
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

    return () => {
      observer.disconnect();
    };
  }, []);


  /* =========================================================
     CLOSE MOBILE MENU WHEN SCREEN GETS BIGGER
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
    <main className="home-page">


      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <header className="navbar">


        {/* LOGO */}

        <a
          href="/"
          className="home-logo-wrap"
        >
          <img
            src={apexNavLogo}
            alt="APEX Road Network"
            className="home-navbar-logo-image"
          />

          <span className="home-logo-name">
            APEX ROAD NETWORK<span>.</span>
          </span>
        </a>


        {/* NAVIGATION LINKS */}

        <nav
          className={`nav-links ${
            menuOpen
              ? "nav-links-open"
              : ""
          }`}
        >
          <a
            href="/"
            className="active"
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
            className="mobile-contact-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </nav>


        {/* DESKTOP CONTACT BUTTON */}

        <a
          href="/contact"
          className="nav-button"
        >
          Contact Us
        </a>


        {/* MOBILE GRID BUTTON */}

        <button
          type="button"
          className={`mobile-grid-button ${
            menuOpen
              ? "open"
              : ""
          }`}
          onClick={() =>
            setMenuOpen(
              (current) => !current
            )
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

      <section
        className="hero"
        id="home"
        style={{
          backgroundImage: `url(${truckHero})`,
        }}
      >

        <div className="hero-overlay"></div>
        <div className="hero-grid"></div>


        <div className="hero-content reveal">

         


          <h1>
            SMART TRAFFIC ENGINEERING
            <br />

            <span>
              KEEPS YOUR PROJECT MOVING
            </span>
          </h1>


          <p className="hero-description">
            Practical traffic solutions for complex civil and infrastructure
            projects across Australia. Senior-led, site-focused and designed
            for smooth project delivery.
          </p>


          <div className="hero-actions">

            <a
              href="/contact"
              className="primary-button"
            >
              Discuss Your Project

              <span className="text-arrow"></span>
            </a>


            <a
              href="#services"
              className="secondary-button"
            >
              Explore Services
            </a>

          </div>

        </div>


        <div className="hero-bottom reveal">

          {/* <div className="hero-brand">

            <span>
              APEX ROAD NETWORK
            </span>

            <div className="brand-line"></div>

          </div> */}

        </div>

      </section>


      {/* =====================================================
          TRUSTED BY
      ====================================================== */}

      <section className="clients-banner">

        <div className="clients-banner-heading reveal">

          <span className="clients-banner-kicker">
            Trusted By
          </span>


          <p>
            Proud to work alongside leading contractors, developers and
            infrastructure organisations across Australia.
          </p>

        </div>


        <div className="clients-slider">

          <div className="clients-slider-track">

            {clients.map((client, index) => (

              <div
                className="client-logo-card"
                key={`client-first-${index}`}
              >

                <img
                  src={client.logo}
                  alt={client.name}
                />

              </div>

            ))}


            {clients.map((client, index) => (

              <div
                className="client-logo-card"
                key={`client-second-${index}`}
                aria-hidden="true"
              >

                <img
                  src={client.logo}
                  alt=""
                />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section
        className="services-section"
        id="services"
      >

        <div className="services-glow services-glow-one"></div>
        <div className="services-glow services-glow-two"></div>


        {/* SERVICES INTRODUCTION */}

        <div className="services-header">

          <div className="services-heading-row">


            {/* PHONE VISUAL */}

            <div className="services-header-visual services-phone-visual reveal">

              <div className="phone-glow"></div>


              <div
                className="phone-interactive"

                onMouseMove={(e) => {
                  const box =
                    e.currentTarget.getBoundingClientRect();

                  const x =
                    e.clientX - box.left;

                  const y =
                    e.clientY - box.top;

                  const centerX =
                    box.width / 2;

                  const centerY =
                    box.height / 2;

                  const rotateY =
                    ((x - centerX) / centerX) * 7;

                  const rotateX =
                    ((centerY - y) / centerY) * 7;


                  e.currentTarget.style.setProperty(
                    "--rotate-x",
                    `${rotateX}deg`
                  );

                  e.currentTarget.style.setProperty(
                    "--rotate-y",
                    `${rotateY}deg`
                  );
                }}

                onMouseLeave={(e) => {
                  e.currentTarget.style.setProperty(
                    "--rotate-x",
                    "0deg"
                  );

                  e.currentTarget.style.setProperty(
                    "--rotate-y",
                    "0deg"
                  );
                }}
              >

                <img
                  src={apexPhone}
                  alt="APEX Road Network mobile branding"
                  className="apex-phone-image"
                />

              </div>




            
            </div>


            {/* SERVICES HEADING */}

            <div className="services-header-content reveal">

              <div className="services-eyebrow">

                <span></span>

                What We Deliver

              </div>


              <h2>
                ENGINEERING
                <br />

                MADE
                <br />

                <span>
                  PRACTICAL
                </span>
              </h2>


              <p>
                Senior-led traffic engineering support for infrastructure,
                civil construction, road upgrades, bridge works and development
                projects across Australia. Practical solutions designed around
                real construction and operational conditions.
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            SERVICES GRID
        ====================================================== */}
        
        <div className="services-grid">

          
          <article className="service-card reveal">

            <div className="service-card-content">

              <span className="service-label">
                Staging
              </span>


              <h3>
                Traffic Staging Design
              </h3>


              <p>
                Construction-focused staging solutions for roadworks,
                bridge works and major projects, maintaining access
                and safe traffic movement.
              </p>

            </div>


            <div className="service-arrow">
              <span className="text-arrow">↗︎</span>
            </div>

          </article>
          <article className="service-card reveal">

            


            <div className="service-card-content">

              <span className="service-label">
                Assessment
              </span>


              <h3>
                Traffic Impact Statements
              </h3>


              <p>
                Traffic assessments covering access, network performance,
                vehicle movements and the impacts of proposed developments.
              </p>

            </div>


            <div className="service-arrow">
              <span className="text-arrow">↗︎</span>
            </div>

          </article>

        


          <article className="service-card reveal">

            <div className="service-card-content">

              <span className="service-label">
                Engineering
              </span>

              <h3>
                Traffic Engineering Advice & Design Review
              </h3>

              <p>
                Practical traffic engineering advice, technical review and design
                support for planning, approvals, construction and project delivery.
              </p>

            </div>

            <div className="service-arrow">
              <span className="text-arrow">↗︎</span>
            </div>

          </article>



          <article className="service-card reveal">

           


            <div className="service-card-content">

              <span className="service-label">
                Analysis
              </span>


              <h3>
                Traffic Modelling
              </h3>


              <p>
                Detailed traffic modelling and network analysis supporting
                infrastructure, development and transport planning decisions.
              </p>

            </div>


            <div className="service-arrow">
              <span className="text-arrow">↗︎</span>
            </div>

          </article>


          


          <article className="service-card reveal">



            <div className="service-card-content">

              <span className="service-label">
                Access
              </span>


              <h3>
                Site Access Design
              </h3>


              <p>
                Safe and practical access design for construction sites,
                heavy vehicles, utilities and changing project conditions.
              </p>

            </div>


            <div className="service-arrow">
              <span className="text-arrow">↗︎</span>
            </div>

          </article>
          <article className="service-card reveal">

           


            <div className="service-card-content">

              <span className="service-label">
                Safety
              </span>


              <h3>
                Road Safety Audits
              </h3>


              <p>
                Independent road safety audits for infrastructure, road
                upgrades and development projects, identifying risks at
                every stage.
              </p>

            </div>


            <div className="service-arrow">
              <span className="text-arrow">↗︎</span>
            </div>

          </article>

        </div>


        <div className="services-link-wrap reveal">

          <a
            href="/services"
            className="services-link"
          >
            Explore all services

            <span>
              →
            </span>
          </a>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE APEX
      ====================================================== */}

      <section
        className="why-section"
        id="about"
      >

        <div className="why-section-grid"></div>
        <div className="why-section-glow"></div>


        <div className="why-section-inner">


          <div className="why-section-left reveal">

            <div className="why-eyebrow">

              <span></span>

              Why Choose Apex

            </div>


            <h2>
              BUILT FOR
              <br />

              <span>
                BETTER PROJECTS
              </span>
            </h2>


            <div className="why-visual-wrap">

            <div className="why-visual-frame">

              <div className="why-visual">
                <img
                  src={apexInterchange}
                  alt="APEX Road Network project environment"
                  className="why-visual-image"
                />

                <div className="why-visual-overlay"></div>
              </div>

            </div>

          </div>

          </div>


          <div className="why-section-right reveal">

            <p className="why-intro">
              Apex Road Network brings together more than 15 years of industry
              experience across traffic engineering, temporary traffic management
              and transport infrastructure projects throughout Australia.
              Our experience spans major infrastructure, civil construction,
              road upgrades, bridge works, utilities and complex construction
              environments.
            </p>


            <div className="why-list">


              <article className="why-item">

                <span>
                  
                </span>


                <div>

                  <h3>
                    Proven Expertise
                  </h3>


                  <p>
                    Senior-led experience working with TfNSW,
                    Transport Canberra, local councils, principal
                    contractors, developers and major infrastructure
                    delivery organisations.
                  </p>

                </div>

              </article>


              <article className="why-item">

                <span>
                
                </span>


                <div>

                  <h3>
                    Practical Solutions
                  </h3>


                  <p>
                    Traffic solutions designed to be technically compliant,
                    practical and constructible, with real site and operational
                    conditions considered from the outset.
                  </p>

                </div>

              </article>


              <article className="why-item">

                <span>
                
                </span>


                <div>

                  <h3>
                    Safety & Compliance
                  </h3>


                  <p>
                    A strong focus on safe outcomes for workers, road users,
                    pedestrians and surrounding communities throughout every
                    stage of the project.
                  </p>

                </div>

              </article>

            </div>


            <a
              href="/about"
              className="why-button"
            >
              Learn More About Us

              <span className="text-arrow">↗︎</span>
            </a>

          </div>

        </div>

      </section>

      

{/* =====================================================
    RECENT PROJECTS
===================================================== */}

<section
  className="projects-section"
  id="projects"
>

  <div className="projects-grid-background"></div>

  <div className="projects-glow"></div>


  <div className="projects-inner">


    {/* =====================================================
        HEADER
    ====================================================== */}

    <div className="projects-header reveal">

      <div>

        <div className="projects-eyebrow">
          <span></span>
          Selected Work
        </div>


        <h2>
          RECENT
          <br />

          <span>
            PROJECTS
          </span>
        </h2>

      </div>


      <p>
        A showcase of APEX&apos;s experience across traffic engineering,
        transport infrastructure and complex project environments
        throughout NSW and the ACT.
      </p>

    </div>


    {/* =====================================================
        PROJECT LAYOUT
    ====================================================== */}

    <div className="projects-showcase">


      {/* ===================================================
          PROJECT 01 — LARGE LEFT
      =================================================== */}

      <article className="project-showcase-card project-showcase-main reveal">

        <div className="project-showcase-image">

          <img
            src={homeProjects[0].image}
            alt={homeProjects[0].title}
          />

          <div className="project-overlay"></div>

{/* 
          <div className="project-number">
            {homeProjects[0].number}
          </div> */}


          <a
            href="/projects"
            className="project-arrow"
            aria-label={`View ${homeProjects[0].title}`}
          >
            <span className="text-arrow">
              ↗︎
            </span>
          </a>

        </div>


        <div className="project-showcase-content">

          <span className="project-category">
            {homeProjects[0].category}
          </span>


          <h3>
            {homeProjects[0].title}
          </h3>


          <p>
            Traffic planning and engineering support developed to maintain
            safe access, reduce disruption and support efficient
            construction staging.
          </p>


          <div className="project-showcase-meta">

            <span>
              {homeProjects[0].location}
            </span>

            <span>
              {homeProjects[0].client}
            </span>

          </div>

        </div>

      </article>


      {/* ===================================================
          PROJECT 02 — TOP RIGHT
      =================================================== */}

      <article className="project-showcase-card project-showcase-small reveal">

        <div className="project-showcase-image">

          <img
            src={homeProjects[1].image}
            alt={homeProjects[1].title}
          />

          <div className="project-overlay"></div>


          

          <a
            href="/projects"
            className="project-arrow"
            aria-label={`View ${homeProjects[1].title}`}
          >
            <span className="text-arrow">
              ↗︎
            </span>
          </a>

        </div>


        <div className="project-showcase-content">

          <span className="project-category">
            {homeProjects[1].category}
          </span>


          <h3>
            {homeProjects[1].title}
          </h3>


          <p>
            Practical traffic engineering and construction support for
            works within an active road environment.
          </p>

        </div>

      </article>


      {/* ===================================================
          PROJECT 03 — BOTTOM RIGHT
      =================================================== */}

      <article className="project-showcase-card project-showcase-small reveal">

        <div className="project-showcase-image">

          <img
            src={homeProjects[2].image}
            alt={homeProjects[2].title}
          />

          <div className="project-overlay"></div>


          <a
            href="/projects"
            className="project-arrow"
            aria-label={`View ${homeProjects[2].title}`}
          >
            <span className="text-arrow">
              ↗︎
            </span>
          </a>

        </div>


        <div className="project-showcase-content">

          <span className="project-category">
            {homeProjects[2].category}
          </span>


          <h3>
            {homeProjects[2].title}
          </h3>


          <p>
            Traffic management support designed around safe movement,
            practical staging and real project conditions.
          </p>

        </div>

      </article>

    </div>


    {/* =====================================================
        VIEW ALL
    ====================================================== */}

    <div className="projects-footer reveal">

      <a
        href="/projects"
        className="projects-link"
      >
        Explore All Projects

        <span className="text-arrow">
          ↗︎
        </span>
      </a>

    </div>

  </div>

</section>

{/* =====================================================
    APEX QUOTE
===================================================== */}
  <section
    className="apex-quote-section"
    onMouseMove={(e) => {
      const section = e.currentTarget;
      const rect = section.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 3;
      const rotateX = ((centerY - y) / centerY) * 3;

      const moveX = ((x - centerX) / centerX) * 12;
      const moveY = ((y - centerY) / centerY) * 8;

      section.style.setProperty("--mouse-x", `${x}px`);
      section.style.setProperty("--mouse-y", `${y}px`);
      section.style.setProperty("--rotate-x", `${rotateX}deg`);
      section.style.setProperty("--rotate-y", `${rotateY}deg`);
      section.style.setProperty("--move-x", `${moveX}px`);
      section.style.setProperty("--move-y", `${moveY}px`);
    }}
    onMouseLeave={(e) => {
      const section = e.currentTarget;

      section.style.setProperty("--rotate-x", "0deg");
      section.style.setProperty("--rotate-y", "0deg");
      section.style.setProperty("--move-x", "0px");
      section.style.setProperty("--move-y", "0px");
    }}
  >
    <div className="apex-quote-grid"></div>

    <div className="apex-quote-spotlight"></div>

    <div className="apex-quote-orb orb-one"></div>
    <div className="apex-quote-orb orb-two"></div>

    <div className="apex-quote-inner">

      <div className="apex-quote-top">
        <span className="apex-quote-line"></span>

        <span className="apex-quote-label">
          Our Motto
        </span>

        <span className="apex-quote-line"></span>
      </div>

      <div className="apex-quote-text">

        <h2 className="quote-line-one">
          PRECISION IN PLANNING,
        </h2>

        <h2 className="quote-line-two">
          SAFETY IN EVERY JOURNEY.
        </h2>

      </div>
    </div>
  </section>
      {/* =====================================================
          CONTACT CTA
      ====================================================== */}

      <section
        className="cta-section"
        id="contact"
      >

        <div className="cta-grid"></div>
        <div className="cta-glow"></div>


        <div className="cta-inner reveal">

          <div className="cta-copy">

            <div className="cta-eyebrow">

              <span></span>

              Start a Conversation

            </div>


            <h2>
              GOT A PROJECT?
              <br />

              <span>
                LET'S TALK.
              </span>
            </h2>


            <p>
              Tell us what you are working on and we will help you find
              the right traffic engineering solution for your project.
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
          FOOTER
      ====================================================== */}

      <footer className="footer">

        <div className="footer-grid"></div>


        <div className="footer-inner reveal">


          <div className="footer-top">


            <div className="footer-brand">

              <a
                href="/"
                className="footer-logo"
              >
                APEX ROAD NETWORK<span>.</span>
              </a>


              <p>
                Practical traffic engineering and transport solutions
                designed to keep projects safe, compliant and moving.
              </p>

            </div>


            <div className="footer-column">

              <h3>
                Navigation
              </h3>


              <nav className="footer-links">

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

              </nav>

            </div>


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


            <div className="footer-column footer-contact">

              <h3>
                Contact
              </h3>


              <a href="mailto: info@apexroadnetwork.com.au">
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


          <div className="footer-bottom">

            <p>
              © {new Date().getFullYear()} APEX Road Network.
              All rights reserved.
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


export default App;