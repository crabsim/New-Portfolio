"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "HungryPixel Website",
    description: "At HungryPixel, I crafted an engaging website (hungrypixel.com) to spotlight their software solutions, driving a remarkable 30% increase in online visibility through strategic SEO techniques. This platform seamlessly showcases the company's prowess, providing a firsthand experience of their cutting-edge services, ultimately contributing to a 20% boost in client engagement",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Mobile"],
    // gitUrl: "/",
    previewUrl: "https://www.hungrypixel.in/",
  },
  {
    id: 2,
    title: "Vorby: Student Mentor Consultation App (Internship Project)",
    description: "Designed and implemented the frontend application for the Vorby app, acting as a guiding beacon for students.The platform facilitates doubt clarification and expert advice, leading to a remarkable improvement of 60% in student academic performance and progression towards their career goals",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/vorbyit/portalfrontend",
    // previewUrl: "/",
  },
  {
    id: 3,
    title: "AutoPedo: Automatic Physiotherapist (Hackathon Project)",
    description: `Designed and implemented a website for the AutoPedo project, an Automatic Physiotherapist, employing HTML
    for the frontend and Firebase for the backend. The platform empowers doctors to establish customized exercise
    parameters, optimizing therapy sessions. Through this automated approach, the physiotherapy treatment process is
    streamlined, leading to a significant improvement in efficiency and effectiveness. The AutoPedo project has
    demonstrated a marked reduction of 45% in the time required for therapy sessions, ensuring tailored care and
    expediting the recovery journey for individuals.`,
    image: "/images/projects/3.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/crabsim/Autopedo",
    // previewUrl: "/",
  },
  {
    id: 4,
    title: "ICEEY: Messenger for the Blind (Self-Learning Project)",
    description: `Developed a WebApp leveraging Web Speech APIs to facilitate interactive messaging and socializing for individuals
    with visual impairments, significantly enhancing accessibility and inclusivity. The implementation resulted in a
    measurable improvement of 25% in user engagement and satisfaction, showcasing the positive impact on the
    targeted user community.`,
    image: "/images/projects/4.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/crabsim/Messaging-for-the-Blind",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
