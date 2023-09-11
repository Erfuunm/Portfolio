//  data
import React, {useState} from 'react';

import{
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaMicrosoft,
 
  
} from 'react-icons/fa'

import {
SiNextdotjs,
SiCsharp,
SiCplusplus,
SiJavascript,
SiDotnet,
SiBlazor,
SiFramer,
SiAdobephotoshop,

}from 'react-icons/si';


export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <SiDotnet />,
          <SiCsharp />,
          <SiBlazor />,
          <FaMicrosoft />,
           <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaCss3 />,
         
          
          <FaWordpress />,
          <SiCplusplus />,
         
          <SiFramer/>,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Intern - Cycass Company',
        stage: '2023',
      },
      {
        title: 'Web Developer - Freelancing ',
        stage: '2021 - 2023',
      },
      {
        title: 'Teaching - Schools & State cultural centers',
        stage: '2022 - 2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Mathematics diploma - Mashhad, ZendeYadSadeghi HS, IR',
        stage: '2022',
      },
      {
        title: 'Computer Engineering - Mashhad, Ferdowsi University Of Mashhad',
        stage: '2023',
      },
      {
        title: 'Certified Graphic Designer And Teaching Programming - Mashhad , Fum',
        stage: '2023',
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from '../../components/Circles';


import {motion} from 'framer-motion';
import {fadeIn} from '../../variants'
import { icons } from 'react-icons';

import CountUp from 'react-countup';

const About = () => {
  const [index,setIndex] = useState(0);
  console.log(index);
  return(
     <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />
    <motion.div variants={fadeIn('right' , 0.2)} initial='hidden' animate='show' exit='hidden' className=' hidden xl:flex absolute bottom-0 -left-[370px]'>
      {/* <Avatar /> */}
    </motion.div>
    <div className=' container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 '>
      <div className=' mt-[250px] mb-[50px] xl:mt-[20px] flex-1 flex flex-col justify-center'>
        <h2 className=' h2'>
          Capptivating<span className=' text-accent'>stories</span> birth magnificent designs.
        </h2>
        <p className='  max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 '>
          4 years ago, I began freelancing as a Developer. Since then, i have
          done remote work for agencies, counsulted for startups, and 
          collabrated on digital products for business and consumer use.
        </p>
        <div className=' hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 -mb-[100px]  '>
          <div className='flex flex-1 xl:gap-x-6'>

            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 '></div>
             <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
              <CountUp start={0} end={4} duration={5} /> +

             </div>
             <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years Of Experience</div>

              
             <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 '></div>
             <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
              <CountUp start={0} end={14} duration={5} /> +

             </div>
             <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Projects</div>



             <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 '></div>
             <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
              <CountUp start={0} end={250} duration={5} /> +

             </div>
             <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied clients</div>


          </div>

        </div>
      </div>
      <div className='flex flex-col items-center w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 lg:mt-[150px]  '>
          {aboutData.map((item, itemIndex)=>{
            return <div key={itemIndex} className={` ${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
            onClick={()=> setIndex(itemIndex)}>{item.title}</div>;
          })}
        </div>
        <div className=' py-2 xl:py-0 flex flex-col place-items-center gap-y-2 xl:gap-y-4 
        '>
          {aboutData[index].info.map((item , itemIndex)=> {
            return(
               <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 '>
              <div className='font-light mb-2 md:mb-0'>{item.title}</div>
              <div className=' hidden md:flex'>-</div>
              <div>{item.stage}</div>
              <div className=' flex gap-x-4 '>

              {item.icons?.map((icon , itemIndex)=>{
                return <div className='text-2xl text-white'>{icon}</div>
              })}

              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
   </div>
  );
};

export default About;
