'use client'
import { motion } from 'framer-motion';
import useSectionInView from '@/lib/hooks';
const About = () => {
  const { ref } = useSectionInView('About', 0.75);
  return (
    <motion.section id="about" ref={ref} className="mb-28 max-w-[50rem] scroll-mt-28 text-center sm:mb-40" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{delay: 0.35}}>
      <h2 className="text-3xl font-medium capitalize mb-8">About Me</h2>
      <p className="mb-3">
        I'm a software engineer with a passion for building web applications. I'm a quick learner and I'm always looking to improve my skills.
      </p>
      <p className="mb-3">
        I'm a quick learner and I'm always looking to improve my skills. I'm a quick learner and I'm always looking to improve my skills.
      </p>
    </motion.section>
  )
}

export default About;