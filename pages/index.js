import Image from "next/image";

import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';


import { motion } from "framer-motion";

import { fadeIn } from '../variants';

const Home = () => {
  return( <div className='bg-primary/60 h-full '>

    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 '>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>

        <motion.h1 variants={fadeIn('down' , 0.2)} initial='hidden' animate='show' exit='hidden' className='h1 '>Transforming Dreams <br />Into <span className=' text-blue-500'>Digital Reality :)</span></motion.h1>
        <motion.p variants={fadeIn('down' , 0.3)} initial='hidden' animate='show' exit='hidden' className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
          Hi,my name is Erfan Mizban .I study computer engineering at Fum .
          i realy like Programming and creating something new . i work in 
          cycass company and mosafer app. if you want me to have cooperation 
          just text me.
         
        </motion.p >
        <div className='flex justify-center xl:hidden relative'>
          {/* <ProjectsBtn /> */}
        </div>
        <div>
          {/* <ProjectsBtn /> */}
        </div>

      </div>
    </div>
    {/*+++++++++++++++++++++++++++++++++++++*/}
    <div className='w-[1360px] h-full absolute right-0 bottom-0'>
      <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
      </div>
      <ParticlesContainer />
      <motion.div variants={fadeIn('up' , 0.5)} initial='hidden' animate='show' exit='hidden' transition={{duration:1 , ease : 'easeInOut'}} className='w-full h-full max-w-[475px] max-h-[395px] absolute bottom-0 right-10 '>
        {/* <Avatar /> */}
      </motion.div>
    </div>
  </div>
  );
};

export default Home;
