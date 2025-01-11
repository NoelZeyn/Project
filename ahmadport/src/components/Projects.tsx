import React from 'react';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A modern portfolio showcasing my projects and skills.',
    link: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'An e-commerce website with responsive design and cart functionality.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline mt-2 block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
