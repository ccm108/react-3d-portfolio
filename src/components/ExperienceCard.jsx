import { motion } from "framer-motion";

const ExperienceCard = ({ experience, isActive, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, type: "spring" }}
      className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 ${
        isActive ? "bg-storm" : "bg-navy"
      }`}
      onClick={onClick}
    >
      <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden mr-4">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="text-white text-lg font-bold">{experience.title}</h3>
        <p className="text-neutral-400 text-sm">{experience.company_name}</p>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
