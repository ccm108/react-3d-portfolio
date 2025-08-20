import { useState, useTransition, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";
import ExperienceDetails from "../components/ExperienceDetails";
import { experiences } from "../constants/experiences";

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handleClick = (index) => {
    startTransition(() => {
      setActiveExperience(index);
    });
  };

  const currentExperience = useMemo(
    () => experiences[activeExperience],
    [activeExperience]
  );

  return (
    <section id="experience" className="section-spacing c-space">
      <div className="text-center mb-10">
        <p className="subtext">My Professional Journey</p>
        <h2 className="text-heading">Experience & Education</h2>
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-8">
        {/* Left Side - Cards */}
        <motion.div
          className="md:w-1/3 space-y-4"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              experience={exp}
              isActive={index === activeExperience}
              onClick={() => handleClick(index)}
              index={index}
            />
          ))}
        </motion.div>

        {/* Right Side - Details */}
        <motion.div
          className="md:w-2/3"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {!isPending && (
              <ExperienceDetails
                key={currentExperience.company_name}
                experience={currentExperience}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
