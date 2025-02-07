"use client"

import { useState } from "react"
import Image from "next/image"

const technologies = [
  {
    name: "React",
    category: "frameworks",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    category: "frameworks",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "JavaScript",
    category: "languages",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    category: "languages",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "HTML",
    category: "languages",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain.svg",
  },
  {
    name: "CSS",
    category: "languages",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg",
  },
  {
    name: "Tailwind CSS",
    category: "styling",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042",
  },
  {
    name: "Bootstrap",
    category: "styling",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024",
  },
  {
    name: "Node.js",
    category: "backend",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Axios",
    category: "api&Tools",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/axios/axios-plain.svg",
  },
  {
    name: "MongoDB",
    category: "backend",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-plain.svg",
  },
  {
    name: "PHP",
    category: "backend",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-plain.svg",
  },
  {
    name: "Git",
    category: "api&Tools",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-plain.svg",
  },
]

const categories = ["all", "frameworks", "languages", "styling", "backend", "api&Tools"]

export function Stack() {
  const [filter, setFilter] = useState("all")

  const filteredTech = technologies.filter((tech) => filter === "all" || tech.category === filter)

  return (
    <section id="stack" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Мой стек технологий</h2>
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded ${filter === category ? "bg-black text-white" : "bg-gray-200"}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTech.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center p-4 bg-white rounded shadow">
              <Image src={tech.logo || "/placeholder.svg"} alt={tech.name} width={50} height={50} className="mb-2" />
              <span className="text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

