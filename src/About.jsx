import { useEffect } from "react";
import "./About.css";

import apexNavLogo from "./assets/apex-nav-logo.png";
import aboutHero from "./assets/about-apex-hero.png";
import apexInterchange from "./assets/Night.png";
import missionRoad from "./assets/Intersection.png";
import constructionVisual from "./assets/truck.png";
function About() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const elements = document.querySelectorAll(".about-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("about-reveal-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-reveal-visible");
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

  return (
    <main className="about-page">
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header className="about-navbar">
        <a href="/" className="about-logo-wrap">
          <img
            src={apexNavLogo}
            alt="APEX Road Network"
            className="about-navbar-logo-image"
          />

          <span className="about-logo-name">
            APEX ROAD NETWORK<span>.</span>
          </span>
        </a>

        <nav className="about-nav-links">
          <a href="/">Home</a>

          <a href="/about" className="active">
            About
          </a>

          <a href="/services">Services</a>

          <a href="/#projects">Projects</a>
        </nav>

        <a href="/contact" className="nav-button">
          Contact Us
        </a>
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
                <span>ACTUALLY WORK.</span>
              </h1>
            </div>

            <div className="about-hero-description about-reveal">
              <div className="about-hero-description-line"></div>

              
            </div>
          </div>
        </div>

        <div className="about-hero-footer">
          <span>APEX ROAD NETWORK</span>

          <div></div>

          <span>TRAFFIC ENGINEERING · SYDNEY NSW</span>
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
        <span>THE REAL WORLD.</span>
      </h2>

      {/* Construction visual */}
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
        APEX Road Network is a Sydney-based traffic engineering consultancy
        with more than 15 years of industry experience across NSW and the ACT.
      </p>

      <p>
        Our experience covers traffic engineering, temporary traffic management,
        construction traffic management and transport infrastructure across a
        wide range of project environments. From major infrastructure and civil
        works to road upgrades, bridge projects, utilities and developments, we
        understand the practical demands that come with keeping projects moving safely.
      </p>

      <p>
        Our team has previously worked with TfNSW, Transport Canberra, local councils,
        principal contractors, developers, utilities and major infrastructure delivery
        organisations. This has given us a strong understanding of how different
        stakeholders work together and what is required at each stage of a project.
      </p>

      <p>
        We take a practical approach to every job. Our solutions are developed with
        construction, site conditions, access, road users and project requirements in
        mind, so they are not only compliant on paper but realistic to implement on site.
      </p>

      <p>
        From early planning and design through to construction and delivery, our focus
        is on providing reliable traffic engineering support that helps create safer,
        more efficient and better-managed project environments.
      </p>

      <div className="about-who-signature">
        <span></span>

        <div>
          <strong>APEX ROAD NETWORK</strong>
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
              Every road, development and construction site comes with its own
              challenges. Our role is to understand those challenges and
              provide practical advice that gives our clients clarity and
              confidence to move forward.
            </p>

            <p>
              We want APEX to be recognised not only for the quality of our
              technical work, but for the relationships we build. Clear
              communication, practical thinking and genuine care for every
              project remain at the heart of how we work.
            </p>

            <div className="about-director-signature">
              <span></span>

              <div>
                <strong>DIRECTOR</strong>
                <small>APEX Road Network</small>
              </div>
            </div>
          </div>

          <div className="about-director-visual about-reveal">
            <div className="about-director-image">
              <img
                src={apexInterchange}
                alt="APEX road network"
              />

              <div className="about-director-image-overlay"></div>

              
              <div className="about-director-image-bottom">
                <span>APEX ROAD NETWORK</span>
                <span>Traffic Engineering Solutions</span>
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

      {/* Mission text */}
      <div className="about-mission-content">
        <h2>
          TO MAKE COMPLEX
          <br />
          ROADS, PROJECTS
          <br />
          AND MOVEMENT
          <br />
          <span>SIMPLE TO UNDERSTAND.</span>
        </h2>

        <div className="about-mission-bottom">
          <div></div>

          <p>
            Through practical engineering, thoughtful planning and clear
            communication, our mission is to help create safer networks and
            support projects that move forward with confidence.
          </p>
        </div>
      </div>

      {/* Mission image */}
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
          <span>EVERY PROJECT.</span>
        </h2>
      </div>

      <div className="about-values-big-number">
        4 Core Values
      </div>
    </div>

    <div className="about-values-list">

      <article className="about-value about-reveal">
  <div className="about-value-icon">
    <span>01</span>
  </div>

  <h3>Integrity</h3>

  <p>
    We work with honesty, accountability and professionalism, building trust
    through clear advice and dependable outcomes.
  </p>
</article>

<article className="about-value about-reveal">
  <div className="about-value-icon">
    <span>02</span>
  </div>

  <h3>Safety</h3>

  <p>
    Safety is at the centre of every decision, with careful consideration for
    workers, road users, pedestrians and surrounding communities.
  </p>
</article>

<article className="about-value about-reveal">
  <div className="about-value-icon">
    <span>03</span>
  </div>

  <h3>Practical Thinking</h3>

  <p>
    We develop solutions that work in real project environments, balancing
    engineering requirements with site conditions and constructability.
  </p>
</article>

<article className="about-value about-reveal">
  <div className="about-value-icon">
    <span>04</span>
  </div>

  <h3>Collaboration</h3>

  <p>
    We work closely with clients, contractors and stakeholders to create clear,
    coordinated solutions and better project outcomes.
  </p>
</article>
    </div>

  </div>
</section>
      {/* =====================================================
          CLOSING
      ====================================================== */}

      <section className="about-closing">
        <div className="about-closing-inner about-reveal">
          <span className="about-closing-label">
            APEX ROAD NETWORK
          </span>

          <h2>
            BETTER THINKING.
            <br />
            SAFER ROADS.
            <br />
            <span>STRONGER PROJECTS.</span>
          </h2>

          <div className="about-closing-footer">
            <p>
              From early planning through to project delivery, we are here to
              help identify the right traffic engineering solution for your
              project.
            </p>

            <a href="/#contact">
              Start A Conversation
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="about-footer">
        <div className="about-footer-inner">
          <div className="about-footer-main">
            <div className="about-footer-brand">
              <div className="about-footer-logo">
                <img
                  src={apexNavLogo}
                  alt="APEX"
                />

                <strong>
                  APEX ROAD NETWORK<span>.</span>
                </strong>
              </div>

              <p>
                Practical traffic engineering and transport solutions designed
                around real projects and real conditions.
              </p>
            </div>

            <div className="about-footer-column">
              <h3>Navigation</h3>

              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/#projects">Projects</a>
              <a href="/#contact">Contact</a>
            </div>

            <div className="about-footer-column">
              <h3>Services</h3>

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

            <div className="about-footer-column">
              <h3>Location</h3>

              <p>Sydney, New South Wales</p>

              <a href="mailto:hello@apexroadnetwork.com.au">
                hello@apexroadnetwork.com.au
              </a>
            </div>
          </div>

          <div className="about-footer-bottom">
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

export default About;