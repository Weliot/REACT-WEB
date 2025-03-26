import Logo from "@/components/Logo/Index";
import Acomodacoes from "@/widget/Acomodacoes";
import BarraPesquisa from "@/widget/BarraPesquisa";
import BarraSuperior from "@/widget/BarraSuperior";
import NavegacaoAbasHorizontal from "@/widget/NavegacaoAbasHorizontal";
import Rodape from "@/widget/Rodape";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  
    <div>
      <header className="container mx-auto px-5">
        <BarraSuperior />
        <BarraPesquisa />
      </header>

      <hr className="my-6 border-gray-200" />

      <main className="container mx-auto">

        <NavegacaoAbasHorizontal />
        <Acomodacoes />

      </main>

      <footer className="bg-gray-300">
        <Rodape />
      </footer>
    </div>
    
  )
}
