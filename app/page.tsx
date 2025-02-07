import { Header } from "./components/Header"
import { About } from "./components/About"
import { Stack } from "./components/Stack"
import { Projects } from "./components/Projects"
import { Social } from "./components/Social"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <About />
      <Stack />
      <Projects />
      <Social />
    </main>
  )
}

