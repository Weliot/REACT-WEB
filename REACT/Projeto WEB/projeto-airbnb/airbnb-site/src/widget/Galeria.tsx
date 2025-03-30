import Image from "next/image"
type Foto = {
    id: string
    source: string
    description: string
}
interface GaleriaProps {
    fotos: Foto[]
}

const Galeria = (
    {fotos} : GaleriaProps
) => {
    return (
        <div className="grid grid-cols-6 gap-2">
            {fotos.slice(0, 9).map((foto, indice) => {
                const primeiraFoto = indice == 0 ? 'col-span-2 row-span-2' : ''                
              return ( 
              <div key={indice}
              className={primeiraFoto}>
                <Image className="w-full aspect-square object-cover rounded-xl border shadow-gray-300 shadow-lg" 
                src={foto.source}
                alt={foto.description}
                width={300}
                height={300}
                />
              </div> )
            })}

        </div>
    
    )
}

export default Galeria