const testimonials = [
  { name: "A. Kapoor", role: "Creative Director", quote: "Varma Films brings unmatched clarity and heart to every frame." },
  { name: "S. Mehta", role: "Brand Lead", quote: "Professional, collaborative and relentlessly creative — a joy to work with." },
  { name: "R. Singh", role: "Producer", quote: "On schedule, on budget, and stunning results." },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-16 md:py-24">
      <h2 className="font-head text-3xl md:text-4xl mb-8">Words from partners</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <figure key={i} className="glass-card rounded-lg p-6">
            <blockquote className="text-lg">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">{t.name} — {t.role}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
