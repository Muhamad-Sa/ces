const Services = () => {
  const services = [
    {
      icon: 'flaticon-data-analysis',
      title: 'Customer Support',
      description: 'Deliver fast, professional support across every channel. Handle inbound and outbound calls, live chat, emails, and customer inquiries.',
    },
    {
      icon: 'flaticon-monitoring',
      title: 'Sales & Cold Calling',
      description: 'Reach more prospects and create qualified opportunities. We handle cold calling, appointment setting, lead generation, and follow-ups.',
    },
    {
      icon: 'flaticon-fast-delivery',
      title: 'Virtual Assistants',
      description: 'Take daily tasks off your plate. We handle admin work, data entry, scheduling, emails, and other essential back-office operations.',
    },
    {
      icon: 'flaticon-fast-delivery',
      title: 'Performance Tracking',
      description: 'Stay in control with clear performance insights. Track KPIs, review call activity, monitor results, and identify opportunities to improve.',
    },
    {
      icon: 'flaticon-fast-delivery',
      title: 'Data Sourcing & Skip Tracing',
      description: 'Build better prospect lists with accurate data. We provide data sourcing, skip tracing, contact enrichment, and targeted list building.',
    },
  ];

  return (
    <section className="solutions-section rel z-1 rpb-70">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div className="section-title mb-55">
              <span className="sub-title">Our Services</span>
              <h2>Everything You Need to Scale In One Place</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-stretch">
          {services.map((service, index) => (
            <div key={index} className="col-xl col-md-6 mb-4 d-flex">
              <div className="solution-item d-flex flex-column h-100 w-100">
                <div className="solution-content justify-content-center align-item-center flex-wrap text-center">
                  <i className={service.icon}></i>
                  <h3><a href="single-service.html">{service.title}</a></h3>
                  <p className="mb-0 me-2 small text-muted text-center px-3">{service.description}</p>
                </div>
                <a href="single-service.html" className="learn-more mt-1 fw-bold">Learn More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img className="dots-shape" src="/assets/images/shapes/dots.png" alt="Shape" />
      <img className="tringle-shape" src="/assets/images/shapes/tringle.png" alt="Shape" />
      <img className="close-shape" src="/assets/images/shapes/close.png" alt="Shape" />
      <img className="circle-shape" src="/assets/images/shapes/circle.png" alt="Shape" />
    </section>
  );
};

export default Services;