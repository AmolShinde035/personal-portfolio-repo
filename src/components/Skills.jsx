import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaDatabase
} from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <FaNodeJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Angular", icon: <FaAngular /> },
    { name: "MySQL", icon: <FaDatabase /> }
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Skills</h2>

        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="col-6 col-md-4 col-lg-2"
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15
              }}
              viewport={{ once: true }}
            >
              <div className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <p className="skill-name">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
