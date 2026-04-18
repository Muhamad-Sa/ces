const Hero = () => {
  return (
    <section className="hero-section rel z-2 pt-210 pb-75" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-11">
            <div className="hero-content rmb-75">
              <span className="sub-title">We Help Businesses Scale Faster with Dedicated Remote Teams</span>
              <h1 className="mb-15">Scale Your Business Without Hiring In-House Teams</h1>
              <p>We provide trained remote agents for customer support, sales, lead generation and virtual assistance so you can grow faster, without the overhead.</p>
              <p>From handling your customers to generating leads and managing daily operations, we build teams that work like an extension of your business and beyond.</p>
              <div className="hero-btns mt-40">
                <a href="#contact" className="theme-btn mb-15">Let’s Talk <i className="fas fa-arrow-right"></i></a>
                <a href="#services" className="theme-btn style-two mb-15">Learn More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image">
              <img src="/assets/images/hero/hero.png" alt="Hero" />
            </div>
          </div>
        </div>
      </div>
      <img className="dots-shape" src="/assets/images/shapes/dots.png" alt="Shape" />
      <img className="tringle-shape" src="/assets/images/shapes/tringle.png" alt="Shape" />
      <img className="close-shape" src="/assets/images/shapes/close.png" alt="Shape" />
    </section>
  );
};

export default Hero;