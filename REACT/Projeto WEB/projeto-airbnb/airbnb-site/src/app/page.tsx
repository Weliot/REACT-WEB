import Logo from "@/components/Logo/Index";
import BarraPesquisa from "@/widget/BarraPesquisa";
import BarraSuperior from "@/widget/BarraSuperior";
import NavegacaoAbasHorizontal from "@/widget/NavegacaoAbasHorizontal";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  
    <div>
      <h1>Teste</h1>
      <header className="container mx-auto px-5">
        <BarraSuperior />
        <BarraPesquisa />
      </header>

      <hr className="my-3" />

      <main className="container mx-auto px-5">

        <NavegacaoAbasHorizontal />

      </main>

      <div className="border-blue-600 border-2 mt-6"> Área conteúdos</div>

      <footer className="border-violet-600 border-2 container mx-auto px-5">Rodapé</footer>
    </div>
    
  )
}
