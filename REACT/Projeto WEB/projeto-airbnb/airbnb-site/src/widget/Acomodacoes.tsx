import Acomodacao from "@/components/Acomodacoes"
import { Accommodation } from "@/types/AirbnbDados"
import Image from "next/image"
import Link from "next/link"

interface AcomodacoeslProps {
    accommodation: Accommodation[]
}

const Acomodacoes = (
  props: AcomodacoeslProps
) => {
    const listaAcomodacoes = props.accommodation
    return (
        <section className="py-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {listaAcomodacoes.map((acomodacao, indice)=>(
                <div key={indice}>
                  <Link href={acomodacao.slug}>
                    <Acomodacao 
                      local={acomodacao.location.description}
                      anfitriao={acomodacao.host}
                      data={acomodacao.date}
                      avaliacao={acomodacao.rating}
                      preco={acomodacao.price}
                      preferidoHospedes={acomodacao.hasBadge}
                    >

                      <Image className="w-full aspect-square object-cover rounded-xl border border-red-200 shadow-gray-300 shadow-lg"
                      src={acomodacao.photos[0].source}
                      alt={acomodacao.photos[0].description}
                      width={300}
                      height={300}     
                      />
                    </Acomodacao>
                  </Link>
                </div>
                
            ))}
            
        </section>
    )
}

export default Acomodacoes