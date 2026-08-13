import { useEffect } from "react";
import "./Projects.css";

import apexNavLogo from "./assets/apex-nav-logo.png";
import projectHero from "./assets/about-apex-hero.png";
import projectImageOne from "./assets/round.png";
import projectImageTwo from "./assets/Night.png";
import projectImageThree from "./assets/afternoon.png";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const elements = document.querySelectorAll(".projectspage-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("projectspage-reveal-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "projectspage-reveal-visible"
            );

            observer.unobserve(entry.target);
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

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      number: "01",
      title: "Traffic Management Planning",
      category: "Planning / Construction",
      image: projectImageOne,
      description:
        "Traffic management solutions developed around active construction environments, access requirements and surrounding road conditions.",
    },

    {
      number: "02",
      title: "Road Safety & Network Review",
      category: "Safety / Assessment",
      image: projectImageTwo,
      description:
        "Road safety assessment and network review focused on identifying potential risks and supporting safer movement for all road users.",
    },

    {
      number: "03",
      title: "Development Traffic Assessment",
      category: "Development / Transport",
      image: projectImageThree,
      description:
        "Traffic and access assessment supporting development planning, vehicle circulation and surrounding network performance.",
    },
  ];

  return (
    <main className="projectspage-page">
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="projectspage-navbar">
        <a href="/" className="projectspage-logo-wrap">
          <img
            src={apexNavLogo}
            alt="APEX Road Network"
            className="projectspage-navbar-logo-image"
          />

          <span className="projectspage-logo-name">
            APEX ROAD NETWORK<span>.</span>
          </span>
        </a>

        <nav className="projectspage-nav-links">
          <a href="/">
            Home
          </a>

          <a href="/about">
            About
          </a>

          <a href="/services">
            Services
          </a>

          <a
            href="/projects"
            className="active"
          >
            Projects
          </a>
        </nav>

        <a href="/contact" className="nav-button">
          Contact Us
        </a>
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
            

            <div className="projectspage-hero-location">
              SYDNEY <span>/</span> NSW
            </div>
          </div>

          <div className="projectspage-hero-copy projectspage-reveal">
            <h1>
              WORK BUILT
              <br />

              AROUND
              <br />

              <span>REAL ROADS.</span>
            </h1>

            <div className="projectspage-hero-description">
              <div></div>

              <p>
                A selection of traffic engineering work across
                planning, assessment, safety, access and
                construction support.
              </p>
            </div>
          </div>
        </div>

        <div className="projectspage-hero-footer">
          <span>
            APEX ROAD NETWORK
          </span>

          <div></div>

          <span>
            PLANNING · SAFETY · DELIVERY
          </span>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROJECT
      ====================================================== */}

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

            <span className="projectspage-featured-number">
              01
            </span>
          </div>

          <div className="projectspage-featured-card projectspage-reveal">
            <div className="projectspage-featured-image">
              <img
                src={projectImageOne}
                alt="Featured APEX traffic engineering project"
              />

              <div className="projectspage-featured-image-overlay"></div>

              <div className="projectspage-featured-image-label">
                <span>
                  APEX / PROJECT 01
                </span>

                <span>
                  TRAFFIC MANAGEMENT
                </span>
              </div>
            </div>

            <div className="projectspage-featured-content">
              <div className="projectspage-project-meta">
                <span>
                  Construction
                </span>

                <span>
                  Traffic Planning
                </span>

                <span>
                  Sydney NSW
                </span>
              </div>

              <h3>
                TRAFFIC MANAGEMENT
                <br />

                FOR ACTIVE PROJECT DELIVERY
              </h3>

              <p>
                Supporting active construction and infrastructure
                environments with traffic management planning
                designed around access, staging, vehicle movement
                and safe network operation.
              </p>

              <div className="projectspage-featured-details">
                <div>
                  <small>
                    Scope
                  </small>

                  <strong>
                    Traffic Management
                  </strong>
                </div>

                <div>
                  <small>
                    Focus
                  </small>

                  <strong>
                    Safety & Movement
                  </strong>
                </div>

                <div>
                  <small>
                    Region
                  </small>

                  <strong>
                    New South Wales
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
                key={project.number}
                className="projectspage-card projectspage-reveal"
              >
                <div className="projectspage-card-image">
                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <span className="projectspage-card-number">
                    {project.number}
                  </span>
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

                  <span className="projectspage-card-arrow">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="projectspage-cta">
        <div className="projectspage-cta-inner projectspage-reveal">
          <span className="projectspage-cta-label">
            HAVE A PROJECT?
          </span>

          <h2>
            LET'S BUILD
            <br />

            THE RIGHT
            <br />

            <span>
              WAY FORWARD.
            </span>
          </h2>

          <div className="projectspage-cta-bottom">
            <p>
              Tell us about your project and we can help identify
              the traffic engineering support required.
            </p>

            <a href="/#contact">
              Start A Conversation

              <span>
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="projectspage-footer">
        <div className="projectspage-footer-inner">
          <div className="projectspage-footer-main">
            <div className="projectspage-footer-brand">
              <div>
                <img
                  src={apexNavLogo}
                  alt="APEX"
                />

                <strong>
                  APEX ROAD NETWORK<span>.</span>
                </strong>
              </div>

              <p>
                Practical traffic engineering and transport
                solutions for projects across Sydney and New South
                Wales.
              </p>
            </div>

            <div className="projectspage-footer-column">
              <h3>
                Navigation
              </h3>

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

              <a href="/#contact">
                Contact
              </a>
            </div>

            <div className="projectspage-footer-column">
              <h3>
                Services
              </h3>

              <a href="/services">
                Traffic Management
              </a>

              <a href="/services">
                Road Safety
              </a>

              <a href="/services">
                Traffic Assessments
              </a>

              <a href="/services">
                Construction Advice
              </a>
            </div>

            <div className="projectspage-footer-column">
              <h3>
                Location
              </h3>

              <p>
                Sydney, New South Wales
              </p>

              <a href="mailto:hello@apexroadnetwork.com.au">
                hello@apexroadnetwork.com.au
              </a>
            </div>
          </div>

          <div className="projectspage-footer-bottom">
            <span>
              © {new Date().getFullYear()} APEX Road Network
            </span>

            <span>
              SYDNEY · NSW
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Projects;