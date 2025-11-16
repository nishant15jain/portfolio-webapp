'use client'
import { projectsData } from "@/lib/data";
import Image from "next/image";
import useSectionInView from "@/lib/hooks";
const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.5);
  return (
    <section id="projects" ref={ref} className="mb-28 scroll-mt-28 max-w-[50rem] text-center sm:mb-40">
      <h2 className="text-3xl font-medium capitalize mb-8">Projects</h2>
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
        {projectsData.map((project) => (
          <section key={project.title} className="bg-gray-100 rounded-lg overflow-hidden border border-black/5 relative sm:h-[20rem] group hover:bg-gray-200 transition">
            <div className="py-4 px-5 sm:py-6 sm:px-10 max-w-1/2 flex flex-col h-full group-even:ml-[28rem]">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.description}</p>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                    {project.tags.map((tag) => (
                        <li key={tag} className="bg-black/70 text-white rounded-full px-3 py-1 text-sm">
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
            <Image src={project.imageUrl} alt={project.title} className="absolute top-8 -right-40 w-[28.25rem] h-[18.75rem] object-cover sm:w-[33.75rem] sm:h-[22.5rem] rounded-t-lg group-even:right-[initial] group-even:-left-40 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:scale-105 group-hover:rotate-2 transition" />
          </section>
        ))}
      </div>
    </section>
  )
}

export default Projects;