const Results = () => {
  const impacts = [
    'Increased Efficiency: Helped clients reduce operational costs by 30%.',
    'Revenue Growth: Contributed to 50% revenue increase for partners.',
    'Customer Satisfaction: Achieved 95% client satisfaction rate.',
    'Innovation: Introduced 20+ new solutions in the past year.',
  ];

  return (
    <section className="results">
      <h2>Our Impact</h2>
      <div className="impacts">
        {impacts.map((impact, index) => (
          <div key={index} className="impact">
            <p>{impact}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Results;