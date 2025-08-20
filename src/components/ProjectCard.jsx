import React from "react";
import Tilt from "react-parallax-tilt";
import github from "/assets/logos/github.svg";


const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_project_link,
  gradientClass,
}) => {
  return (
    <Tilt
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      scale={1}
      transitionSpeed={400}
      className={`p-5 rounded-2xl sm:w-[360px] w-full ${gradientClass} hover:-translate-y-1 transition-transform duration-300`}
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-black/50 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_rgba(128,0,128,0.7)]"
          >
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-heading">{name}</h3>
        <p className="subtext mt-2">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <p key={index} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>

      {live_project_link && (
        <a href={live_project_link} target="_blank" rel="noopener noreferrer">
          <button className="mt-3 bg-royal hover:bg-lavender text-white px-4 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(128,0,128,0.7)]">
            Live Project
          </button>
        </a>
      )}
    </Tilt>
  );
};

export default ProjectCard;
