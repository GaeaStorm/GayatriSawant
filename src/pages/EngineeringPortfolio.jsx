import "./Projects.css";

function EngineeringPortfolio() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="section-label">Engineering Portfolio</p>
        <h1>Engineering Projects</h1>
        <p className="section-intro">
          A deeper look at the software systems, infrastructure work, and technical builds
          I’ve contributed to across cloud, distributed systems, and applied engineering.
        </p>
      </div>

      <div className="project-grid">
        <article className="project-card featured">
          <p className="project-type">Cloud Infrastructure</p>
          <h2>Oracle Cloud Infrastructure</h2>
          <p>
            Add your engineering-focused Oracle work here: architecture, ownership,
            technical depth, reliability, debugging, performance, launch impact, etc.
          </p>
        </article>

        <article className="project-card">
          <p className="project-type">Systems</p>
          <h2>Distributed Systems Work</h2>
          <p>
            Add engineering projects, infra improvements, platform work, ML systems,
            internal tools, or technical experiments here.
          </p>
        </article>
      </div>
    </section>
  );
}

export default EngineeringPortfolio;