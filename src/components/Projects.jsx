import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext.jsx";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";

/* Floating shapes */
const floatingShapes = Array.from({ length: 8 }).map(() => ({
  size: Math.random() * 40 + 20,
  top: `${Math.random() * 90}%`,
  left: `${Math.random() * 90}%`,
  color: `hsl(${Math.random() * 360}, 70%, 60%)`,
  delay: Math.random() * 3
}));

const projects = [
  {
    title: "React Portfolio",
    description:
      "A modern React-based portfolio demonstrating component-driven development, clean architecture, and deployment workflows.",
    tech: ["React", "UI", "JavaScript", "Version Control"],
    image: project1,
    link: "https://akinbodevictor02.github.io/professional-portfolio/"
  },
  {
    title: "HTML/CSS/JS Portfolio",
    description:
      "Responsive personal portfolio showcasing front-end fundamentals, UI design, and JavaScript interactivity",
    tech: ["HTML", "CSS", "JavaScript", "Version Control"],
    image: project2,
    link: "https://akinbodevictor02.github.io/My-portfolio-website/"
  }
];

const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="projects"
      style={{
        padding: "6rem 8%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        zIndex: 2
      }}
    >
        {/* Floating background shapes */}
      {floatingShapes.map((shape, idx) => (
        <motion.div
          key={idx}
          className="floating-shape"
          style={{
            width: shape.size,
            height: shape.size,
            borderRadius: "50%",
            background: `hsl(${shape.hue}, 70%, ${theme === "dark" ? "60%" : "75%"})`,
            position: "absolute",
            top: shape.top,
            left: shape.left,
            opacity: theme === "dark" ? 0.15 : 0.25,
            zIndex: 1
          }}
          animate={{ y: [0, -25, 0], x: [0, 15, 0], rotate: [0, 180, 0] }}
          transition={{
            duration: 7 + Math.random() * 4,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Title Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          marginBottom: "3rem"
        }}
      >
        <h2 style={{ fontSize: "2.5rem" }}>Projects</h2>
        <div
          style={{
            flex: 1,
            height: "1px",
            background: theme === "dark" ? "#333" : "#ccc"
          }}
        />
      </div>

      {/* Project Cards */}
      <div className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "2.5rem"
        }}
      >
        {projects.map((project, index) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -8 }}
            style={{
              background:
                theme === "dark"
                  ? "rgba(255,255,255,0.05)"
                  : "#f6f6f6",
              borderRadius: "18px",
              overflow: "hidden",
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.25)"
            }}
          >
            {/* Image */}
            <div style={{ aspectRatio: "16/9", width: "100%", overflow: "hidden" }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            {/* Content */}
            <div style={{ padding: "1.8rem" }}>
              <h3 style={{ marginBottom: "0.8rem" }}>
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.7",
                  color: theme === "dark" ? "#bbb" : "#555",
                  marginBottom: "1.5rem"
                }}
              >
                {project.description}
              </p>

              {/* Tech Pills */}
              <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: "0.75rem",
                      padding: "0.35rem 0.7rem",
                      borderRadius: "999px",
                      background:
                        theme === "dark"
                          ? "rgba(255,255,255,0.1)"
                          : "rgba(0,0,0,0.1)"
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;