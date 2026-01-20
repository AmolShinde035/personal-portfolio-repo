import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Cross Country India",
      duration: "2023 – Present",
      points: [
        "Developed and maintained scalable web applications using Java, Spring Boot, React, and Angular",
        "Implemented RESTful APIs and optimized SQL queries for improved performance",
        "Collaborated in Agile/Scrum teams to deliver features on time",
        "Improved application efficiency and reduced manual effort through automation"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Experience</h2>

        <div className="row justify-content-center">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="col-12 col-md-10 col-lg-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="experience-card">
                <div className="experience-header">
                  <h4>{exp.role}</h4>
                  <span className="duration">{exp.duration}</span>
                </div>
                <h6 className="company">{exp.company}</h6>

                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
