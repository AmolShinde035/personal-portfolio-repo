import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

export default function Education() {
  const education = [
     {
      degree: "PG-DAC",
      institute: "Centre for Development of Advanced Computing (C-DAC), India",
      year: "2023"
    },
    {
      degree: "Bachelor of Engineering",
      institute: "Savitribai Phule Pune University",
      year: "2018 – 2022"
    },
    {
      degree: "Higher Secondary",
      institute: "Maharashtra State Board",
      year: "2016 – 2018"
    }
  ];

 return (
    <section id="education" className="education-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Education</h2>

        <Swiper
          modules={[Navigation,Pagination, Autoplay]}
          slidesPerView={1}                 Navigation// ✅ One card at a time
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          loop={true}
          grabCursor={true}
        >
          {education.map((edu, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="education-card single">
                  <h4>{edu.degree}</h4>
                  <p className="institute">{edu.institute}</p>
                  <span className="year">{edu.year}</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
