const Newsletter = () => {
  return (
    <section className="newsletter-section rel z-2">
      <div className="container">
        <div className="newsletter-inner bg-blue bgs-cover text-white rel z-1">
          <div className="for-adjust-spacing"></div>
          <div className="row align-items-center align-items-xl-start">
            <div className="col-lg-6">
              <div className="newsletter-content p-60">
                <div className="section-title mb-30">
                  <span className="sub-title">Our Newsletter</span>
                  <h2>Subscribe Our Newsletter to Get More Updates</h2>
                </div>
                <form className="newsletter-form" action="#">
                  <div className="newsletter-email">
                    <input type="email" placeholder="Enter Email Address" required />
                    <button type="submit">Sign up <i className="fas fa-angle-right"></i></button>
                  </div>
                  <div className="newsletter-radios">
                    <div className="custom-control custom-radio">
                      <input type="radio" className="custom-control-input" id="wekly" name="example1" defaultChecked />
                      <label className="custom-control-label" htmlFor="wekly">Wekly Updates</label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input type="radio" className="custom-control-input" id="monthly" name="example1" />
                      <label className="custom-control-label" htmlFor="monthly">Monthly Updates</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="newsletter-images">
                <img src="/assets/images/newsletter/newsletter.png" alt="Newsletter" />
                <img src="/assets/images/newsletter/circle.png" alt="shape" className="circle slideUpRight" />
                <img src="/assets/images/newsletter/dots.png" alt="shape" className="dots slideLeftRight" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;