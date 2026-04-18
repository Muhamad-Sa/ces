const HowItWorks = () => {
  const steps = [
    { step: 1, title: 'We Understand Your Needs', description: 'We learn your business, goals and processes.' },
    { step: 2, title: 'We Build Your Team', description: 'We assign and train agents tailored to your requirements and business model.' },
    { step: 3, title: 'We Integrate & Launch', description: 'We plug into your systems and go live quickly.' },
    { step: 4, title: 'We Optimize & Scale', description: 'We continuously improve performance and grow with you.' },
  ];

  return (
    <section className="how-it-works">
      <h2>Simple. Fast. Effective.</h2>
      <div className="steps">
        {steps.map((step) => (
          <div key={step.step} className="step">
            <h3>Step {step.step}: {step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;