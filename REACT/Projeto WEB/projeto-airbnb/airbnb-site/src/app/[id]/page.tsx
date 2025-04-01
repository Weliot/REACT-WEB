import Acomodacao from "@/components/Acomodacoes"
import BarraPesquisa from "@/widget/BarraPesquisa"
import BarraSuperior from "@/widget/BarraSuperior"
import Galeria from "@/widget/Galeria"
import Rodape from "@/widget/Rodape"
import Acomodacoes from "@/widget/Acomodacoes"
import AcomodacaoDetalhes from "@/widget/AcomodacaoDetalhes"
import AcomodacaoDepoimentos from "@/widget/AcomodacaoDepoimentos"
import { fetchDataById } from "@/utils/api"
import { notFound } from "next/navigation"

interface PageProps {
    id: string
}

export default async function Page(
    {params} : {params: Promise<PageProps>}
) {
    const {id} = await params
    const acomodacao = await fetchDataById(id)

    if( !acomodacao){
        notFound()
    }
        return (
        <div>
            <header className="container mx-auto px-5">
                <BarraSuperior />
                <BarraPesquisa />
            </header>

            <main className="container mx-auto pt-2">
                <h1 className="text-3xl font-semibold pb-2">{acomodacao.title}</h1>
                <Galeria fotos={acomodacao.photos} />
                <div className="flex flex-col md:flex-row">
                    <AcomodacaoDetalhes accommodation={acomodacao} />
                    <AcomodacaoDepoimentos testimonials={acomodacao.testimonials} />
                </div>
            </main>

            <footer className="bg-gray-300">
                <Rodape />
            </footer>
        </div>
    )
  }