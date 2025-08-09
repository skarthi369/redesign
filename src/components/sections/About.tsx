const About = () => {
  return (
    <section id="about" className="container py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-head text-3xl md:text-4xl">About Varma Films</h2>
          <p className="mt-4 text-muted-foreground">
            We are a film production studio focused on human stories, striking visuals and meticulous craft. Our team blends seasoned expertise with fresh perspectives to deliver premium narrative films, commercials and documentaries.
          </p>
          <p className="mt-4 text-muted-foreground">
            With a collaborative approach, we partner with brands and creators worldwide to bring ideas to life — on time and on budget.
          </p>
        </div>
        <div className="glass-card rounded-lg p-6">
          <ul className="grid grid-cols-2 gap-6">
            <li>
              <div className="text-3xl font-head">50+</div>
              <div className="text-muted-foreground">Projects shipped</div>
            </li>
            <li>
              <div className="text-3xl font-head">12</div>
              <div className="text-muted-foreground">Awards won</div>
            </li>
            <li>
              <div className="text-3xl font-head">8K</div>
              <div className="text-muted-foreground">Delivery ready</div>
            </li>
            <li>
              <div className="text-3xl font-head">24/7</div>
              <div className="text-muted-foreground">Global crew</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
