const AboutUs = () => {
  return (
    <section className="about-section rel z-1 pb-45 pt-100 rpb-15" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6">
            <div className="about-image rmb-55">
              <img src="/assets/images/about/what-we-provide.png" alt="About" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="about-content">
              <div className="section-title mb-25">
                <span className="sub-title">About Us</span>
                <h2>Your Offshore Team, Built for Performance</h2>
              </div>
              <p>Since 2019, we’ve been helping businesses worldwide scale their operations with reliable, high-quality remote teams. We don’t just provide agents, we build teams that represent your brand, communicate with your customers and drive real results.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;