import { useEffect } from "react";
import "./App.css";

import truckHero from "./assets/truck-hero.png";
import projectOne from "./assets/project-one.jpg";
import projectTwo from "./assets/project-two.jpg";
import projectThree from "./assets/project-three.jpg";
import projectFour from "./assets/Truck_road.jpg";
import apexPhone from "./assets/apex-phone.png";
import apexInterchange from "./assets/apex-interchange.png";
import apexNavLogo from "./assets/apex-nav-logo.png";

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    // Fallback for older browsers: just show everything.
    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => {
        element.classList.add("reveal-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
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
    <main className="home-page">
      {/* =====================================================
          NAVIGATION
      ====================================================== */}
<header className="navbar">
  <a href="/" className="home-logo-wrap">
    <img
      src={apexNavLogo}
      alt="APEX Road Network"
      className="home-navbar-logo-image"
    />

    <span className="home-logo-name">
      APEX ROAD NETWORK<span>.</span>
    </span>
  </a>

  <nav className="nav-links">
    <a href="/" className="active">
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
  </nav>

  <a href="/contact" className="nav-button">
  Contact Us
</a>
</header>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="hero"
        id="home"
        style={{ backgroundImage: `url(${truckHero})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-grid"></div>

        <div className="hero-content reveal">
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            Reliable · Safe · Efficient
          </div>

          <h1>
            SMART TRAFFIC ENGINEERING
            <br />
            <span>KEEPS YOUR PROJECT MOVING</span>
          </h1>

          <p className="hero-description">
            Practical traffic solutions for complex civil and infrastructure projects across NSW and the ACT.
             Senior-led, site-focused and designed for smooth project delivery.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-button">
              Discuss Your Project
              <span>↗</span>
            </a>

            <a href="#services" className="secondary-button">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-bottom reveal">
          <div className="hero-brand">
            <span>APEX ROAD NETWORK</span>
            <div className="brand-line"></div>
          </div>

          
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      {/* =====================================================
    SERVICES
====================================================== */}

<section className="services-section" id="services">
  <div className="services-glow services-glow-one"></div>
  <div className="services-glow services-glow-two"></div>

  {/* =====================================================
      SERVICES INTRODUCTION
  ====================================================== */}

  <div className="services-header">
    <div className="services-heading-row">

      {/* Image */}
      <div className="services-header-visual services-phone-visual reveal">
        <div className="phone-glow"></div>

        <div
          className="phone-interactive"
          onMouseMove={(e) => {
            const box = e.currentTarget.getBoundingClientRect();

            const x = e.clientX - box.left;
            const y = e.clientY - box.top;

            const centerX = box.width / 2;
            const centerY = box.height / 2;

            const rotateY = ((x - centerX) / centerX) * 7;
            const rotateX = ((centerY - y) / centerY) * 7;

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
            e.currentTarget.style.setProperty("--rotate-x", "0deg");
            e.currentTarget.style.setProperty("--rotate-y", "0deg");
          }}
        >
          <img
            src={apexPhone}
            alt="APEX Road Network mobile branding"
            className="apex-phone-image"
          />
        </div>

        <div className="phone-detail phone-detail-one">
          <span></span>
          TRAFFIC ENGINEERING
        </div>

        <div className="phone-detail phone-detail-two">
          Apex Road Network
        </div>
      </div>

      {/* Heading */}
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
          <span>PRACTICAL</span>
        </h2>

        <p>
          Senior-led traffic engineering support for infrastructure,
          civil construction, road upgrades, bridge works and development
          projects across NSW and the ACT. Practical solutions designed
          around real construction and operational conditions.
        </p>
      </div>
    </div>
  </div>

  {/* =====================================================
      SERVICES GRID
  ====================================================== */}

  <div className="services-grid">

    {/* 01 */}
    <article className="service-card reveal">
      <div className="service-number">01</div>

      <div className="service-card-content">
        <span className="service-label">Safety</span>

        <h3>Road Safety Audits</h3>

        <p>
          Independent road safety audits for infrastructure, road upgrades
          and development projects, identifying risks at every stage.
        </p>
      </div>

      <div className="service-arrow">↗</div>
    </article>

    {/* 02 */}
    <article className="service-card reveal">
      <div className="service-number">02</div>

      <div className="service-card-content">
        <span className="service-label">Planning</span>

        <h3>Traffic Management Plans</h3>

        <p>
          Practical CTMPs and TMPs developed for civil construction,
          infrastructure works and complex live traffic environments.
        </p>
      </div>

      <div className="service-arrow">↗</div>
    </article>

    {/* 03 */}
    <article className="service-card reveal">
      <div className="service-number">03</div>

      <div className="service-card-content">
        <span className="service-label">Staging</span>

        <h3>Traffic Staging Design</h3>

        <p>
          Construction-focused staging solutions for roadworks, bridge works
          and major projects, maintaining access and safe traffic movement.
        </p>
      </div>

      <div className="service-arrow">↗</div>
    </article>

    {/* 04 */}
    <article className="service-card reveal">
      <div className="service-number">04</div>

      <div className="service-card-content">
        <span className="service-label">Analysis</span>

        <h3>Traffic Modelling</h3>

        <p>
          Detailed traffic modelling and network analysis supporting
          infrastructure, development and transport planning decisions.
        </p>
      </div>

      <div className="service-arrow">↗</div>
    </article>

    {/* 05 */}
    <article className="service-card reveal">
      <div className="service-number">05</div>

      <div className="service-card-content">
        <span className="service-label">Assessment</span>

        <h3>Traffic Impact Statements</h3>

        <p>
          Traffic assessments covering access, network performance,
          vehicle movements and the impacts of proposed developments.
        </p>
      </div>

      <div className="service-arrow">↗</div>
    </article>

    {/* 06 */}
    <article className="service-card reveal">
      <div className="service-number">06</div>

      <div className="service-card-content">
        <span className="service-label">Access</span>

        <h3>Site Access Design</h3>

        <p>
          Safe and practical access design for construction sites,
          heavy vehicles, utilities and changing project conditions.
        </p>
      </div>

      <div className="service-arrow">↗</div>
    </article>

  </div>

  {/* =====================================================
      SERVICES LINK
  ====================================================== */}

  <div className="services-link-wrap reveal">
    <a href="/services" className="services-link">
      Explore all services
      <span>→</span>
    </a>
  </div>

  {/* =====================================================
      SCROLLING BANNER
  ====================================================== */}

  <div className="services-marquee">
    <div className="services-marquee-track">

      <span>TRAFFIC ENGINEERING</span>
      <span className="marquee-dot"></span>

      <span>ROAD SAFETY</span>
      <span className="marquee-dot"></span>

      <span>TRAFFIC STAGING</span>
      <span className="marquee-dot"></span>

      <span>TRANSPORT PLANNING</span>
      <span className="marquee-dot"></span>

      <span>INFRASTRUCTURE</span>
      <span className="marquee-dot"></span>

      <span>TRAFFIC MODELLING</span>
      <span className="marquee-dot"></span>

      <span>TRAFFIC ENGINEERING</span>
      <span className="marquee-dot"></span>

      <span>ROAD SAFETY</span>
      <span className="marquee-dot"></span>

      <span>TRAFFIC STAGING</span>
      <span className="marquee-dot"></span>

      <span>TRANSPORT PLANNING</span>
      <span className="marquee-dot"></span>

      <span>INFRASTRUCTURE</span>
      <span className="marquee-dot"></span>

      <span>TRAFFIC MODELLING</span>
      <span className="marquee-dot"></span>

    </div>
  </div>
</section>
      {/* =====================================================
          WHY CHOOSE APEX
      ====================================================== */}

{/* =====================================================
    WHY CHOOSE APEX
====================================================== */}

<section className="why-section" id="about">
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
        <span>BETTER PROJECTS</span>
      </h2>

      <div className="why-visual-wrap">
        <div className="why-visual-glow"></div>

        <div className="why-visual">
          <img
            src={apexInterchange}
            alt="APEX Road Network isometric highway interchange illustration"
            className="why-visual-image"
          />
        </div>
      </div>
    </div>

    <div className="why-section-right reveal">
      <p className="why-intro">
        Apex Road Network brings together more than 15 years of industry
        experience across traffic engineering, temporary traffic management
        and transport infrastructure projects throughout NSW and the ACT.
        Our experience spans major infrastructure, civil construction,
        road upgrades, bridge works, utilities and complex construction
        environments.
      </p>

      <div className="why-list">
        <article className="why-item">
          <span>01</span>

          <div>
            <h3>Proven Expertise</h3>

            <p>
              Senior-led experience working with TfNSW, Transport Canberra,
              local councils, principal contractors, developers and major
              infrastructure delivery organisations.
            </p>
          </div>
        </article>

        <article className="why-item">
          <span>02</span>

          <div>
            <h3>Practical Solutions</h3>

            <p>
              Traffic solutions designed to be technically compliant,
              practical and constructible, with real site and operational
              conditions considered from the outset.
            </p>
          </div>
        </article>

        <article className="why-item">
          <span>03</span>

          <div>
            <h3>Safety & Compliance</h3>

            <p>
              A strong focus on safe outcomes for workers, road users,
              pedestrians and surrounding communities throughout every
              stage of the project.
            </p>
          </div>
        </article>
      </div>

      <a href="#contact" className="why-button">
        Learn More About Us
        <span>↗</span>
      </a>
    </div>
  </div>
</section>
      {/* =====================================================
          QUOTE
      ====================================================== */}
{/* 
      <section className="quote-section">
        <div className="quote-grid"></div>

        <div className="quote-inner reveal">
          <span className="quote-mark">“</span>

          <blockquote>
            Good traffic engineering is not just about managing movement. It is
            about creating safer, clearer and more efficient outcomes for every
            road user.
          </blockquote>

          <div className="quote-footer">
            <div className="quote-line"></div>

            <div>
              <p>APEX Road Network</p>

              <span>Traffic Engineering & Transport Solutions</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section className="projects-section" id="projects">
        <div className="projects-grid-background"></div>
        <div className="projects-glow"></div>

        <div className="projects-inner">
          <div className="projects-header reveal">
            <div>
              <div className="projects-eyebrow">
                <span></span>
                Recent Work
              </div>

              <h2>
                RECENT
                <br />
                <span>PROJECTS</span>
              </h2>
            </div>

            <p>
              A showcase of APEX’s experience across traffic engineering, 
              transport infrastructure and complex project environments throughout NSW and the ACT.
            </p>
          </div>

          <div className="projects-list">
            {/* Large project */}
            <article className="project-card project-card-large reveal">
              <div className="project-image">
                <img
                  src={projectOne}
                  alt="Traffic management infrastructure project"
                />

                <div className="project-overlay"></div>

                <span className="project-number">01</span>

                <a
                  href="#contact"
                  className="project-arrow"
                  aria-label="Discuss traffic management planning project"
                >
                  ↗
                </a>
              </div>

              <div className="project-details">
                <div>
                  <span className="project-category">
                    Traffic Management Planning
                  </span>

                  <h3>Major Road Infrastructure Works</h3>
                </div>

                <p>
                  Traffic planning and engineering support developed to
                  maintain safe access, reduce disruption and support efficient
                  construction staging.
                </p>
              </div>
            </article>

            {/* Smaller projects */}
            <div className="projects-small-grid">
              <article className="project-card reveal">
                <div className="project-image">
                  <img
                    src={projectTwo}
                    alt="Construction traffic management project"
                  />

                  <div className="project-overlay"></div>

                  <span className="project-number">02</span>

                  <a
                    href="#contact"
                    className="project-arrow"
                    aria-label="Discuss construction traffic project"
                  >
                    ↗
                  </a>
                </div>

                <div className="project-details">
                  <div>
                    <span className="project-category">
                      Construction Support
                    </span>

                    <h3>Construction Traffic Strategy</h3>
                  </div>

                  <p>
                    Practical traffic advice supporting vehicle access,
                    pedestrian safety and changing construction conditions.
                  </p>
                </div>
              </article>

              <article className="project-card reveal">
                <div className="project-image">
                  <img
                    src={projectThree}
                    alt="Road network safety assessment project"
                  />

                  <div className="project-overlay"></div>

                  <span className="project-number">03</span>

                  <a
                    href="#contact"
                    className="project-arrow"
                    aria-label="Discuss road safety project"
                  >
                    ↗
                  </a>
                </div>

                <div className="project-details">
                  <div>
                    <span className="project-category">Road Safety</span>

                    <h3>Road Network Safety Review</h3>
                  </div>

                  <p>
                    A detailed review identifying potential risks and
                    recommending practical improvements for safer road
                    operation.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div className="projects-footer reveal">
            <a href="#contact" className="projects-link">
              Discuss your next project
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ====================================================== */}

      <section className="cta-section" id="contact">
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
              <span>LET'S TALK.</span>
            </h2>

            <p>
              Tell us what you are working on and we will help you find the
              right traffic engineering solution for your project.
            </p>
          </div>

          <a
            href="mailto:hello@apexroadnetwork.com.au"
            className="cta-button"
          >
            Chat to Us Now
            <span>↗</span>
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
              <a href="#home" className="footer-logo">
                APEX ROAD NETWORK<span>.</span>
              </a>

              <p>
                Practical traffic engineering and transport solutions designed
                to keep projects safe, compliant and moving.
              </p>
            </div>

            <div className="footer-column">
              <h3>Navigation</h3>

              <nav className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>

            <div className="footer-column">
              <h3>Services</h3>

              <div className="footer-links">
                <a href="#services">Traffic Management Plans</a>
                <a href="#services">Traffic Control Plans</a>
                <a href="#services">Road Safety Audits</a>
                <a href="#services">Traffic Impact Assessments</a>
              </div>
            </div>

            <div className="footer-column footer-contact">
              <h3>Contact</h3>

              <a href="mailto:hello@apexroadnetwork.com.au">
                hello@apexroadnetwork.com.au
              </a>

              <a href="tel:+61000000000">+61 000 000 000</a>

              <p>Sydney, New South Wales</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} APEX Road Network. All rights
              reserved.
            </p>

            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;