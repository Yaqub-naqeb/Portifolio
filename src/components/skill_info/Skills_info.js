import React from 'react'
import useTheme from '../store/useTheme';

const Skills_info = ({skill}) => {
  const {mode} = useTheme();

  return (
    <div 
      className={`group rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 ease-out hover:scale-[1.05] sm:hover:scale-110 hover:-translate-y-1 sm:hover:-translate-y-2 flex flex-col items-center justify-center w-full max-w-[100px] sm:max-w-[120px] md:max-w-[140px] lg:max-w-[160px] text-center ${
        mode 
          ? 'bg-gradient-to-br from-[#F0F7FB] to-[#E8F4F8] hover:shadow-lg sm:hover:shadow-xl hover:shadow-[#9cd5ee40] border border-[#E0EFF5]' 
          : 'bg-gradient-to-br from-[#2d2d2d] to-[#1f1f1f] hover:shadow-lg sm:hover:shadow-xl hover:shadow-[#505C6240] border border-[#3a3a3a]'
      }`}
    >
      <div className={`mb-2 sm:mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-[1.08] sm:group-hover:scale-110`}>
        <img 
          src={skill.img} 
          className={`${skill.name === 'Firebase' ? 'w-[3.5rem] sm:w-[4rem] md:w-[5rem] lg:w-[6rem]' : 'w-[2.5rem] sm:w-[3rem] md:w-[3.5rem] lg:w-[4rem]'} ${
            skill.rounded ? 'rounded-full' : ''
          } h-[2.5rem] sm:h-[3rem] md:h-[3.5rem] lg:h-[4rem] object-contain ${
            skill.name === 'Django' 
              ? mode 
                ? 'filter brightness-0' 
                : '' 
              : skill.name === 'RemixJs'
              ? mode
                ? 'filter brightness-0'
                : ''
              : 'filter grayscale group-hover:grayscale-0'
          } transition-all duration-300`} 
          alt={`${skill.name} logo`}
          loading="lazy"
        />
      </div>
      <p className={`font-semibold text-xs sm:text-sm md:text-base transition-colors duration-300 ${
        mode ? 'text-[#4a4a4a] group-hover:text-[#2a2a2a]' : 'text-[#e0e0e0] group-hover:text-white'
      }`}>
        {skill.name}
      </p>
    </div>
  )
}

export default Skills_info
