import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import heroImg from "../assets/profileimg.jpg"; // your image
import ParticlesBackground from "./ParticlesBackground";

const roles = ["Java Developer", "React Developer", "Angular Developer"];

export default function Home() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    // Typing animation
    useEffect(() => {
        if (charIndex < roles[index].length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + roles[index][charIndex]);
                setCharIndex(charIndex + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => {
                setText("");
                setCharIndex(0);
                setIndex((index + 1) % roles.length);
            }, 1500);
        }
    }, [charIndex, index]);

    return (
        <section id="home" className="hero-section d-flex align-items-center">
            <ParticlesBackground />

            <div className="container position-relative">
                <div className="row align-items-center">

                    {/* LEFT: Text */}
                    <motion.div
                        className="col-md-6 text-center text-md-start"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="fw-bold display-4 mb-3">
                            Hi, I’m <span className="text-primary">Amol Shinde</span>
                        </h1>

                        <h3 className="mb-3">
                            <span className="text-secondary">{text}</span>
                            <span className="typing-cursor">|</span>
                        </h3>

                        <p className="lead mb-4">
                            Software Engineer specializing in building scalable, high-performance
                            web applications using modern frontend and backend technologies.
                        </p>

                        <div className="d-flex flex-wrap gap-3 mb-4 justify-content-center justify-content-md-start">
                            <a href="#projects" className="btn btn-primary btn-lg">
                                View Projects
                            </a>

                            <a
                                href="/Amol_Shinde_Resume.pdf"
                                className="btn btn-outline-secondary btn-lg"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                            >
                                Download Resume
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="d-flex gap-4 fs-3 justify-content-center justify-content-md-start">
                            <a
                                href="https://www.linkedin.com/in/amol-shinde-81149a226/"
                                target="_blank"
                                className="text-primary"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://github.com/AmolShinde035"
                                target="_blank"
                                className="text-dark dark-icon"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT: Image */}
                    <motion.div
                        className="col-md-6 text-center mt-5 mt-md-0"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="hero-img-wrapper">
                            <img
                                src={heroImg}
                                alt="Amol Shinde"
                                className="hero-img"
                            />
                        </div>
                    </motion.div>

                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="text-center mt-5"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <a href="#about" className="text-muted fs-4">
                        <FaChevronDown />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
