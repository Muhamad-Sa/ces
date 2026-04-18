const Testimonials = () => {
  const feedbacks = [
    {
      quote: 'We’ve worked with a few outsourcing teams before, but this was the first time it actually felt smooth. The agents adapted quickly to our process and communication was always clear. It made scaling a lot easier for us.',
      author: '',
      title: '',
    },
    {
      quote: 'The cold calling team helped us book way more calls than we expected in the first month. What I liked most is that they actually listened to feedback and kept improving week after week.',
      author: '',
      title: '',
    },
    {
      quote: 'Our response times improved almost immediately after onboarding their team. Customers are getting faster replies now and everything feels much more organized on our end.',
      author: '',
      title: '',
    },
    {
      quote: 'Honestly just reliable! that’s the main thing, they show up, do the work and communicate properly, which is harder to find than you’d think.',
      author: '',
      title: '',
    },
    {
      quote: 'We started with one agent and now we’re running a small team with them. It’s been easy to scale and the quality has stayed consistent.',
      author: '',
      title: '',
    },
  ];

  return (
    <section className="feedback-section rel z-1 mb-130" id="testimonial">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="feedback-left-image">
              <img src="/assets/images/feedbacks/feedback-left.png" alt="Feedback" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feedback-right-content pt-55 mt-250 rmt-0">
              <div className="section-title mb-25">
                <span className="sub-title">Clients Feedback</span>
                <h2>What Our Customer’s Say About Solutions</h2>
              </div>
              <div className="feedback-wrap">
                {feedbacks.map((feedback, index) => (
                  <div key={index} className="feedback-item">
                    <div className="feedback-author">
                      <i className="flaticon-quote-1"></i>
                      <div className="author-content">
                        <h3>{feedback.author}</h3>
                        <span>{feedback.title}</span>
                      </div>
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: feedback.quote }}></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;