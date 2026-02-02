import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

    return (
        <footer
            style={{
                padding: "4rem 8% 2rem",
                backgroundColor: theme === "dark" ? "#0b0b0b" : "#f9f9f9",
                color: theme === "dark" ? "#ddd" : "#222",
                }}
                >
                    {/* Top Divider */}
                    <div
                        style={{
                            height: "1px",
                            backgroundColor: theme === "dark" ? "#222" : "#ddd",
                            marginBottom: "3rem",
                        }}
                        />

                        {/* Main Grid */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1.5fr 1fr 1.2fr",
                                gap: "3rem",
                            }}
                            >
                                {/* LEFT */}
                                <div>
                                    <h3 style ={{ marginBottom: "1rem"}}>Victor Akinbode</h3>
                                    <p
                                        style ={{
                                            fontSize: "0.9rem",
                                            lineHeight: "1.7",
                                            color: theme === "dark" ? "#aaa" : "#555",
                                            maxWidth: "min(320px, 90%)",
                                        }}
                                        >
                                            React developer and UI focused frontend engineer, building clean, scalable, and performance-optimized web experiences.
                                    </p>
                                </div>

                                {/* MIDDLE */}
                                <div>
                                    <h4 style ={{ marginBottom: "1rem"}}>Navigation</h4>
                                    <ul style={{ listStyle: "none", padding: 0, margin: "0" }}>
                                        {["Home", "About", "Projects", "Contact"].map((item) => (
                                            <li key={item} style={{ marginBottom: "0.6rem" }}>
                                                <a
                                                    href={`#${item.toLowerCase()}`}
                                                    style ={{
                                                        textDecoration: "none",
                                                        color: theme === "dark" ? "#bbb" : "#555",
                                                    }}
                                                    >
                                                        {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* RIGHT */}
                                <div>
                                    <h4 style ={{ marginBottom: "1rem"}}>Contact & Networks</h4>

                                    <div style={{ display: "flex", alignItems: "center", marginBottom: "0.8rem" }}>
                                        <FiMail style={{ marginRight: "0.6rem", color: theme === "dark" ? "#bbb" : "#555" }} />
                                        <a
                                            href="mailto:oluwaseyiv47@gmail.com"
                                            style={{
                                                textDecoration: "none",
                                                color: "inherit",
                                                cursor: "pointer",
                                                opacity: 0.8,
                                                transition: "opacity 0.3s",
                                            }}
                                            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                                            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
                                        >
                                            <span>oluwaseyiv47@gmail.com</span>
                                        </a>
                                    </div>

                                    <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
                                        <FiMapPin style={{ marginRight: "0.6rem", color: theme === "dark" ? "#bbb" : "#555" }} />
                                        <span>Nigeria</span>
                                    </div>    

          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href="https://linkedin.com/in/victor-akinbode-019665211"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/akinbodevictor02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div
        style={{
          height: "1px",
          background: theme === "dark" ? "#222" : "#ddd",
          margin: "2.5rem 0 1.2rem",
        }}
      />

      {/* Bottom Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.8rem",
          color: theme === "dark" ? "#777" : "#666",
        }}
      >
        <span>© {new Date().getFullYear()} Victor Akinbode</span>
        <span>Legal Notice · Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;