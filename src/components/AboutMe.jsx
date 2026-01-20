import { motion } from "framer-motion";
import profileImg from "../assets/profile1.jpg"; // replace with your image

export default function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <motion.div
          className="row align-items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Image */}
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src={profileImg}
              alt="Amol Shinde"
              className="about-img"
            />
          </div>

          {/* Content */}
          <div className="col-md-7">
            <h2 className="mb-3">About Me</h2>

            <p>
              I am a <strong>Software Engineer</strong> with over
              <strong> 2+ years of experience</strong> in designing and building
              scalable web applications using <strong>Java, Spring Boot,
              React, and Angular</strong>.
            </p>

            <p>
              My expertise lies in developing clean, maintainable code,
              implementing RESTful APIs, and creating intuitive user interfaces.
              I enjoy solving complex problems and continuously improving
              application performance and scalability.
            </p>

            <p>
              I have worked on enterprise-level systems including
              <strong> time & activity tracking</strong>,
              <strong> appraisal management</strong>, and
              <strong> automation services</strong>, contributing to improved
              productivity and reduced manual effort.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
