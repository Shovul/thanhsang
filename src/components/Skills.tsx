import {
  SiTypescript,
  SiJavascript,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiLaravel,
  SiGraphql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiVercel,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

import { FaNodeJs, FaGithub, FaAws, FaLinux } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12 divider">Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">

        {/* Backend */}
        <div className="bg-base-200 rounded-2xl p-8 border border-neutral hover:bg-secondary/10 transition duration-300">
            <h3 className="text-xl font-semibold mb-3">Backend</h3>

            <p className="text-base-content/70 mb-6">
            I love problem-solving and building complex systems.
            I strive to create scalable, reliable, and secure solutions.
            </p>

            <div className="flex flex-wrap gap-4 text-3xl">
            <SiTypescript />
            <SiJavascript />
            <FaNodeJs />
            <SiPostgresql />
            <SiGraphql />
            <FaGithub />
            </div>
        </div>

        {/* Frontend */}
        <div className="bg-base-200 rounded-2xl p-8 border border-neutral hover:bg-secondary/10 transition duration-300">
            <h3 className="text-xl font-semibold mb-3">Frontend & Design</h3>

            <p className="text-base-content/70 mb-6">
            I'm passionate about design, animation, and interactions,
            always aiming to build fun websites with great user experiences.
            </p>

            <div className="flex flex-wrap gap-4 text-3xl">
            <SiReact />
            <SiNextdotjs />
            <SiTailwindcss />
            <SiFigma />
            </div>
        </div>

        {/* DevOps */}
        <div className="bg-base-200 rounded-2xl p-8 border border-neutral hover:bg-secondary/10 transition duration-300">
            <h3 className="text-xl font-semibold mb-3">Cloud & DevOps</h3>

            <p className="text-base-content/70 mb-6">
            I have deployed and managed various applications using tools such as
            AWS, GCP, and other cloud services.
            </p>

            <div className="flex flex-wrap gap-4 text-3xl">
            <FaAws />
            <FaLinux />
            <SiDocker />
            <SiKubernetes />
            <SiVercel />
            </div>
        </div>

        {/* Management */}
        <div className="bg-base-200 rounded-2xl p-8 border border-neutral hover:bg-secondary/10 transition duration-300">
            <h3 className="text-xl font-semibold mb-3">Management</h3>

            <p className="text-base-content/70 mb-6">
            I have worked with multiple clients and stakeholders to define
            projects that suit their needs and have led these projects.
            </p>

            <div className="flex flex-wrap gap-3">
            <span className="badge badge-primary badge-lg">Agile</span>
            <span className="badge badge-primary badge-lg">Scrum</span>
            <span className="badge badge-primary badge-lg">Jira</span>
            <span className="badge badge-primary badge-lg">Office</span>
            </div>
        </div>

        </div>
    </section>
  )
}

export default Skills
