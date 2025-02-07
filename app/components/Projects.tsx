"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const projects = [
  {
    name: "TagMate",
    image: "/tm.jpg",
    description:
      `TagMate — Dating приложение, на TypeScript, фреймворк Next. 
      Очень сильно затронут вопрос архитектуры (API ent-поинты(REST API), типы, сервисы, утилиты) и интеграции бэка`,
    technologies: ["NextJS", "TypeScript", "CSS Modules", "react-hook-form", "REST API"],
    link: "https://tagmate.ru",
  },
  {
    name: "CookieStore",
    image: "/cs.jpg",
    description: `CookieStore -  интернет-магазин со сладостями.
    Написан на языке JavaScript, библиотека React с использованием Zustand.`,
    technologies: ["ReactJS", "JavaScript", "Tailwind CSS", "Zustand", "Firebase", "react-hook-form"],
    link: "https://open-shop-seven.vercel.app",
  },
  {
    name: "Japan Kitchen",
    image: "/jk.jpg",
    description:
      `Japan Kitchen - магазин с Японской кухней. Написан на языке JavaScript, библиотека React с использованием useContext`,
    technologies: ["React", "JavaScript", "useContext", "Firebase", "react-hook-form"],
    link: "https://japan-kitchen.vercel.app/",
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8">Мои работы</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded shadow overflow-hidden flex flex-col h-full">
            <div className="flex-grow flex items-center justify-center p-4">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-4 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <div className="mt-auto">
                <Button onClick={() => setSelectedProject(project)} className="w-full">
                  Подробнее
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>{selectedProject.name}</DialogTitle>
            </DialogHeader>
            <Image
              src={selectedProject.image || "/placeholder.svg"}
              alt={selectedProject.name}
              width={600}
              height={400}
              className="w-full rounded-lg mb-4"
            />
            <DialogDescription>{selectedProject.description}</DialogDescription>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Использованные технологии:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-200 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <Button asChild>
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                  Посмотреть проект
                </a>
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}

