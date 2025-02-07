import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Свяжитесь со мной</h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <Input type="text" placeholder="Ваше имя" />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="Ваш email" />
          </div>
          <div className="mb-4">
            <Textarea placeholder="Ваше сообщение" />
          </div>
          <Button type="submit" className="w-full">
            Отправить
          </Button>
        </form>
      </div>
    </section>
  )
}

