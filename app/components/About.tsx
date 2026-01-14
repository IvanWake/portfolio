import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Обо мне</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/ya.jpg?height=300&width=300"
              alt="Фото разработчика"
              width={300}
              height={300}
              className="shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Иван Тимофеев</h3>
            <p className="text-lg mb-4">Front-end разработчик с 4-летним опытом создания веб-приложений</p>
            <div className="space-y-4">
              <p>
                Привет, меня зовут Иван, я Frontend-разработчик.

                Занимаюсь разработкой Web-сервисов и приложений более 4-ёх лет, последние 2 года сфокусирован на Frontend, так же до этого 2 года работал с Backend'ом - писал Веб-сервисы на языке PHP.
              </p>
              <p>
              Работал как в команде, так и самостоятельно.<br/>
              Хотел бы работать с опытными коллегами и продолжать углубляться в разработку 👨‍💻
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

