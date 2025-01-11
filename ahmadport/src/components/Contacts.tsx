import React from 'react';

const skills = ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Node.js'];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <ul className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-blue-500 text-white py-2 px-4 rounded shadow"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
