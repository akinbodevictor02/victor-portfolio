import { motion } from "framer-motion";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../ThemeContext.jsx";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const floatingShapes = Array.from({ length: 8 }).map(() => ({
  size: Math.random() * 40 + 15,
  top: `${Math.random() * 80}%`,
  left: `${Math.random() * 90}%`,
  color: `hsl(${Math.random() * 360}, 70%, 60%)`, 
  delay: Math.random() * 3
}));

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const links = [
    { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/victor-akinbode-019665211/" },
    { icon: <FaGithub />, label: "GitHub", url: "https://github.com/akinbodevictor02" },
    { icon: <FaEnvelope />, label: "Email", url: "mailto:oluwaseyiv47@gmail.com" }
  ];

const sendEmail = (e) => {
  e.preventDefault();
  setSending(true);

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
    .then(() => {
      setSending(false);
      setSuccess(true);
      formRef.current.reset();
    })
    .catch(() => {
      setSending(false);
      setSuccess(false);
    });
};

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        padding: "6rem 8%",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        zIndex: 2
      }}
    >
      {/* Floating Shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 180, 0] }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: shape.top,
            left: shape.left,
            width: shape.size,
            height: shape.size,
            borderRadius: "50%",
            background: shape.color,
            filter: "blur(30px)",
            opacity: 0.2,
            zIndex: 1,
          }}
        />
      ))}

      {/* Title Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          marginBottom: "4rem"
        }}
      >
        <h2 style={{ fontSize: "2.5rem" }}>Contact</h2>
        <div
          style={{
            flex: 1,
            height: "1px",
            background: theme === "dark" ? "#333" : "#ccc"
          }}
        />
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "4rem",
          alignItems: "flex-start"
        }}
      >
        {/* LEFT: Profile */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <img
              src="/profile.jpg"
              alt="Victor Akinbode"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid rgba(255,255,255,0.2)"
              }}
            />
            <div>
              <h3 style={{ marginBottom: "0.3rem" }}>Victor Akinbode</h3>
              <span
                style={{
                  fontSize: "0.75rem",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "999px",
                  background: "#16a34a",
                  color: "#fff"
                }}
              >
                Available for work
              </span>
            </div>
          </div>

          <p
            style={{
              marginTop: "2rem",
              color: theme === "dark" ? "#aaa" : "#555",
              maxWidth: "300px",
              lineHeight: "1.7"
            }}
          >
            Interested in working together or have a project in mind? Feel free
            to reach out.
          </p>

          {/* Social Buttons */}
          <div style={{ marginTop: "1rem", display: "flex", gap: "0.8rem" }}>
            {links.map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95}}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.45rem 0.9rem",
                  borderRadius: "999px",
                  fontSize: "0.8rem",
                  textDecoration: "none",
                  background:
                    theme === "dark"
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.08)",
                  color: theme === "dark" ? "#fff" : "#111",
                  border:
                    theme === "dark"
                      ? "1px solid rgba(255,255,255,0.15)"
                      : "1px solid rgba(0,0,0,0.15)",
                  transition: "background 0.3s, color 0.3s"
                }}
              >
                {link.icon}
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background:
              theme === "dark"
                ? "rgba(255,255,255,0.04)"
                : "#f5f5f5",
            padding: "2.5rem",
            borderRadius: "18px",
            backdropFilter: "blur(12px)"
          }}
        >
          <h3 style={{ marginBottom: "1.5rem" }}>Send me a message</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginBottom: "1rem"
            }}
          >
            <input name="name" placeholder="Name" style={inputStyle(theme)} required />
            <input name="surname" placeholder="Surname" style={inputStyle(theme)} />
          </div>

          <input name="email" type="email" placeholder="Email" style={{ ...inputStyle(theme), marginBottom: "1rem" }} required />

          <textarea name="message" placeholder="Message" rows={4} style={{ ...inputStyle(theme), resize: "none" }} required />

          <button
            type="submit"
            disabled={sending}
            style={{
              marginTop: "1.8rem",
              padding: "0.9rem 1.8rem",
              borderRadius: "999px",
              border: "none",
              background: "#fff",
              color: "#000",
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            {sending ? "Sending..." : "Send →"}
          </button>

          {success === true && <p style={{ marginTop: "1rem", color: "#16a34a" }}>Message sent successfully!</p>}
          {success === false && <p style={{ marginTop: "1rem", color: "#dc2626" }}>Failed to send. Try again.</p>}
        </motion.form>
      </div>
    </section>
  );
};

const inputStyle = (theme) => ({
  width: "100%",
  padding: "0.8rem 1rem",
  borderRadius: "10px",
  border: "none",
  outline: "none",
  background:
    theme === "dark"
      ? "rgba(255,255,255,0.08)"
      : "#eaeaea",
  color: "inherit"
});

export default Contact;