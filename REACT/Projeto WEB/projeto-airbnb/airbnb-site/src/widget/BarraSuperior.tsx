import BotaoIcone from "@/components/BotaoIcone/Index"
import Logo from "@/components/Logo/Index"
import { IconUserCircle } from "@tabler/icons-react"
import Link from "next/link"

const BarraSuperior = () => {
    return (
        <div className="py-6 mx-auto flex justify-between items-center">
          
          <Logo />

          <div className="flex gap-6">
            <Link className="font-semibold" href="/">Acomodações</Link>
            <Link className="opacity-50" href="/">Experiências</Link>
          </div>

          <BotaoIcone
          icone={(
            <IconUserCircle
              aria-label="Ícone de usuário"
              size={24} />
          )}>
            Entrar
          </BotaoIcone>

        </div>
    )
}

export default BarraSuperior