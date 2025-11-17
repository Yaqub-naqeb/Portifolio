import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Card from '../components/cards/Card';
import { Info } from '../components/cards/Info';
import My from '../components/My';
import useTheme from '../components/store/useTheme';

const Projects = () => {
  const [obj] = useState(Info);
  const {mode} = useTheme();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  
  return (
    <section 
      id='projects' 
      className={`lg:pt-[6rem] md:pt-[4rem] pt-[3rem] pb-12 sm:pb-16 md:pb-20 z-41 min-h-screen ${mode ? 'bg-white' : 'bg-[#262626]'}`}
    >
      <My name={'Projects'} bg_name={'My'}/>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className='space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16'
        >
          {obj.map((info, index) => (
            <motion.div key={info.id} variants={itemVariants}>
              <Card id={info.id} info={info}/>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
