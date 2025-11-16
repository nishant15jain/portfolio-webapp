"use client"

import { skillsData } from "@/lib/data"
import useSectionInView from "@/lib/hooks"

const Skills = () => {
  const { ref } = useSectionInView('Skills');
  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[50rem] scroll-mt-28 text-center sm:mb-40">
      <h2 className="text-3xl font-medium capitalize mb-8">My Skills</h2>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill) => (
          <li
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
            key={skill}
          >{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills