import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: "100%",
        background: "#4fd1ff",
        transformOrigin: "0%",
        scaleX: scrollYProgress,
        zIndex: 9999
      }}
    />
  );
};

export default ScrollProgress;