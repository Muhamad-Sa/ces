const Counter = () => {
  const results = [
    'Faster response times',
    'Customer satisfaction',
    'Increased sales opportunities',
    'Consistent lead flow',
    'Reduced operational costs',
    'More time to focus on growth'
  ];

  return (
    <section className="counter-section rel z-2">
      <div className="container">
        <div className="counter-inner bg-blue bgs-cover text-white rel z-1" style={{ backgroundImage: 'url(/assets/images/shapes/counter-bg.png)' }}>
          <div className="row justify-content-center text-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="section-title mb-55">
                <span className="sub-title">Results / Impact</span>
                <h2>What You Can Expect</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {results.map((result, index) => (
              <div key={index} className="col-xl-4 col-md-6">
                <div className="success-item">
                  <p>{result}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="white-circle">
            <img src="/assets/images/shapes/white-circle.png" alt="White Circle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;