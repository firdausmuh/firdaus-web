import { useEffect } from "react";
import "./Services.css";
import "../styles/animations.css";

function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".animate");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="services">
      <h1 className="animate fade-in-up">My Services</h1>
      <div className="services-grid">
        <div className="service-card animate fade-in-up delay-1">
          <h3>Android App Development</h3>
          <p>Custom Android applications built with modern technologies</p>
        </div>
        <div className="service-card animate fade-in-up delay-2">
          <h3>UI/UX Design</h3>
          <p>Intuitive and beautiful mobile interfaces</p>
        </div>
        <div className="service-card animate fade-in-up delay-3">
          <h3>App Maintenance</h3>
          <p>Ongoing support and updates for existing applications</p>
        </div>
        <div className="service-card animate fade-in-up delay-4">
          <h3>Consultation</h3>
          <p>Technical advice and project planning</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
