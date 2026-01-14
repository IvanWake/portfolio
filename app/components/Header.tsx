"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export function Header() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="py-6 border-b border-gray-200 sticky top-0 bg-white z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Иван Тимофеев
        </Link>
        <ul className="flex space-x-4">
          {
            [{name: "about", value: "Обо мне"}, {name: "stack", value: "Стек"}, {name: "projects", value: "Проекты"}, {name: "social", value: "Соц. сети"}].map((section) => (
            <li key={section.name}>
              <button
                onClick={() => scrollToSection(section.name)}
                className={`hover:underline ${activeSection === section.name ? "font-bold" : ""}`}
              >
                {section.value.charAt(0).toUpperCase() + section.value.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

