import { useState } from "react";
import AfterProjects from "../components/AfterProjects";
import ProjectsCard from "../components/ProjectsCard";
import Cook from "../assets/Cook.png";
import Travel from "../assets/Travel.png";
import Port from "../assets/Port.png";
import Gadget from "../assets/Gadget.png";
import Bubble from "../assets/Bubble.png";
import Hotel from "../assets/Hotel.png";
import Gemini from "../assets/gemini-clone.png";

const ProjectArray = [
  {
    title: "Code & Cook",
    skills: ["React.js", "Tailwind CSS"],
    live: "https://master-farhan.github.io/recipe/",
    github: "https://github.com/master-farhan/recipe",
    img: Cook,
    category: "Recipe / Food",
    description:
      "A recipe website where users can explore and cook various meals with modern UI and responsive design.",
  },
  {
    title: "My Gadget Bd",
    skills: ["React.js", "Redux", "Tailwind CSS"],
    live: "https://my-gadget-bd.netlify.app/",
    github: "https://github.com/master-farhan/My-Gadget",
    img: Gadget,
    category: "E-Commerce",
    description:
      "An eCommerce platform for showcasing and buying the latest gadgets with category filtering and live search.",
  },
  {
    title: "Travel Website",
    skills: ["React.js", "Tailwind CSS"],
    live: "https://travel-web-go.netlify.app/",
    github: "https://github.com/master-farhan/Travel",
    img: Travel,
    category: "Travel",
    description:
      "A modern travel booking website featuring scenic destinations, smooth navigation, and a responsive layout.",
  },
  {
    title: "Portfolio",
    skills: ["HTML", "CSS", "JavaScript"],
    live: "https://farhan-studio.netlify.app/",
    github: "https://github.com/master-farhan/studio",
    img: Port,
    category: "Portfolio",
    description:
      "A personal portfolio to showcase my frontend projects, skills, and contact information with elegant design.",
  },
  {
    title: "Hotel Booking",
    skills: ["React.js", "Tailwind CSS"],
    live: "https://hotel-booking-002.netlify.app/",
    github: "https://github.com/master-farhan/hotel-booking",
    img: Hotel,
    category: "Hotel",
    description:
      "A hotel booking UI where users can explore rooms and amenities with a clean and user-friendly interface.",
  },
  {
    title: "Bubble Game",
    skills: ["HTML", "CSS", "JavaScript"],
    live: "https://master-farhan.github.io/Bubble-Game/",
    github: "https://github.com/master-farhan/Bubble-Game",
    img: Bubble,
    category: "Game",
    description:
      "A fun and interactive bubble shooter game built with vanilla JavaScript for casual gaming.",
  },
  {
    title: "Gemini Frontend",
    skills: ["React.js", "Tailwind CSS"],
    live: "https://gemini-frontend-002.netlify.app/",
    github: "https://github.com/master-farhan/gemini-ui",
    img: Gemini,
    category: "Clone",
    description:
      "A frontend UI clone of Google's Gemini with modern design, transitions, and responsive layout.",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Recent");

  // Add "Recent" manually at the front
  const uniqueCategories = [...new Set(ProjectArray.map((p) => p.category))];
  const allCategories = ["All", "Recent", ...uniqueCategories];

  // Filtering logic
  const filteredProjects =
    activeCategory === "All"
      ? ProjectArray
      : activeCategory === "Recent"
      ? ProjectArray.slice(0, 3) // latest 3 projects
      : ProjectArray.filter((p) => p.category === activeCategory);

  return (
    <div className="relative pb-30">
      <AfterProjects />

      {/* Category Buttons */}
      <div className="mt-5 gap-5 flex flex-nowrap overflow-auto scrollbar-hide">
        {allCategories.map((category, index) => (
          <div
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`py-1 px-10 font-playfair rounded-full cursor-pointer text-base whitespace-nowrap
              ${
                activeCategory === category
                  ? "bg-accent/50 text-grow"
                  : "bg-accent/10 hover:bg-accent text-grow/80"
              } transition duration-300`}
          >
            <p>{category}</p>
          </div>
        ))}
      </div>

      {/* Filtered Projects */}
      <ProjectsCard ProjectArray={filteredProjects} />
    </div>
  );
};

export default Projects;
