import { motion } from "framer-motion";

const ExperienceDetails = ({ experience }) => {
  return (
    <motion.div
      key={experience.company_name}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-indigo p-6 rounded-xl shadow-lg"
    >
      <h3 className="text-white text-2xl font-bold mb-2">{experience.title}</h3>
      <p className="text-neutral-400 text-sm mb-2">{experience.company_name}</p>
      <p className="text-neutral-500 text-xs mb-4">{experience.date}</p>
      <ul className="list-disc ml-5 space-y-2">
        {experience.points.map((point, idx) => (
          <li key={idx} className="text-neutral-300 text-sm tracking-wide">
            {point}
          </li>
        ))}
      </ul>
    </motion.div> 
  );
};

export default ExperienceDetails;
