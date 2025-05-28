import { motion } from 'framer-motion';
import team1 from '../../assets/team/team-1.jpg'
import team2 from '../../assets/team/team-2.jpg'

import React from 'react';

function Banner() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='flex-1 rounded-t-6'>
          <motion.img
            src={team1}
            animate={{y:[80,150,80]}}
            transition={{duration:6,repeat:Infinity}}
            className="max-w-sm rounded-lg shadow-2xl  border-l-4 border-b-4 border-blue-400  rounded-t-[60px]"
            alt="Job Banner"
          />
            <motion.img
            src={team2}
            animate={{x:[100,150,100]}}
            transition={{duration:9, delay:3,repeat:Infinity}}
            className="max-w-sm rounded-lg shadow-2xl  border-l-4 border-b-4 border-blue-400  rounded-t-[60px]"
            alt="Job Banner"
          />
        </div>
        <div className='flex-1'>
          <motion.h1
            className="text-5xl font-bold"
            animate={{
              rotate: 180,
              transition: { duration: 2 },
            }}
          >
            Latest Job For You!
          </motion.h1>
            <motion.h1
            className="text-5xl font-bold"
            initial={{scale:0}}
            animate={{
              scale:1 ,
              
              transition: { duration: 2 },
            }}
          >
            Remot  <motion.span
            animate={{
                color:['#f4733','#33ff33','#8a33ff'],
                transition:{duration:4, repeat:Infinity}
            }}
            >Job</motion.span> For You!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
