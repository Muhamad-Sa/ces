const Services = () => {
  const services = [
    {
      icon: 'flaticon-data-analysis',
      title: 'Customer Support',
      description: 'Deliver fast, professional support across all channels. Inbound & outbound calls, Live chat support, Email handling, Ticket management.',
    },
    {
      icon: 'flaticon-monitoring',
      title: 'Sales & Cold Calling',
      description: 'We help you reach more prospects and book qualified opportunities. Cold calling, Appointment setting, Lead generation, Follow-ups.',
    },
    {
      icon: 'flaticon-fast-delivery',
      title: 'Virtual Assistants',
      description: 'From admin tasks to daily operations, we handle the workload so you can focus on growth. Admin & back-office work, Calendar & email management, Data entry & reporting, Personal assistance.',
    },
    {
      icon: 'flaticon-fast-delivery',
      title: 'Performance Tracking',
      description: 'Get full visibility and control over your operations. Daily & weekly performance reports, KPI tracking, Call reviews & insights, Process optimization.',
    },
    {
      icon: 'flaticon-fast-delivery',
      title: 'Data Sourcing & Skip Tracing',
      description: 'From admin tasks to daily operations, we handle the workload so you can focus on growth. Single and Bulk, Skip tracing (phone numbers, emails, owner data), Contact data enrichment, Prospect list building.',
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
        <div className="row align-items-center">
          {services.map((service, index) => (
            <div key={index} className="col-xl-3 col-md-6">
              <div className="solution-item">
                <div className="solution-content">
                  <i className={service.icon}></i>
                  <h3><a href="single-service.html">{service.title}</a></h3>
                  <p>{service.description}</p>
                </div>
                <a href="single-service.html" className="learn-more">Learn More <i className="fas fa-arrow-right"></i></a>
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