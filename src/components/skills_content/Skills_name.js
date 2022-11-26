import React from 'react'
import '../../App.css'


const Skills_name = ({name,percentage}) => {
  return (
    <div>
      
{/* one */}
    <div  className='font-medium text-[#A5A5A5]'>



{/* name and percent */}
<div className='flex justify-between  w-full  '>
<p>{name}</p>
<p>{percentage}%</p>

</div>

{/* the blood */}
<div className='bg-[#ADD6E84F]  w-full h-2 rounded-full'> <p className={`rang h-2 w-[${percentage}%] bg-[#ADD6E8]  rounded-full z-50`}></p> </div>


</div>
    </div>
  )
}

export default Skills_name
