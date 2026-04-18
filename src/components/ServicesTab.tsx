const ServicesTab = () => {
  const tabs = [
    {
      id: 'design',
      title: 'Design & Development',
      content: {
        title: 'Creative Designer Professional Developer Are Made Easy',
        description: 'Sed ut perspiciatis unde omnis istee sit voluptatem accusantium doloremque laudantium aperiam eaque ipsa quae abillo inventore veritatis',
        list: ['30-day free trial of our premium plan', '100% Free - No payments required', 'Lifetime Upgradate'],
        image: '/assets/images/services/service-chart.png',
      },
    },
    {
      id: 'software',
      title: 'Software & Equipments',
      content: {
        title: 'Let’s See Awesome Software UI Design Scrrenshot',
        description: 'Sed ut perspiciatis unde omnis istee sit voluptatem accusantium doloremque laudantium aperiam eaque ipsa quae abillo inventore veritatis',
        list: ['30-day free trial of our premium plan', '100% Free - No payments required', 'Lifetime Upgradate'],
        image: '/assets/images/services/service-tab-2.png',
      },
    },
    {
      id: 'members',
      title: 'Team Members & Tools',
      content: {
        title: 'Creative Designer Professional Developer Are Made Easy',
        description: 'Sed ut perspiciatis unde omnis istee sit voluptatem accusantium doloremque laudantium aperiam eaque ipsa quae abillo inventore veritatis',
        list: ['30-day free trial of our premium plan', '100% Free - No payments required', 'Lifetime Upgradate'],
        image: '/assets/images/about/borwser-support.jpg',
      },
    },
    {
      id: 'analysis',
      title: 'Market Analysis',
      content: {
        title: 'Contact Us to Get Your 7days Free Trial Version',
        description: 'Sed ut perspiciatis unde omnis istee sit voluptatem accusantium doloremque laudantium aperiam eaque ipsa quae abillo inventore veritatis',
        list: ['30-day free trial of our premium plan', '100% Free - No payments required', 'Lifetime Upgradate'],
        image: '/assets/images/services/service-dashboard.jpg',
      },
    },
    {
      id: 'activity',
      title: 'User Activity',
      content: {
        title: 'Everything You Want To Know About Voice User Interfaces',
        description: 'Sed ut perspiciatis unde omnis istee sit voluptatem accusantium doloremque laudantium aperiam eaque ipsa quae abillo inventore veritatis',
        list: ['30-day free trial of our premium plan', '100% Free - No payments required', 'Lifetime Upgradate'],
        image: '/assets/images/dashboard-screenshots/dashboard-screenshot1.jpg',
      },
    },
  ];

  return (
    <section className="services-section rel z-3 py-130 rpy-100" id="service">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="section-title mb-40">
              <span className="sub-title">Services We Provide</span>
              <h2>Custom Made Reports to Make Great Decisions</h2>
            </div>
          </div>
        </div>
        <div className="services-tab">
          <ul className="nav nav-pills nav-fill mb-50">
            {tabs.map((tab) => (
              <li key={tab.id} className="nav-item">
                <a className={`nav-link ${tab.id === 'design' ? 'active' : ''}`} data-toggle="tab" href={`#${tab.id}`}>{tab.title}</a>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            {tabs.map((tab) => (
              <div key={tab.id} className={`tab-pane fade ${tab.id === 'design' ? 'show active' : ''}`} id={tab.id}>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="service-content rmb-55">
                      <h3>{tab.content.title}</h3>
                      <p>{tab.content.description}</p>
                      <ul className="list-style-one">
                        {tab.content.list.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <a href="single-service.html" className="read-more mt-25">Read More <i className="fas fa-arrow-right"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="services-image">
                      <img src={tab.content.image} alt="chart" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="dots-circle-half">
        <img src="/assets/images/shapes/dots-circle-half.png" alt="shape" />
      </div>
    </section>
  );
};

export default ServicesTab;