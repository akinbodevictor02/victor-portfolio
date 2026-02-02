import { motion } from "framer-motion";
import { useContext } from "react";
import heroBg from "../assets/hero-bg.png";
import { ThemeContext } from "../ThemeContext.jsx";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "6rem",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          filter: "contrast(1.05) saturate(1.1)",
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: theme === "dark" ? 0.1 : 0.3,
          zIndex: 0
        }}
      >
        <img src={heroBg} alt="Hero background" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      {/* Social icons */}
      <div className="hero-social"
        style={{
          position: "absolute",
          bottom: "2.5rem",
          display: "flex",
          gap: "1.5rem",
          zIndex: 3,
        }}
      >
       {[
          {
            icon: <FaLinkedin />,
            url:"https://linkedin.com/in/victor-akinbode-019665211",
          },
          {
            icon: <FaGithub />,
            url:"https://github.com/akinbodevictor02",
          },
          {
            icon: <FaEnvelope />,
            url: "mailto:oluwaseyiv47@gmail.com",
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: "clamp(36px, 6vw, 42px)",
              height: "clamp(36px, 6vw, 42px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              textDecoration: "none",
              background:
                theme === "dark"
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.15)",
              color: theme === "dark" ? "#fff" : "#111",
              border:
                theme === "dark"
                  ? "1px solid rgba(255,255,255,0.15)"
                  : "1px solid rgba(0,0,0,0.15)",
              backdropFilter: "blur(6px)",
              fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
              transition: "all 0.3s ease",
            }}
          >
              {item.icon}
            </motion.a>
        ))}
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            fontSize: "clamp(3.8rem, 11vw, 6.5rem)",
            fontWeight: 800,
            letterSpacing: "-2px",
            lineHeight: 1,
            position: "relative",
          }}
        >
          Victor Akinbode

          {/* Ghost text */}
          <span
            style={{
              position: "absolute",
              inset: 0,
              transform: "translateY(40px)",
              fontSize: "inherit",
              fontWeight: 800,
              color: "transparent",
              WebkitTextStroke:
                theme === "dark"
                  ? "1px rgba(255,255,255,0.12)"
                  : "1px rgba(0,0,0,0.12)",
              zIndex: -1,
            }}
          >
            Victor Akinbode
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            marginTop: "1.5rem",
            fontSize: "1rem",
            opacity: 0.75,
            letterSpacing: "0.4px",
            padding: "20px",
          }}
        >
          React Developer • UI Designer • Frontend Engineer
        </motion.p>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            marginTop: "4rem",
            fontSize: "0.85rem",
            opacity: 0.5,
          }}
        >
          ↓ Scroll
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;