import React from 'react'

const Skills_info = ({skill}) => {
  return (
    <div className='box ml-4 rounded-md p-2  flex flex-col align-middle  justify-center bg-[#F0F7FB] w-[11rem]  text-center'><img src={`${skill.img}`} className='w-[4rem] ml-[31%] ' alt="" />
  <p className='self-left font-medium   '>{skill.name}</p>
  <div className='hd'></div>
  </div>
  )
}

export default Skills_info
