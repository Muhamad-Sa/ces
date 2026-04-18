const WhyChooseUs = () => {
  const reasons = [
    'Proven Expertise: Years of experience in delivering high-quality services.',
    'Client-Centric Approach: We prioritize your needs and goals.',
    'Innovative Solutions: Cutting-edge technology and methodologies.',
    'Reliable Support: 24/7 assistance and ongoing maintenance.',
  ];

  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <ul>
        {reasons.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChooseUs;