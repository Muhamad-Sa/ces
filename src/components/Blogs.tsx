const Blogs = () => {
  const blogs = [
    {
      image: '/assets/images/blog/blog1.jpg',
      author: 'Katherine J. Glaser',
      date: '25 March 2022',
      comments: 5,
      title: 'Smashin Podcast Episode Ferdinande Web Dead',
      excerpt: 'Sed ut perspiciati omnis istee sit voluptatem accusantium',
    },
    {
      image: '/assets/images/blog/blog2.jpg',
      author: 'Katherine J. Glaser',
      date: '25 March 2022',
      comments: 5,
      title: 'Usings Codes Your Biness Best Practice Pitfalls',
      excerpt: 'Sed ut perspiciati omnis istee sit voluptatem accusantium',
    },
    {
      image: '/assets/images/blog/blog3.jpg',
      author: 'Katherine J. Glaser',
      date: '25 March 2022',
      comments: 5,
      title: 'Web Frameworks Solvowe Sithout Them Part',
      excerpt: 'Sed ut perspiciati omnis istee sit voluptatem accusantium',
    },
    {
      image: '/assets/images/blog/blog4.jpg',
      author: 'Katherine J. Glaser',
      date: '25 March 2022',
      comments: 5,
      title: 'Designing Better Links For Websites And Emails',
      excerpt: 'Sed ut perspiciati omnis istee sit voluptatem accusantium',
    },
  ];

  return (
    <section className="blog-section rel z-1 pb-210 pt-100 rpb-100 rpb-150 rmb-30" id="blog">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div className="section-title mb-55">
              <span className="sub-title">Latest News & Blog</span>
              <h2>Get Our Every Single Update Latest News & Blog</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          {blogs.map((blog, index) => (
            <div key={index} className="col-xl-3 col-md-6">
              <div className="blog-item">
                <div className="image">
                  <img src={blog.image} alt="Blog" />
                </div>
                <div className="blog-author">
                  <img src="/assets/images/blog/blog-author.jpg" alt="Author" />
                  <h5><a href="#">{blog.author}</a></h5>
                </div>
                <div className="blog-content">
                  <ul className="blog-meta">
                    <li><i className="far fa-calendar-alt"></i> <a href="blog-details.html">{blog.date}</a></li>
                    <li><i className="far fa-comments"></i> <a href="#">Com ({blog.comments})</a></li>
                  </ul>
                  <h4><a href="blog-details.html">{blog.title}</a></h4>
                  <p>{blog.excerpt}</p>
                </div>
                <a href="blog-details.html" className="learn-more">Learn More <i className="fas fa-arrow-right"></i></a>
              </div>
            </div>
          ))}
          <div className="col-lg-12">
            <div className="news-more-btn text-center pt-30">
              <a href="blog.html" className="theme-btn style-three">View More News <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;