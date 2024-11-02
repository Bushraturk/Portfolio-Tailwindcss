import React from 'react'

const Skills = () => {
  return (
    <div id='sKills'className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
      <div data-aos="zoom-in-up">
      <h2 className='text-4xl md:text-5xl'>Technologies I Work With</h2>
        <p className='text-gray-500 pt-2 text-2xl'>
        Skilled frontend developer with expertise in HTML, CSS, and JavaScript. Experienced in building responsive, user-friendly websites using frameworks like Next.js and tools like Tailwind CSS. Delivers efficient, clean code and continuously learns new technologies to enhance development skills.
           </p>
         
      </div>
      <div>
        <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl text-green-700'>
          <div className='space-y-2'>
            <h2 data-aos="zoom-in-up">Typescript</h2>
            <h2 data-aos="zoom-in-up">Javascript</h2>
            <h2 data-aos="zoom-in-up">Next.js</h2>
             </div>
            {/* col-2 */}
            <div className='space-y-2'>
            <h2 data-aos="zoom-in-up">TailwindCSS</h2>
            <h2 data-aos="zoom-in-up">CSS</h2>
            <h2 data-aos="zoom-in-up">Node.js</h2>
             </div>
            
            
            
            </div>
      </div>
      </div>
      </div>
      
      
    
  )
};

export default Skills
