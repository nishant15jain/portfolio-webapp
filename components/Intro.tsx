'use client'
import Link from 'next/link'
import Image from 'next/image'
import profile from '@/public/profile.jpg'
import { motion } from 'framer-motion';
import { BsArrowRight, BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import useSectionInView from '@/lib/hooks';
const Intro = () => {
  const { ref } = useSectionInView('Home', 0.5);
  return (
    <section id="home" ref={ref} className="mb-28 scroll-mt-[100rem] max-w-[50rem] text-center sm:text-left scroll-mt-[98px]">
      <div className="flex items-center justify-center">
        <div className='relative'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{type: 'tween', duration: 0.5 }}
            >
                <Image src={profile} alt="Profile" width={100} height={100} priority={true} className='h-24 w-24 rounded-full object-cover border-[0.3rem] border-white shadow-xl' />
            </motion.div>   
            <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
                className='text-4xl absolute bottom-0 right-0'
            >👋</motion.span>
        </div>
      </div>
      <motion.p className='mt-10 text-center text-2xl sm:text-3xl font-medium' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.25}}>
        Hello, I'm <span className='font-bold'>Nishant Jain ,</span> a software engineer with a passion for building web applications.
      </motion.p>
      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 px-4 text-lg font-medium' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.25}}>
        <Link href="#contact" className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-110 active:scale-105 transition'>Contact Me here <BsArrowRight /></Link>
        <a href="/Nishant_Jain_Resume.pdf" download className='bg-white text-gray-700 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-110 active:scale-105 transition'>Download Resume <HiDownload /></a>
        <a href="https://www.linkedin.com/in/nishant-jain-572b5b17b/" target='_blank' className='bg-white text-gray-700 p-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-110 active:scale-105 transition'><BsLinkedin /></a>
        <a href="https://github.com/nishant-jain-0101" target='_blank' className='bg-white text-gray-700 p-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-110 active:scale-105 transition'><BsGithub /></a>
      </motion.div>
    </section>
  )
}

export default Intro;