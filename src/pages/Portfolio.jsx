import React from 'react';
import { projects } from '../postdata/ProjectData';

const Portfolio = () => {
  return (
    <>
      <h2 className='text-center text-3xl mx-auto font-bold'>My Portfolio</h2>
      <div className="flex justify-center">
          <div  className="flex flex-col md:flex-row my-8 w-[86%]  relative left-5 justify-center items-center ">
          {projects.map((project) => (
              <div key={project.projectName} className="overflow-hidden md:w-1/4 bg-white m-4 shadow-lg flex flex-col justify-center text-black  rounded">
                <div className="h-26 w-full overflow-hidden h-[50vh]">
                  <img src={project.image} alt="" class="" /> 
                </div>
                <div className="text-sm m-2">30 March, 2023</div>
                <div className="font-medium text-normal m-2">{project.description}</div>
            </div>
          ))}
        </div>
          </div>
    </>
  );
};

export default Portfolio;
