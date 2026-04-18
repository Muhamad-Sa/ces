const Features = () => {
  const features = [
    {
      icon: 'flaticon-layers',
      title: 'Trained, performance-driven agents',
      description: '',
    },
    {
      icon: 'flaticon-market',
      title: 'Fast onboarding & deployment',
      description: '',
    },
    {
      icon: 'flaticon-development',
      title: 'Scalable teams (start small, grow fast)',
      description: '',
    },
    {
      icon: 'flaticon-pie-chart',
      title: 'Cost-effective vs in-house hiring',
      description: '',
    },
    {
      icon: 'flaticon-pie-chart',
      title: 'Multi-channel expertise (calls, chat, email)',
      description: '',
    },
    {
      icon: 'flaticon-pie-chart',
      title: 'Dedicated team aligned with your business',
      description: '',
    },
  ];

  return (
    <section className="features-section bg-lighter rel z-1 pt-215 rpt-150 pb-130 rpb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="feature-content rpt-35 rmb-55">
              <div className="section-title mb-35">
                <span className="sub-title">Why Choose Us</span>
                <h2>More Than Outsourcing - A True Growth Partner & Beyond</h2>
              </div>
              <div className="row">
                {features.map((feature, index) => (
                  <div key={index} className="col-xl-6 col-lg-12 col-md-6">
                    <div className="feature-item">
                      <i className={feature.icon}></i>
                      <div className="content">
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="contact.html" className="theme-btn style-three mt-15">Get Started <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-images">
              <img className="first z-1 slideUpDown" src="/assets/images/features/feature1.png" alt="Feature" />
              <img className="second z-2 slideLeftRight" src="/assets/images/features/feature2.png" alt="Feature" />
              <img className="third z-3 slideLeftRight delay-2-0s" src="/assets/images/features/feature3.png" alt="Feature" />
              <img className="fourth z-5 slideUpDown" src="/assets/images/features/feature4.png" alt="Feature" />
              <img className="circle-line z-4 slideUpRight" src="/assets/images/features/feature-circle-line.png" alt="Feature" />
            </div>
          </div>
        </div>
      </div>
      <img className="dots-shape" src="/assets/images/shapes/dots.png" alt="Shape" />
      <img className="tringle-shape" src="/assets/images/shapes/tringle.png" alt="Shape" />
      <img className="close-shape" src="/assets/images/shapes/close.png" alt="Shape" />
      <img className="circle-shape" src="/assets/images/shapes/circle.png" alt="Shape" />
    </section>
  );
};

export default Features;