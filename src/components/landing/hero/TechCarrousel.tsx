import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

const technologies = [
  { name: "React", icon: <FaReact className="text-sky-400 bg-(--secondary) p-1 rounded-md" size={30} /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500  bg-(--secondary) p-1 rounded-md" size={30} /> },
  { name: "Python", icon: <FaPython className="text-yellow-400  bg-(--secondary) p-1 rounded-md" size={30} /> },
  { name: "Java", icon: <FaJava className="text-orange-500  bg-(--secondary) p-1 rounded-md" size={30} /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600  bg-(--secondary) p-1 rounded-md" size={30} /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600  bg-(--secondary) p-1 rounded-md" size={30} /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-300  bg-(--secondary) p-1 rounded-md" size={30} /> },
];

const TechCarousel = () => {
  // 🔁 Repetimos más veces para evitar reinicio visible
  const items = Array(6).fill(technologies).flat();

  return (
    <div className="overflow-hidden w-full p-2 bg-(--primary) rounded-sm">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((tech, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center min-w-[60px]"
          >
            {tech.icon}
        
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;
