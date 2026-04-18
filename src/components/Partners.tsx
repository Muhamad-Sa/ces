const Partners = () => {
  return (
    <section className="partners-section rel z-1 pt-250 rpt-150 pb-90 rpb-60">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-10">
            <div className="section-title mb-45">
              <h2>We’ve <span>1253+</span> More Then Trusted Premium Global Partners</h2>
            </div>
            <div className="row">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="col-lg-3 col-sm-4 col-6">
                  <a className="partner-item" href="project-details.html">
                    <img src={`/assets/images/partners/partner${i + 1}.png`} alt="Partner" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hero-about-bg">
        <img src="/assets/images/shapes/hero-about-bg.png" alt="Background" />
      </div>
    </section>
  );
};

export default Partners;