import { motion } from "framer-motion";
import type { ReactNode } from "react";

type TechBadgeProps = {
  icon: ReactNode;
  label: string;
  className: string;
  duration: number;
};

const TechBadge = ({
  icon,
  label,
  className,
  duration,
}: TechBadgeProps) => {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute hidden items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-medium shadow-lg backdrop-blur-md md:flex ${className}`}
    >
      {icon}
      <span>{label}</span>
    </motion.div>
  );
};

export default TechBadge;