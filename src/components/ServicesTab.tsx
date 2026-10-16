import { useState } from "react"; 
import { Link } from 'react-router-dom';

const ServicesTab = () => {
  const tabs = [
    {
      id: 'design',
      title: '💬 Customer Support',
      content: {
        description: 'Deliver fast, professional support across all channels.',
        list: ['Inbound & outbound calls', 'Live chat support', 'Email handling', 'Ticket management'],
        image: '/assets/images/services/service-chart.png',
      },
    },
    {
      id: 'software',
      title: '📞 Sales & Cold Calling',
      content: {
        description: 'We help you reach more prospects and book qualified opportunities.',
        list: ['Cold calling', 'Appointment setting', 'Lead generation', 'Follow-ups'],
        image: '/assets/images/services/service-tab-2.png',
      },
    },
    {
      id: 'members',
      title: '🧑‍💻 Virtual Assistants',
      content: {
        description: 'From admin tasks to daily operations, we handle the workload so you can focus on growth.',
        list: ['Admin & back-office work', 'Calendar & email management', 'Data entry & reporting', 'Personal assistance'],
        image: '/assets/images/about/borwser-support.jpg',
      },
    },
    {
      id: 'analysis',
      title: '📊 Performance Tracking',
      content: {
        description: 'Get full visibility and control over your operations.',
        list: ['Daily & weekly performance reports', 'KPI tracking', 'Call reviews & insights', 'Process optimization'],
        image: '/assets/images/services/service-dashboard.jpg',
      },
    },
    {
      id: 'activity',
      title: '🔍 Data Sourcing & Skip Tracing',
      content: {
        description: 'From admin tasks to daily operations, we handle the workload so you can focus on growth.',
        list: ['Single and Bulk', 'Skip tracing (phone numbers, emails, owner data)', 'Contact data enrichment', 'Prospect list building'],
        image: '/assets/images/dashboard-screenshots/dashboard-screenshot1.jpg',
      },
    },
  ];

  const [activeTab, setActiveTab] = useState('design');

  return (
    <section className="services-section rel z-3 py-130 rpy-100" id="service">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-6 col-lg-8 col-md-10">
            <div className="section-title mb-40">
              <span className="sub-title">Services We Provide</span>
              <h2>Everything You Need to Scale In One Place</h2>
            </div>
          </div>
        </div>
        <div className="services-tab">
          <ul className="nav nav-pills nav-fill mb-50">
            {tabs.map((tab) => (
              <li key={tab.id} className="nav-item">
                <a
                  href="#"
                  className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault(); // prevent page jump
                    setActiveTab(tab.id);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            {tabs.map((tab) => (
              <div key={tab.id} className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`} id={tab.id}>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="service-content rmb-55">
                      <p>{tab.content.description}</p>
                      <ul className="list-style-one">
                        {tab.content.list.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      {/* Step 4: Updated to use React Router Link */}
                      <Link to="/single-service" className="read-more mt-25">
                        Read More <i className="fas fa-arrow-right"></i>
                      </Link>
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