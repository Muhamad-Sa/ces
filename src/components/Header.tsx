const Header = () => {
  return (
    <header className="main-header">
      {/* Header-Upper */}
      <div className="header-upper">
        <div className="container clearfix">
          <div className="header-inner py-20">
            <div className="logo-outer">
              <div className="logo"><a href="index.html"><img src="/assets/images/logos/logo.png" alt="Logo" /></a></div>
            </div>

            <div className="nav-outer clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="logo-mobile"><a href="index.html"><img src="/assets/images/logos/logo.png" alt="Logo" /></a></div>
                  {/* Toggle Button */}
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="main-menu">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                <div className="navbar-collapse collapse clearfix" id="main-menu">
                  <ul className="navigation clearfix">
                    <li className="current"><a href="#home" className="page-scroll active">home</a></li>
                    <li><a href="#about" className="page-scroll">about</a></li>
                    <li><a href="#service" className="page-scroll">Service</a></li>
                    <li><a href="#testimonial" className="page-scroll">Testimonial</a></li>
                    <li><a href="#blog" className="page-scroll">blog</a></li>
                  </ul>
                </div>
              </nav>
              {/* Main Menu End */}
            </div>

            <div className="menu-right d-none d-lg-flex align-items-center ml-lg-auto">
              {/* Menu Serch Box */}
              <div className="nav-search">
                <button className="fa fa-search"></button>
                <form action="#" className="hide">
                  <input type="text" placeholder="Search" className="searchbox" required />
                  <button type="submit" className="searchbutton fa fa-search"></button>
                </form>
              </div>

              {/* Language Changer */}
              <select name="language" id="language">
                <option value="English">English</option>
                <option value="Bengali">Bengali</option>
                <option value="Arabic">Arabic</option>
              </select>
              <a href="contact.html" className="theme-btn style-two">Get Started <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Upper */}
    </header>
  );
};

export default Header;