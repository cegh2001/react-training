import React from "react";
import { data } from "../data/data.js";

const Projects = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div
      name="projects"
      className="w-full md:h-screen text-tertiary bg-primary"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-tertiary border-quinary">
            Proyectos
          </p>
          <p className="py-6">Ve nuestros recientes proyectos</p>
        </div>

        {/* Container for projects */}
        <div className="grid gap-6 place-items-center md:grid-cols-2">
          {/* Grid Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                border: "1px solid #ebf747",
              }}
              className="shadow-lg shadow-black hover:scale-110 duration-500 group container rounded-md 
              flex justify-center text-center items-center content-div px-10 pt-5 w-[348px] h-[340px] "
            >
              {/* Hover for images */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="transition ease-in-out delay-150 bg-primary hover:-translate-y-1 hover:scale-110 duration-300 rounded text-2xl font bold ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* Link to project */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       transition ease-in-out delay-150 bg-primary hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 font-bold text-lg"
                    >
                      Ver
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
