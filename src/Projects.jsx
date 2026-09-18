import { useEffect, useState } from "react";
import "./Projects.css";

import apexNavLogo from "./assets/apex-nav-logo.png";
import projectHero from "./assets/Project.png";

import heddonGretaProject from "./assets/1_heddon_greta.png";
import macquarieProject from "./assets/2_macquarie_park_bus_depot1.png";
import tarongaProject from "./assets/3_taronga_zoo_mosman.png";
import goldenHwyProject from "./assets/4_golden_hwy_meriwa2.png";
import grandviewProject from "./assets/5_grandview_drive_newport.png";


/* =====================================================
   PARTNER LOGOS
===================================================== */

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
import clientAtg from "./assets/client-atg.png";
import clientCu from "./assets/client-cu.png";




/* =====================================================
   PROJECT DATA
===================================================== */

const projects = [
  {
    title: "83 Main Road, Heddon Greta",
    category: "Road Infrastructure / Construction",
    image: heddonGretaProject,
    description:
      "Traffic management and construction support provided for road infrastructure works within an active regional road environment.",
  },

  {

    title: "Golden Hwy, Merriwa",
    category: "Roadworks / Civil Construction",
    image: goldenHwyProject,
    description:
      "Traffic management support for road and civil works along the Golden Highway, supporting safe vehicle movement throughout construction.",
  },

  {

    title: "55 Grandview Drive, Newport",
    category: "Construction Traffic Management",
    image: grandviewProject,
    description:
      "Construction traffic management and site access support for works within a constrained residential road environment.",
  },

  {
  
    title: "Taronga Zoo — Athol Wharf Road",
    category: "Roadworks / Traffic Management",
    image: tarongaProject,
    description:
      "Traffic management support for works along Athol Wharf Road, maintaining safe access through a busy and constrained transport corridor.",
  },
  
];


/* =====================================================
   PARTNER DATA
===================================================== */

const partners = [
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
  name: "Complete Urban",
  logo: clientCu,
},

{
  name: "Australian Traffic Group",
  logo: clientAtg,
},
{
  name: "Roadworx",
  logo: clientRoadworx,
},

];


function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);


  /* =========================================================
     REVEAL
  ========================================================= */

  useEffect(() => {
    window.scrollTo(0, 0);

    const elements =
      document.querySelectorAll(".projectspage-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add(
          "projectspage-reveal-visible"
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
                "projectspage-reveal-visible"
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
    <main className="projectspage-page">


      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="projectspage-navbar">


        {/* LOGO */}

        <a
          href="/"
          className="projectspage-logo-wrap"
        >
          <img
            src={apexNavLogo}
            alt="APEX Road Network"
            className="projectspage-navbar-logo-image"
          />

          <span className="projectspage-logo-name">
            APEX ROAD NETWORK<span>.</span>
          </span>
        </a>


        {/* NAV LINKS */}

        <nav
          className={`projectspage-nav-links ${
            menuOpen
              ? "projectspage-nav-links-open"
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
            className="active"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="/contact"
            className="projectspage-mobile-contact-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </nav>


        {/* DESKTOP CONTACT */}

        <a
          href="/contact"
          className="projectspage-nav-button projectspage-desktop-contact"
        >
          Contact Us
        </a>


        {/* MOBILE GRID MENU */}

        <button
          type="button"
          className={`projectspage-mobile-grid-button ${
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

      <section className="projectspage-hero">

        <div className="projectspage-hero-bg">
          <img
            src={projectHero}
            alt="APEX Road Network projects"
          />
        </div>


        <div className="projectspage-hero-overlay"></div>

        <div className="projectspage-hero-grid"></div>


        <div className="projectspage-hero-inner">


          <div className="projectspage-hero-top projectspage-reveal">

            <div className="projectspage-hero-label">
              Our Projects
            </div>

          </div>


          <div className="projectspage-hero-copy projectspage-reveal">

            <h1>
              WORK BUILT
              <br />

              AROUND
              <br />

              <span>
                REAL ROADS.
              </span>
            </h1>


            <div className="projectspage-hero-description">

              <div></div>

              <p>
                A selection of traffic engineering and traffic
                management projects delivered across infrastructure,
                construction and road environments throughout Australia.
              </p>

            </div>

          </div>

        </div>


        <div className="projectspage-hero-footer"></div>

      </section>

      {/* =====================================================
    PARTNERS
===================================================== */}

<section className="projectspage-partners">

  <div className="projectspage-partners-grid-bg"></div>

  <div className="projectspage-partners-inner">

    {/* HEADER */}

    <div className="projectspage-partners-header projectspage-reveal">

      <div>

        <div className="projectspage-eyebrow">
          <span></span>
          Our Network
        </div>

        <h2>
          WORKING ALONGSIDE
          <br />

          <span>
            TRUSTED PARTNERS.
          </span>
        </h2>

      </div>


      <p>
        We work alongside contractors, engineering teams and delivery
        partners across infrastructure, civil construction and transport
        projects throughout Australia.
      </p>

    </div>


    {/* LOGO GRID */}

    <div className="projectspage-partners-grid">

      {partners.map((partner, index) => (

        <div
          key={partner.name}
          className="projectspage-partner-card projectspage-reveal"
          style={{
            transitionDelay: `${Math.min(index * 0.04, 0.28)}s`,
          }}
        >

          <img
            src={partner.logo}
            alt={partner.name}
          />

          <span>
            {String(index + 1).padStart(2, "0")}
          </span>

        </div>

      ))}

    </div>


    {/* BOTTOM LINE */}
  </div>

</section>
      <section className="projectspage-featured">
        

        <div className="projectspage-featured-inner">

          <div className="projectspage-featured-heading projectspage-reveal">

            <div>

              <div className="projectspage-eyebrow">
                <span></span>

                FEATURED PROJECT
              </div>


              <h2>
                ENGINEERING
                <br />

                <span>IN PRACTICE.</span>
              </h2>

            </div>


            

          </div>


          <div className="projectspage-featured-card projectspage-reveal">

            <div className="projectspage-featured-image">

              <img
                src={macquarieProject}
                alt="Macquarie Park Bus Depot"
              />


              <div className="projectspage-featured-image-overlay"></div>


              

            </div>


            <div className="projectspage-featured-content">

              


              <h3>
                MACQUARIE PARK
                <br />

                BUS DEPOT
              </h3>


              <p>
                Supporting transport infrastructure works within the
                Macquarie Park Bus Depot environment with practical
                traffic engineering and management solutions focused
                on safe vehicle movement, site access and project
                delivery.
              </p>


              <div className="projectspage-featured-details">

                <div>

                  <small>
                    Project
                  </small>

                  <strong>
                    Bus Depot
                  </strong>

                </div>


                <div>

                  <small>
                    Focus
                  </small>

                  <strong>
                    Traffic Management
                  </strong>

                </div>


                <div>

                  <small>
                    Region
                  </small>

                  <strong>
                    Macquarie Park, NSW
                  </strong>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT GRID
      ====================================================== */}

      <section className="projectspage-list">

        <div className="projectspage-list-inner">

          <div className="projectspage-list-heading projectspage-reveal">

            <div className="projectspage-eyebrow">
              <span></span>

              SELECTED WORK
            </div>


            <h2>
              PROJECTS THAT
              <br />

              <span>
                KEEP THINGS MOVING.
              </span>
            </h2>

          </div>


          <div className="projectspage-grid">

            {projects.map((project) => (

              <article
                className="projectspage-card projectspage-reveal"
              >

                <div className="projectspage-card-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />



                </div>


                <div className="projectspage-card-content">

                  <span className="projectspage-card-category">
                    {project.category}
                  </span>


                  <h3>
                    {project.title}
                  </h3>


                  <p>
                    {project.description}
                  </p>


                  <div className="projectspage-card-meta">

                    <span>
                      {project.client}
                    </span>

                    <span>
                      {project.location}
                    </span>

                  </div>


                  <span className="projectspage-card-arrow">
                    <span className="text-arrow">↗︎</span>
                  </span>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

        {/* =====================================================
    CONTACT CTA — SAME AS HOMEPAGE
===================================================== */}

<section className="cta-section" id="contact">
  <div className="cta-grid"></div>
  <div className="cta-glow"></div>

  <div className="cta-inner services">
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


    {/* FOOTER BOTTOM */}

    <div className="footer-bottom">

      <p>
        © {new Date().getFullYear()} APEX Road Network. All rights
        reserved.
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


export default Projects;