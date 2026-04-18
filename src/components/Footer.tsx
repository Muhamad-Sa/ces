const Footer = () => {
  return (
    <footer className="footer-section bg-lighter rel z-1">
      <div className="container">
        <div className="call-to-action bg-blue bgs-cover text-white rel z-1">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="section-title mb-20">
                <h2>Have Any Help to Saas Solutions?</h2>
                <p>Professional service for your software solutions</p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="call-to-action-btns text-xl-right mb-20">
                <a href="contact.html" className="theme-btn style-two rmb-15">Get Started <i className="fas fa-arrow-right"></i></a>
                <a href="about.html" className="theme-btn style-three rmb-15">Learn More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
          <img className="white-circle" src="/assets/images/shapes/white-circle.png" alt="White Circle" />
          <img className="white-dots slideUpRight" src="/assets/images/shapes/white-dots.png" alt="shape" />
          <img className="white-dots-circle slideLeftRight" src="/assets/images/shapes/white-dots-circle.png" alt="shape" />
        </div>

        <div className="row justify-content-between">
          <div className="col-xl-3 col-sm-6 col-7 col-small">
            <div className="footer-widget about-widget">
              <div className="footer-logo mb-20">
                <a href="index.html"><img src="/assets/images/logos/logo.png" alt="Logo" /></a>
              </div>
              <p>Sed perspiciatis unde omnis istee sit voluptatem accusante <b>laudantium</b> aperiam eaque abillo inventore</p>
              <a href="about.html" className="read-more">Read More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="col-xl-2 col-sm-4 col-5 col-small">
            <div className="footer-widget link-widget">
              <h4 className="footer-title">About</h4>
              <ul className="list-style-two">
                <li><a href="projects.html">Success History</a></li>
                <li><a href="team-details.html">Meet The Team</a></li>
                <li><a href="blog.html">Latest News</a></li>
                <li><a href="contact.html">Need a Career?</a></li>
                <li><a href="single-service.html">Popular Service</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-md-8">
            <div className="footer-widget link-widget">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="list-style-two two-column">
                <li><a href="single-service.html">Software Solutions</a></li>
                <li><a href="single-service.html">Market Analysis</a></li>
                <li><a href="single-service.html">Web Development</a></li>
                <li><a href="single-service.html">Digital Solutions</a></li>
                <li><a href="single-service.html">Graphics Design</a></li>
                <li><a href="single-service.html">Consultations</a></li>
                <li><a href="single-service.html">Application Design</a></li>
                <li><a href="single-service.html">Success Rate</a></li>
                <li><a href="single-service.html">SEO Optimization</a></li>
                <li><a href="single-service.html">User Research</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-md-4">
            <div className="footer-widget contact-widget">
              <h4 className="footer-title">Get in Touch</h4>
              <ul className="list-style-three">
                <li><i className="fas fa-map-marker-alt"></i> 55 Main Street, New York</li>
                <li><i className="fas fa-envelope-open"></i> <a href="mailto:support@gmail.com">support@gmail.com</a></li>
                <li><i className="fas fa-phone"></i> Call : <a href="callto:+012(345)678">+012 (345) 678</a></li>
              </ul>
              <div className="social-style-one mt-25">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area text-center">
          <p>© 2022 <a href="index.html">Sland.</a> All rights reserved</p>
        </div>
      </div>
      <img className="dots-shape" src="/assets/images/shapes/dots.png" alt="Shape" />
      <img className="tringle-shape" src="/assets/images/shapes/tringle.png" alt="Shape" />
      <img className="close-shape" src="/assets/images/shapes/close.png" alt="Shape" />
      <img className="circle-shape" src="/assets/images/shapes/circle.png" alt="Shape" />
      <div className="left-circles"></div>
      <div className="right-circles"></div>
    </footer>
  );
};

export default Footer;