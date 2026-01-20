import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "Built a responsive personal portfolio to showcase professional experience, projects, and skills \nImplemented animated UI components, dark/light mode, and interactive sections \nDeployed on Netlify with optimized performance and SEO-friendly structure",
      tech: "React, Vite, JavaScript, Bootstrap, CSS",
      github: "https://github.com/AmolShinde035/personal-portfolio-repo",
    },
    {
      title: "To-Do List Application",
      description:
        "Created a responsive To-Do application with CRUD operations \n Deployed on Netlify for public access",
      tech: "JavaScript, HTML, CSS",
      github: "https://github.com/AmolShinde035/TodoApp",
      demo: "https://amol-todo-app.netlify.app/"
    },
    {
      title: "Time & Activity Tracking System",
      description:
        "Tracks user activity and working hours, supports reports, approvals, admin dashboards, and roster management.",
      tech: "React, Java (Spring Boot), SQL",
    },
    {
      title: "Appraisal & Award Management",
      description:
        "Peer-to-peer appraisal system with automated email notifications for birthdays and anniversaries.",
      tech: "Angular, Java (Spring Boot), SQL",
    },
    {
      title: "Excel Processing Automation",
      description:
        "Automated service to process Excel files from SFTP, filter data dynamically, and email reports.",
      tech: "Java, Spring Boot"
    }
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Projects</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}              // ✅ ONLY ONE CARD
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false
          }}
          loop={true}
          grabCursor={true}              // 🖱️ Mouse drag
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="project-card single">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <span className="tech">{project.tech}</span>

                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <FaGithub />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}