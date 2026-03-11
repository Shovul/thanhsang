import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion";

type Project = {
  src: string
  desc: string
}
const projects: Project[] = [
  {
    src: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    desc: "Project 1\nLorem ipsum ut eum doloremque dolores. Cumque sunt facere eaque asperiores distinctio fugit. Repellat sint ex vel accusamus nostrum!",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    desc: "Project 2\nLorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae excepturi, eveniet accusantium similique au vel accusamus nostrum!",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    desc: "Project 3\nLorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae excepturi, emque dolores. Cumque sunt facere eaque asperiores distinctio fugit. Repellat sint ex vel accusamus nostrum!",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    desc: "Project 4\nr adipisicing elit. Repudiandae excepturi, eveniet accusantium similique aut eum doloremque inctio fugit. Repellat sint ex vel accusamus nostrum!",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    desc: "Project 5\nLorem ipsum dolor sit amet consectetur adipisicing elit. similique aut eum doloremque dolores. Cumque sunt facere eaque asperiores distinctio fugit. Repellat sint ex vel accusamus nostrum!",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
    desc: "Project 6\nLorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae excepturi, eveniet. Cumque sunt facere eaque asperiores distinctio fugit. Repellat sint ex vel accusamus nostrum!",
  },
  {
    src: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
    desc: "Project 7\nLorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae excepturi, eveniet accusantium similique aut eum doloremque dolores.",
  },
]

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (!containerRef.current) return

    const scrollTop = containerRef.current.scrollTop
    const itemHeight = containerRef.current.clientHeight

    const index = Math.round(scrollTop / itemHeight)

    if (index >= 0 && index < projects.length) {
      setCurrentProject(index)
    }
  }
  
  useEffect(() => {

    const el = containerRef.current
    el?.addEventListener("scroll", handleScroll)

    return () => el?.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
        <h2 className="text-3xl font-bold text-center mb-12 divider">Projects</h2>
        <div className="flex flex-col lg:flex-row items-center gap-5 py-10">
            <div className="lg:flex-1 h-48 overflow-hidden relative bg-base-200/50 rounded-r-xl">
              <motion.div
                animate={{ y: -(currentProject * 192) }} // 192px matches the container height (h-48)
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="flex flex-col"
              >
                {projects.map((project, index) => (
                  <div 
                    key={index} 
                    className="h-48 p-8 flex flex-col justify-center transition-opacity duration-500"
                    style={{ opacity: currentProject === index ? 1 : 0.2 }}
                  >
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {project.desc.split('\n')[0]}
                    </h3>
                    <p className="text-lg leading-relaxed italic">
                      {project.desc.split('\n')[1]}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="carousel carousel-vertical rounded-box w-64 h-96 lg:ml-20" ref={containerRef}>
              {projects.map((project, index) => (
                  <div key={index} className="carousel-item h-full relative">

                  <img
                      src={project.src}
                      className="object-cover w-full"
                  />
                  </div>
              ))}
            </div>
        </div>
    </>
  )
}

export default Projects
