import { IconHeartFilled, IconStarFilled, IconUserCircle } from "@/assets/icones"

interface AcomodacaoProps {
    children: React.ReactNode
    local: string
    anfitriao: string
    data: string
    preco: number
    avaliacao: number
    preferidoHospedes: boolean
}

const Acomodacao = ({
    children, local, anfitriao, data, preco, avaliacao, preferidoHospedes
}: AcomodacaoProps) => {
    return(
        <figure className="relative">

            <div className="p-2 absolute w-full flex flex-row justify-between items-center">
                <div>
                    {preferidoHospedes && (
                        <span className="bg-white rounded-full px-4 py-1 font-semibold">
                        Preferido dos Hóspedes
                        </span>
                    )}
                </div>
                
                <IconHeartFilled className="stroke-white opacity-80 "
                    aria-label="Ícone de usuário"
                    size={30} />
            </div>

            {children}

            <figcaption className="pt-2">
                <div className="flex flex-row justify-between items-center">
                    <span className="font-semibold">{local}</span>
                    <div className="flex flex-row">
                    <IconStarFilled className="stroke-white opacity-80 "
                    aria-label="Avaliações"
                    size={20} />
                    <span>{avaliacao}</span>
                    </div>
                    
                </div>
                <div>Anfitriã(o): {anfitriao}</div>
                <div>{data}</div>
                <div className="font-semibold">R$ {preco} por noite</div>
            </figcaption>
        </figure>
    )
}

export default Acomodacao