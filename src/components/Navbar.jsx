import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext.jsx";
import { FiSun, FiMoon } from "react-icons/fi";

const navItems = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: "1.5rem",
        left: 0,
        right: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        pointerEvents: "auto",
        transform: "translateX(-50%)",
        zIndex: 999,
        
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          padding: "1rem 2rem",
          borderRadius: "999px",
          background:
            theme === "dark"
              ? "rgba(15,15,15,0.75)"
              : "rgba(255,255,255,0.75)",
          backdropFilter: "blur(14px)",
          border: `1px solid ${theme === "dark" ? "#fff": "#111"}`,
          margin: "0 auto",
          maxWidth: "900px",
        }}
      >
        {/* Logo */}
        <span
          style={{
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.5px",
          }}
        >
          VA
        </span>

        {/* Nav Links */}
        <div style={{ display: "flex", gap: "1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: "0.85rem",
                textDecoration: "none",
                color: theme === "dark" ? "#fff" : "#111",
                opacity: 0.75,
                transition: "opacity 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hamburger (mobile) - CSS shows it on small screens */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle navigation"
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            padding: 6,
            marginLeft: 6,
            color: theme === "dark" ? "#fff" : "#111",
          }}
        >
          <span style={{ display: "block", width: 18, height: 2, background: "currentColor", marginBottom: 4 }} />
          <span style={{ display: "block", width: 18, height: 2, background: "currentColor", marginBottom: 4 }} />
          <span style={{ display: "block", width: 18, height: 2, background: "currentColor" }} />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            fontSize: "1.1rem",
            opacity: 0.85,
            color: theme === "dark" ? "#fff" : "#111",
            outline: "none",
            transition: "all 0.3s ease",
          }}
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
        {/* Mobile dropdown menu (only renders when open). Inline styles keep desktop layout unchanged. */}
        {open && (
          <div className="mobile-menu" style={{ position: "absolute", top: "calc(100% + 0.5rem)", right: 8, width: "220px", padding: "0.5rem", borderRadius: 12, background: theme === "dark" ? "rgba(15,15,15,0.95)" : "rgba(255,255,255,0.95)", boxShadow: "0 10px 30px rgba(0,0,0,0.12)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} style={{ padding: "0.5rem", borderRadius: 8, textDecoration: "none", color: theme === "dark" ? "#fff" : "#111" }}>{item}</a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;