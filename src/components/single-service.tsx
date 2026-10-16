import React, { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";

interface SubFeature {
  iconClass: string;
  title: string;
  description: string;
}

interface ServiceData {
  title: string;
  image: string;
  description: string;
  subFeatures: SubFeature[];
  summary: string;
  summaryList: string[];
}

const servicesData: Record<string, ServiceData> = {
  "customer-support": {
    title: "Customer Support",
    image: "assets/images/services/single-service.jpg",
    description:
      "We provide reliable customer support that keeps your customers heard, assisted, and satisfied. Our team handles inquiries, follows up with customers, resolves common issues, and helps maintain a professional experience across every interaction.",
    subFeatures: [
      {
        iconClass: "fas fa-search-dollar",
        title: "Responsive Support",
        description:
          "Quick and reliable assistance to keep customer requests moving.",
      },
      {
        iconClass: "fas fa-user-check", // Changed from 'fas fa-user-chart' to standard free FontAwesome class
        title: "Customer Focused",
        description:
          "Professional communication designed around your customers' needs.",
      },
      {
        iconClass: "fas fa-clock",
        title: "Consistent Service",
        description:
          "Reliable support that helps maintain a positive customer experience.",
      },
    ],
    summary:
      "Our customer support solutions help businesses manage day-to-day customer interactions without compromising quality. From answering inquiries and resolving issues to following up and maintaining communication, we help keep your customers supported while allowing your internal team to focus on core operations.",
    summaryList: [
      "Reliable customer communication",
      "Inquiry and issue handling",
      "Customer follow-ups",
    ],
  },
  "sales-cold-calling": {
    title: "Sales & Cold Calling",
    image: "assets/images/services/sales.jpg",
    description:
      "Our sales and cold calling services help businesses connect with potential customers, qualify opportunities, and build a stronger sales pipeline. We handle outreach professionally and consistently to help turn prospects into real opportunities.",
    subFeatures: [
      {
        iconClass: "fas fa-bullseye",
        title: "Targeted Outreach",
        description:
          "Reach potential customers with structured and focused calling campaigns.",
      },
      {
        iconClass: "fas fa-user-check",
        title: "Lead Qualification",
        description:
          "Identify prospects that match your business and sales requirements.",
      },
      {
        iconClass: "fas fa-history",
        title: "Consistent Follow-Up",
        description:
          "Keep promising opportunities moving with timely and professional follow-ups.",
      },
    ],
    summary:
      "Our team supports your sales process through outbound calls, prospect outreach, lead qualification, and follow-ups. We help businesses maintain consistent sales activity while providing a professional first point of contact for potential customers.",
    summaryList: [
      "Outbound sales calls",
      "Lead qualification",
      "Prospect follow-ups",
    ],
  },
  "virtual-assistants": {
    title: "Virtual Assistants",
    image: "assets/images/services/virtual-assistant.jpg",
    description:
      "Our virtual assistants provide dependable support for the everyday tasks that keep your business running. From administrative work and data entry to scheduling and online research, we help reduce workload and improve operational efficiency.",
    subFeatures: [
      {
        iconClass: "fas fa-sliders-h",
        title: "Flexible Support",
        description: "Get assistance that can adapt to your business needs.",
      },
      {
        iconClass: "fas fa-stopwatch",
        title: "Time Efficient",
        description:
          "Delegate repetitive tasks and give your team more time to focus.",
      },
      {
        iconClass: "fas fa-headset",
        title: "Reliable Assistance",
        description:
          "Consistent support for your day-to-day business operations.",
      },
    ],
    summary:
      "Our virtual assistant solutions help businesses delegate essential administrative and operational tasks to a reliable remote team. Whether you need ongoing assistance or support with specific tasks, we help save time, reduce workload, and keep operations organized.",
    summaryList: [
      "Administrative assistance",
      "Data entry and online research",
      "Scheduling and task management",
    ],
  },
  "performance-tracking": {
    title: "Performance Tracking",
    image: "assets/images/services/performance.jpg",
    description:
      "We help businesses monitor performance, organize key data, and gain a clearer view of their day-to-day operations. Our tracking solutions make it easier to identify progress, spot issues, and make informed business decisions.",
    subFeatures: [
      {
        iconClass: "fas fa-chart-line",
        title: "Clear Insights",
        description:
          "Turn performance data into information you can easily understand.",
      },
      {
        iconClass: "fas fa-tasks",
        title: "Accurate Tracking",
        description: "Maintain organized and reliable performance records.",
      },
      {
        iconClass: "fas fa-lightbulb",
        title: "Better Decisions",
        description:
          "Use meaningful data to identify opportunities and improve results.",
      },
    ],
    summary:
      "Our performance tracking services give businesses a structured way to monitor important activities and results. By keeping performance data organized and accessible, we help you understand what is working, identify areas for improvement, and make better operational decisions.",
    summaryList: [
      "Performance monitoring",
      "Data organization and reporting",
      "Progress and result tracking",
    ],
  },
  "data-sourcing": {
    title: "Data Sourcing",
    image: "assets/images/services/data-sourcing.jpg",
    description:
      "We help businesses source, organize, and verify valuable data while locating hard-to-reach prospects and contacts. Our team focuses on accurate research and structured information to support better outreach and business decisions.",
    subFeatures: [
      {
        iconClass: "fas fa-database",
        title: "Accurate Data",
        description:
          "Source and organize relevant information with attention to accuracy.",
      },
      {
        iconClass: "fas fa-search-plus",
        title: "Detailed Research",
        description:
          "Research prospects and contacts to build more complete records.",
      },
      {
        iconClass: "fas fa-bolt",
        title: "Efficient Sourcing",
        description:
          "Save time by outsourcing time-consuming data research and sourcing.",
      },
    ],
    summary:
      "Our data sourcing and skip tracing services help businesses find relevant information and improve the quality of their contact databases. We research, organize, and enrich available data to help your team work with more useful and actionable information.",
    summaryList: [
      "Data sourcing and research",
      "Skip tracing and contact discovery",
      "Data verification and organization",
    ],
  },
};

export const SingleServicePage: React.FC = () => {
  const [activeServiceKey, setActiveServiceKey] =
    useState<string>("customer-support");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [language, setLanguage] = useState<string>("English");
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [updateFrequency, setUpdateFrequency] = useState<"weekly" | "monthly">(
    "weekly",
  );

  const currentService =
    servicesData[activeServiceKey] || servicesData["customer-support"];

  const handleSearchSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  const handleNewsletterSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Newsletter signup:", {
      email: newsletterEmail,
      frequency: updateFrequency,
    });
  };

  return (
    <div className="inner-page">
      <div className="page-wrapper">
        <div className="preloader" />

        <header className="main-header">
          <div className="header-top text-center text-white bg-blue py-5">
            <div className="container rel z-1">
              <p>Welcome to SLand a Modern Saaslanding Template</p>
              <img
                className="header-left-shape"
                src="assets/images/shapes/header-top-left.png"
                alt="shape"
              />
              <img
                className="header-right-shape slideLeftRight infinite"
                src="assets/images/shapes/header-top-right.png"
                alt="shape"
              />
            </div>
          </div>

          <div className="header-upper bg-white">
            <div className="container clearfix">
              <div className="header-inner py-20 border-bottom-0">
                <div className="logo-outer">
                  <div className="logo">
                    <Link to="/">
                      <img src="assets/images/logos/logo.png" alt="Logo" />
                    </Link>
                  </div>
                </div>

                <div className="nav-outer clearfix">
                  <nav className="main-menu navbar-expand-lg">
                    <div className="navbar-header">
                      <div className="logo-mobile">
                        <Link to="/">
                          <img src="assets/images/logos/logo.png" alt="Logo" />
                        </Link>
                      </div>
                      <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                      >
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </div>

                    <div
                      className="navbar-collapse collapse clearfix"
                      id="main-menu"
                    >
                      <ul className="navigation clearfix">
                        <li className="dropdown">
                          <Link to="/">home</Link>
                          <ul>
                            <li>
                              <Link to="/">Home One</Link>
                            </li>
                            <li>
                              <Link to="/">Home Two</Link>
                            </li>
                            <li>
                              <Link to="/">Home Three</Link>
                            </li>
                            <li>
                              <Link to="/">Home 3 Dark</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/#about">about</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/#service">Service</Link>
                          <ul>
                            <li>
                              <Link to="/#projects">Projects</Link>
                            </li>
                            <li>
                              <Link to="/#project-details">
                                Project details
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <Link to="/#blog">blog</Link>
                          <ul>
                            <li>
                              <Link to="/#blog">blog standard</Link>
                            </li>
                            <li>
                              <Link to="/#blog-details">blog details</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>

                <div className="menu-right d-none d-lg-flex align-items-center ml-lg-auto">
                  <div className="nav-search">
                    <button type="button" className="fa fa-search" />
                    <form
                      action="#"
                      className="hide"
                      onSubmit={handleSearchSubmit}
                    >
                      <input
                        type="text"
                        placeholder="Search"
                        className="searchbox"
                        required
                        value={searchQuery}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setSearchQuery(e.target.value)
                        }
                      />
                      <button
                        type="submit"
                        className="searchbutton fa fa-search"
                      />
                    </form>
                  </div>

                  <select
                    name="language"
                    id="language"
                    value={language}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                      setLanguage(e.target.value)
                    }
                  >
                    <option value="English">English</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Arabic">Arabic</option>
                  </select>

                  <a
                    href="https://calendly.com/contactedgesolutions/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn style-two"
                  >
                    Get Started <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          className="page-banner bg-blue rel z-1"
          style={{
            backgroundImage: "url(assets/images/background/banner-bg.png)",
          }}
        >
          <div className="container">
            <div className="banner-inner">
              <h1 className="page-title wow fadeInUp delay-0-2s">
                {currentService.title}
              </h1>
            </div>
          </div>
          <img
            className="dots-shape"
            src="assets/images/shapes/white-dots-two.png"
            alt="Shape"
          />
          <img
            className="tringle-shape slideLeftRight"
            src="assets/images/shapes/white-tringle.png"
            alt="Shape"
          />
          <img
            className="close-shape"
            src="assets/images/shapes/white-close.png"
            alt="Shape"
          />
          <img
            className="banner-circle slideUpRight"
            src="assets/images/newsletter/circle.png"
            alt="shape"
          />
          <img
            className="dots-shape-three slideUpDown delay-1-5s"
            src="assets/images/shapes/white-dots-three.png"
            alt="Shape"
          />
        </section>

        <section className="single-servcie-section rel z-1 py-130 rpy-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5">
                <div className="service-sidebar rmb-75">
                  <div className="service-widget service-list wow fadeInUp delay-0-2s">
                    <ul>
                      <li
                        className={
                          activeServiceKey === "customer-support"
                            ? "active"
                            : ""
                        }
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setActiveServiceKey("customer-support")
                          }
                          className="btn-link-style"
                        >
                          Customer Support <i className="fas fa-angle-right" />
                        </button>
                      </li>
                      <li
                        className={
                          activeServiceKey === "sales-cold-calling"
                            ? "active"
                            : ""
                        }
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setActiveServiceKey("sales-cold-calling")
                          }
                          className="btn-link-style"
                        >
                          Sales &amp; Cold Calling{" "}
                          <i className="fas fa-angle-right" />
                        </button>
                      </li>
                      <li
                        className={
                          activeServiceKey === "virtual-assistants"
                            ? "active"
                            : ""
                        }
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setActiveServiceKey("virtual-assistants")
                          }
                          className="btn-link-style"
                        >
                          Virtual Assistants{" "}
                          <i className="fas fa-angle-right" />
                        </button>
                      </li>
                      <li
                        className={
                          activeServiceKey === "performance-tracking"
                            ? "active"
                            : ""
                        }
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setActiveServiceKey("performance-tracking")
                          }
                          className="btn-link-style"
                        >
                          Performance Tracking{" "}
                          <i className="fas fa-angle-right" />
                        </button>
                      </li>
                      <li
                        className={
                          activeServiceKey === "data-sourcing" ? "active" : ""
                        }
                      >
                        <button
                          type="button"
                          onClick={() => setActiveServiceKey("data-sourcing")}
                          className="btn-link-style"
                        >
                          Data Sourcing <i className="fas fa-angle-right" />
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="service-widget call-action-widget wow fadeInUp delay-0-2s">
                    <h3>Need Any</h3>
                    <span className="h2">Consultation</span>
                    <div className="action-btn">
                      <a
                        href="https://calendly.com/contactedgesolutions/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="theme-btn"
                      >
                        contact us <i className="fas fa-arrow-right" />
                      </a>
                    </div>
                    <a className="number" href="tel:+01234567899">
                      +0123 (456) 7899
                    </a>
                    <img
                      className="action-man"
                      src="assets/images/widgets/call-to-action.png"
                      alt="Call To Action"
                    />
                    <img
                      className="dots-shape slideUpDown"
                      src="assets/images/shapes/white-dots-two.png"
                      alt="Shape"
                    />
                    <img
                      className="circle-shape slideUpRight"
                      src="assets/images/shapes/circle.png"
                      alt="Shape"
                    />
                  </div>

                  <div className="service-widget file-download wow fadeInUp delay-0-2s">
                    <ul>
                      <li>
                        <a href="#download-pdf">
                          <i className="far fa-file-pdf" />
                          <h5>Download pdf</h5>
                        </a>
                      </li>
                      <li>
                        <a href="#download-doc">
                          <i className="far fa-file-word" />
                          <h5>Download doc.</h5>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-8 col-lg-7">
                <div className="single-service-content">
                  <div className="image mb-40 wow fadeInUp delay-0-4s">
                    <img
                      src={currentService.image}
                      alt={currentService.title}
                    />
                  </div>
                  <h2>{currentService.title}</h2>
                  <p>{currentService.description}</p>

                  {/* Sub-Features Cards with Direct Icon Containers */}
                  <div className="row mt-55">
                    {currentService.subFeatures.map((feat, index) => (
                      <div key={index} className="col-xl-4 col-sm-6">
                        <div className="sub-feature-card text-center mb-30">
                          <div className="feature-icon-box">
                            <i className={feat.iconClass} />
                          </div>
                          <h3 className="feature-title">
                            <Link to="/single-service">{feat.title}</Link>
                          </h3>
                          <p className="feature-desc">{feat.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h2>Service Summary</h2>
                  <p>{currentService.summary}</p>
                  <ul className="list-style-one">
                    {currentService.summaryList.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-section rel z-1 bg-gray pt-130 rpt-100 pb-100 rpb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-8 col-md-10">
                <div className="section-title text-center text-white mb-45">
                  <span className="sub-title">Pricing Package</span>
                  <h2>Make The Wise Decision For Software Solutions</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="pricing-item wow fadeInUp delay-0-2s">
                  <h5 className="price-title">Basic Plan</h5>
                  <span className="price">19.85</span>
                  <p>Sed ut perspiciatis unde omnis natus error voluptatem</p>
                  <a
                    href="https://calendly.com/contactedgesolutions/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn"
                  >
                    Choose Package <i className="fas fa-long-arrow-alt-right" />
                  </a>
                  <ul className="list-style-one">
                    <li>30-day Free Trial Plan</li>
                    <li>Software Solutions</li>
                    <li>Unique Design</li>
                    <li>24/7 Supports</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pricing-item wow fadeInUp delay-0-4s">
                  <h5 className="price-title">Standard Plan</h5>
                  <span className="price">49.85</span>
                  <p>Sed ut perspiciatis unde omnis natus error voluptatem</p>
                  <a
                    href="https://calendly.com/contactedgesolutions/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn"
                  >
                    Choose Package <i className="fas fa-long-arrow-alt-right" />
                  </a>
                  <ul className="list-style-one">
                    <li>30-day Free Trial Plan</li>
                    <li>Software Solutions</li>
                    <li>Unique Design</li>
                    <li>24/7 Supports</li>
                    <li>Include Web Developer</li>
                    <li>750 GB Hosting Free</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="pricing-item wow fadeInUp delay-0-6s">
                  <h5 className="price-title">Gold Plan</h5>
                  <span className="price">99.85</span>
                  <p>Sed ut perspiciatis unde omnis natus error voluptatem</p>
                  <a
                    href="https://calendly.com/contactedgesolutions/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-btn"
                  >
                    Choose Package <i className="fas fa-long-arrow-alt-right" />
                  </a>
                  <ul className="list-style-one">
                    <li>30-day Free Trial Plan</li>
                    <li>Software Solutions</li>
                    <li>Unique Design</li>
                    <li>24/7 Supports</li>
                    <li>Include Web Developer</li>
                    <li>Best UI/UX Design</li>
                    <li>Modern Code</li>
                    <li>750 GB Hosting Free</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="section-alpha-text">Our Pricing Plan</div>
          <img
            className="dots-shape"
            src="assets/images/shapes/white-dots.png"
            alt="Shape"
          />
          <img
            className="tringle-shape"
            src="assets/images/shapes/tringle.png"
            alt="Shape"
          />
          <img
            className="close-shape"
            src="assets/images/shapes/yellow-close.png"
            alt="Shape"
          />
          <div className="left-circles" />
          <div className="right-circles" />
        </section>

        <div className="for-gap pb-160 rpb-100" />

        <footer className="footer-section bg-lighter rel z-1 mt-220">
          <div className="container">
            <div className="newsletter-inner bg-blue bgs-cover text-white rel z-3">
              <div className="for-adjust-spacing" />
              <div className="row align-items-center align-items-xl-start">
                <div className="col-lg-6">
                  <div className="newsletter-content p-60 wow fadeInUp delay-0-2s">
                    <div className="section-title mb-30">
                      <span className="sub-title">Our Newsletter</span>
                      <h2>Subscribe Our Newsletter to Get More Updates</h2>
                    </div>
                    <form
                      className="newsletter-form"
                      action="#"
                      onSubmit={handleNewsletterSubmit}
                    >
                      <div className="newsletter-email">
                        <input
                          type="email"
                          placeholder="Enter Email Address"
                          required
                          value={newsletterEmail}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setNewsletterEmail(e.target.value)
                          }
                        />
                        <button type="submit">
                          Sign up <i className="fas fa-angle-right" />
                        </button>
                      </div>
                      <div className="newsletter-radios">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            id="wekly"
                            name="updateFrequency"
                            checked={updateFrequency === "weekly"}
                            onChange={() => setUpdateFrequency("weekly")}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="wekly"
                          >
                            Weekly Updates
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            id="monthly"
                            name="updateFrequency"
                            checked={updateFrequency === "monthly"}
                            onChange={() => setUpdateFrequency("monthly")}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="monthly"
                          >
                            Monthly Updates
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="newsletter-images wow fadeInUp delay-0-2s">
                    <img
                      src="assets/images/newsletter/newsletter.png"
                      alt="Newsletter"
                    />
                    <img
                      src="assets/images/newsletter/circle.png"
                      alt="shape"
                      className="circle slideUpRight"
                    />
                    <img
                      src="assets/images/newsletter/dots.png"
                      alt="shape"
                      className="dots slideLeftRight"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-between">
              <div className="col-xl-3 col-sm-6 col-7 col-small">
                <div className="footer-widget about-widget">
                  <div className="footer-logo mb-20">
                    <Link to="/">
                      <img src="assets/images/logos/logo.png" alt="Logo" />
                    </Link>
                  </div>
                  <p>
                    Sed perspiciatis unde omnis istee sit voluptatem accusante
                    doloreue <b>laudantium</b> aperiam eaque abillo inventore
                  </p>
                  <Link to="/#about" className="read-more">
                    Read More <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-2 col-sm-4 col-5 col-small">
                <div className="footer-widget link-widget">
                  <h4 className="footer-title">About</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link to="/#projects">Success History</Link>
                    </li>
                    <li>
                      <Link to="/#team-details">Meet The Team</Link>
                    </li>
                    <li>
                      <Link to="/#blog">Latest News</Link>
                    </li>
                    <li>
                      <Link to="/#contact">Need a Career?</Link>
                    </li>
                    <li>
                      <Link to="/single-service">Popular Service</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-md-8">
                <div className="footer-widget link-widget">
                  <h4 className="footer-title">Quick Links</h4>
                  <ul className="list-style-two two-column">
                    <li>
                      <Link to="/single-service">Software Solutions</Link>
                    </li>
                    <li>
                      <Link to="/single-service">Market Analysis</Link>
                    </li>
                    <li>
                      <Link to="/single-service">Web Development</Link>
                    </li>
                    <li>
                      <Link to="/single-service">Digital Solutions</Link>
                    </li>
                    <li>
                      <Link to="/single-service">Graphics Design</Link>
                    </li>
                    <li>
                      <Link to="/single-service">Consultations</Link>
                    </li>
                    <li>
                      <Link to="/single-service">Application Design</Link>
                    </li>
                    <li>
                      <Link to="/single-service">Success Rate</Link>
                    </li>
                    <li>
                      <Link to="/single-service">SEO Optimization</Link>
                    </li>
                    <li>
                      <Link to="/single-service">User Research</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-4">
                <div className="footer-widget contact-widget">
                  <h4 className="footer-title">Get in Touch</h4>
                  <ul className="list-style-three">
                    <li>
                      <i className="fas fa-map-marker-alt" /> 55 Main Street,
                      New York
                    </li>
                    <li>
                      <i className="fas fa-envelope-open" />{" "}
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </li>
                    <li>
                      <i className="fas fa-phone" /> Call :{" "}
                      <a href="tel:+012345678">+012 (345) 678</a>
                    </li>
                  </ul>
                  <div className="social-style-one mt-25">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area bg-blue text-white mt-80 py-15">
            <div className="container">
              <div className="copyright-inner text-center">
                <p>Copyright &copy; 2026 Sland. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <button
        className="scroll-top scroll-to-target"
        data-target="html"
        type="button"
      >
        <span className="fa fa-angle-up" />
      </button>
    </div>
  );
};

export default SingleServicePage;
