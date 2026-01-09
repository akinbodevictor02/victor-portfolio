import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext.jsx";

const skills = ["React", "JavaScript", "UI/UX Design", "CSS & Tailwind", "Framer Motion"];

const floatingShapes = Array.from({ length: 8 }).map(() => ({
  size: Math.random() * 40 + 15,
  top: `${Math.random() * 80}%`,
  left: `${Math.random() * 90}%`,
  color: `hsl(${Math.random() * 360}, 70%, 60%)`,
  delay: Math.random() * 3
}));

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="about"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "6rem 8%",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        zIndex: 2
      }}
    >
      {/* Floating shapes behind */}
      {floatingShapes.map((shape, idx) => (
        <motion.div
          key={idx}
          style={{
            width: shape.size,
            height: shape.size,
            borderRadius: "50%",
            background: shape.color,
            position: "absolute",
            top: shape.top,
            left: shape.left,
            opacity: 0.2,
            zIndex: 1
          }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 180, 0] }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut"
          }}
        />
      ))}

       <div
        style={{
          width: "200%",
          maxWidth: "1100px",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          marginBottom: "3rem",
          zIndex: 2
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 600,
            whiteSpace: "nowrap"
          }}
        >
          About
        </h2>
        <div
          style={{
            height: "1px",
            flex: 1,
            background: theme === "dark" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"
          }}
        />
      </div>
      
      {/* Two-columns layout: Profile left, content right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4rem",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
        >

      {/* Profile picture */}
      <motion.img
        src="/profile.jpg" // replace with your actual profile image path
        alt="Victor's Profile"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          border: `3px solid ${theme === "dark" ? "#fff" : "#111"}`,
          marginBottom: "2rem",
          zIndex: 2
        }}
      />

      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "clamp(2rem, 6vw, 3rem)",
          fontWeight: "700",
          marginBottom: "1.5rem",
          zIndex: 2
        }}
      >
        About Me
      </motion.h2>

      {/* Bio / description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          maxWidth: "700px",
          lineHeight: "1.8",
          marginBottom: "2rem",
          color: theme === "dark" ? "#ccc" : "#333",
          zIndex: 2
        }}
      >
        Hi, I’m Victor Akinbode a passionate React developer who loves
        creating clean and modern web experiences. I enjoy turning ideas into beautiful
        and functional digital experiences. My goal is to combine creativity with performance
        to deliver engaging interfaces that users love.
      </motion.p>

      {/* Skills / highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
          zIndex: 2
        }}
      >
        {skills.map((skill, idx) => (
          <div
            key={idx}
            style={{
              padding: "1rem 1.5rem",
              borderRadius: "12px",
              border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
              background: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
              color: theme === "dark" ? "#fff" : "#111",
              minWidth: "120px",
              textAlign: "center",
              transition: "transform 0.3s",
              cursor: "default"
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
          >
            {skill}
          </div>
        ))}
      </motion.div>
      </div>
    </section>
  );
};

export default About;