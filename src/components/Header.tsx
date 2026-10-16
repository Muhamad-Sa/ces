import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isNearTop, setIsNearTop] = useState(true);

  useEffect(() => {
    const updateHeaderVisibility = () => {
      setIsNearTop(window.scrollY <= 150);
    };

    updateHeaderVisibility();
    window.addEventListener('scroll', updateHeaderVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateHeaderVisibility);
  }, []);

  return (
    <header className={`main-header${isNearTop ? ' near-page-top' : ''}`}>
      {/* Header-Upper */}
      <div className="header-upper">
        <div className="container clearfix">
          <div className="header-inner py-20">
            <div className="logo-outer">
              <div className="logo">
                <Link to="/">
                  <img src="/assets/images/logos/logo.png" alt="Logo" />
                </Link>
              </div>
            </div>

            <div className="nav-outer clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="logo-mobile">
                    <Link to="/">
                      <img src="/assets/images/logos/logo.png" alt="Logo" />
                    </Link>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    aria-controls="main-menu"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                <div className="navbar-collapse collapse clearfix" id="main-menu">
                  <ul className="navigation clearfix">
                    <li className="current"><Link to="/#home" className="page-scroll active">home</Link></li>
                    <li><a href="/#about" className="page-scroll">about</a></li>
                    <li><a href="/#service" className="page-scroll">Service</a></li>
                    {/* <li><a href="/#testimonial" className="page-scroll">Testimonial</a></li> */}
                    <li><a href="/#blog" className="page-scroll">blog</a></li>
                  </ul>
                </div>
              </nav>
              {/* Main Menu End */}
            </div>

            <div className="menu-right d-none d-lg-flex align-items-center ml-lg-auto">
              <a
                href="https://calendly.com/contactedgesolutions/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn style-two"
              >
                Get Started <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Upper */}
    </header>
  );
};

export default Header;