import { useState } from "react";
import { useSpring, animated } from "react-spring";

const projects = [
  {
    title: "Ratisbar.ge",
    description: "A simple and user-friendly web design.",
    link: "https://www.ratisbar.ge/",
    image: "/ratisbar.jpg",
  },
  {
    title: "Bitwarden Vault",
    description: "Secure password management platform.",
    link: "https://vault.bitwarden.com/#/login",
    image: "/bitwar.jpg",
  },
  {
    title: "Project 3",
    description: "Short description of Project 3",
    link: "#",
    image: "/black.png",
  },
  {
    title: "Alpen Gold",
    description: "Promo website for Alpen Gold",
    link: "https://alpengoldpromo.ge/",
    image: "/alpengold2.png",
  },
];

const Project = () => {
  const [clickedProject, setClickedProject] = useState<string | null>(null);

  const handleProjectClick = (index: number) => {
    console.log("Clicked project index:", index);
    if (index === 2) {
      setClickedProject("New Year Animation");
    } else {
      setClickedProject(null);
    }
  };

  const closeNewYearAnimation = () => {
    console.log("Closing animation...");
    setClickedProject(null);
  };

  const springProps = useSpring({
    opacity: clickedProject === "New Year Animation" ? 1 : 0,
    transform:
      clickedProject === "New Year Animation" ? "scale(1)" : "scale(0)",
    config: { tension: 200, friction: 15 },
  });

  return (
    <section id="projects" className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-8 animate-bounce">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-cover bg-center p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-end"
              style={{
                backgroundImage: `url(${project.image})`,
                height: "300px",
              }}
              onClick={() => handleProjectClick(index)}
            >
              <div className="bg-white bg-opacity-75 p-4 rounded-md">
                <h3 className="text-xl font-semibold text-black">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className="text-red-600 mt-4 inline-block hover:underline"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
        {clickedProject === "New Year Animation" && (
          <animated.div
            style={springProps}
            className="relative mt-8 p-6 bg-gray-200 rounded-lg shadow-md overflow-hidden"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Animation container clicked");
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeNewYearAnimation();
                console.log("Close button clicked");
              }}
              className="absolute top-2 right-2 text-red-600 border-2 border-white hover:bg-red-600 hover:text-white font-bold text-xl px-3 py-1 rounded-md close-button"
            >
              &times;
            </button>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 opacity-50 z-0"></div>
            <h3 className="text-4xl font-extrabold text-red-600 z-10 mb-4 text-shadow-md">
              🎉 Happy New Year! 🎉
            </h3>
            <p className="text-lg font-semibold text-red-600 z-10 text-shadow-md">
              Celebrate the New Year with some awesome effects!
            </p>
          </animated.div>
        )}
      </div>
    </section>
  );
};

export default Project;
